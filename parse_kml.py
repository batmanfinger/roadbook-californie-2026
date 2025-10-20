#!/usr/bin/env python3
"""
Script pour extraire les itinéraires du fichier KML et les convertir en format JavaScript
"""

import xml.etree.ElementTree as ET
import json

def parse_kml(kml_file):
    """Parse le fichier KML et extrait les coordonnées"""
    tree = ET.parse(kml_file)
    root = tree.getroot()
    
    # Namespace KML
    ns = {'kml': 'http://www.opengis.net/kml/2.2'}
    
    routes = []
    
    # Trouver tous les Placemark
    for placemark in root.findall('.//kml:Placemark', ns):
        name_elem = placemark.find('kml:name', ns)
        name = name_elem.text if name_elem is not None else "Route sans nom"
        
        # Trouver les coordonnées
        coords_elem = placemark.find('.//kml:coordinates', ns)
        if coords_elem is not None:
            coords_text = coords_elem.text.strip()
            
            # Parser les coordonnées (format: lng,lat,alt)
            coord_pairs = coords_text.split()
            coordinates = []
            
            # Simplifier : garder 1 point sur 20 pour réduire la taille
            for i, pair in enumerate(coord_pairs):
                if i % 20 == 0:  # Garder 1 point sur 20
                    parts = pair.split(',')
                    if len(parts) >= 2:
                        lng = float(parts[0])
                        lat = float(parts[1])
                        coordinates.append([lat, lng])  # Leaflet utilise [lat, lng]
            
            # Toujours garder le dernier point
            if len(coord_pairs) > 0:
                last_pair = coord_pairs[-1].split(',')
                if len(last_pair) >= 2:
                    coordinates.append([float(last_pair[1]), float(last_pair[0])])
            
            routes.append({
                'name': name,
                'coordinates': coordinates,
                'originalPoints': len(coord_pairs),
                'simplifiedPoints': len(coordinates)
            })
            
            print(f"✓ {name}: {len(coord_pairs)} points → {len(coordinates)} points")
    
    return routes

def generate_javascript(routes):
    """Génère le code JavaScript pour map.js"""
    
    js_code = """
// ==========================================
// ITINÉRAIRES ROUTIERS (Polylines)
// ==========================================

const routePolylines = {
"""
    
    for i, route in enumerate(routes):
        route_name = route['name'].replace(' ', '_').replace('à', 'a').lower()
        js_code += f"  '{route_name}': {json.dumps(route['coordinates'])}"
        if i < len(routes) - 1:
            js_code += ","
        js_code += f"  // {route['originalPoints']} points simplifiés à {route['simplifiedPoints']}\n"
    
    js_code += """};

// Fonction pour dessiner les itinéraires routiers
function drawRoadRoutes() {
  Object.keys(routePolylines).forEach(routeName => {
    const polyline = L.polyline(routePolylines[routeName], {
      color: '#FF6B35',
      weight: 3,
      opacity: 0.7
    }).addTo(map);
  });
}
"""
    
    return js_code

def main():
    kml_file = 'California 2026.kml'
    
    print("Parsing du fichier KML...")
    routes = parse_kml(kml_file)
    
    print(f"\n✓ {len(routes)} route(s) trouvée(s)\n")
    
    print("Génération du code JavaScript...")
    js_code = generate_javascript(routes)
    
    # Sauvegarder dans un fichier
    output_file = 'routes_polylines.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"✓ Code JavaScript généré dans '{output_file}'")
    print("\nÉtapes suivantes:")
    print("1. Copiez le contenu de 'routes_polylines.js'")
    print("2. Ajoutez-le à la fin de votre fichier 'js/map.js'")
    print("3. Remplacez la fonction drawRoute() par drawRoadRoutes()")

if __name__ == '__main__':
    main()
