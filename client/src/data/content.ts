export const categories = [
  { slug: "modeling", name: "Modeling", description: "Meshes, modifiers, and edit-mode workflows", icon: "cube" },
  { slug: "sculpting", name: "Sculpting", description: "Digital clay and brush-based shaping", icon: "brush" },
  { slug: "animation", name: "Animation", description: "Keyframes, rigs, and motion", icon: "film" },
  { slug: "rendering", name: "Rendering", description: "Materials, lighting, and output", icon: "sun" },
  { slug: "geometry-nodes", name: "Geometry Nodes", description: "Procedural modeling with node graphs", icon: "nodes" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export interface RawTutorial {
  slug: string;
  title: string;
  summary: string;
  body: string;
  youtubeId: string | null;
  difficulty: string;
  durationMinutes: number;
  order: number;
  categorySlug: CategorySlug;
}

export const rawTutorials: RawTutorial[] = [
  {
    slug: "blender-interface-navigation",
    title: "Blender Interface & Navigation",
    summary: "Learn the 3D viewport, outliner, and essential navigation shortcuts.",
    youtubeId: "B0J27sf9N1Y",
    difficulty: "beginner",
    durationMinutes: 18,
    order: 1,
    categorySlug: "modeling",
    body: `## Overview

Get comfortable moving around Blender's default layout.

## Steps

1. **Open Blender** and note the default workspace tabs: Layout, Modeling, Sculpting, etc.
2. **Middle-mouse drag** to orbit the camera around your scene.
3. **Shift + middle-mouse** to pan; **scroll** to zoom.
4. Use **Numpad 1, 3, 7** for front, side, and top orthographic views.
5. Press **N** to toggle the sidebar; explore the View and Item tabs.
6. Open the **Outliner** (top-right) to select objects by name.
7. Press **Tab** to switch between Object and Edit mode on a mesh.

## Practice

Add a Cube, UV Sphere, and Suzanne. Practice selecting each from the Outliner and framing with **Numpad .**`,
  },
  {
    slug: "adding-transforming-objects",
    title: "Adding and Transforming Objects",
    summary: "Create primitives, move, rotate, and scale with gizmos and shortcuts.",
    youtubeId: "nIoXOplUvAw",
    difficulty: "beginner",
    durationMinutes: 22,
    order: 2,
    categorySlug: "modeling",
    body: `## Overview

Master object creation and the transform tools.

## Steps

1. Press **Shift+A** → Mesh → add a **Monkey** (Suzanne).
2. Press **G** to grab/move, **R** to rotate, **S** to scale.
3. After pressing G/R/S, type **X**, **Y**, or **Z** to constrain to an axis.
4. Hold **Shift** while transforming for finer control.
5. Use the transform gizmo in the viewport header if you prefer visual handles.
6. Press **Ctrl+A** → Apply → Scale after non-uniform scaling before modifiers.
7. Duplicate with **Shift+D**, then confirm with left-click.

## Practice

Build a simple tower from scaled cubes. Apply scale on each before adding a Bevel modifier.`,
  },
  {
    slug: "edit-mode-basics",
    title: "Edit Mode Basics",
    summary: "Select vertices, edges, faces; extrude, inset, and loop cut.",
    youtubeId: "WyQbHI7K0X4",
    difficulty: "beginner",
    durationMinutes: 25,
    order: 3,
    categorySlug: "modeling",
    body: `## Overview

Edit mode is where you shape mesh geometry.

## Steps

1. Select a mesh and press **Tab** to enter Edit Mode.
2. Press **1, 2, 3** for vertex, edge, and face select modes.
3. **Box select (B)** and **Alt+Click** an edge loop to select loops.
4. **E** extrudes selected geometry; confirm with left-click.
5. **I** insets faces; adjust depth in the status bar or F6 panel.
6. **Ctrl+R** adds a loop cut; scroll to increase cuts.
7. **X** → Delete faces/edges/vertices as needed; **F** fills holes between edges.
8. **Ctrl+B** bevels selected edges.

## Practice

Model a simple mug: cylinder base, extrude walls, inset the rim, add a handle with extruded faces.`,
  },
  {
    slug: "materials-shading-intro",
    title: "Materials & Shading Intro",
    summary: "Principled BSDF, base color, roughness, and viewport shading modes.",
    youtubeId: "R2MRbK1ILcQ",
    difficulty: "beginner",
    durationMinutes: 20,
    order: 4,
    categorySlug: "rendering",
    body: `## Overview

Give your objects color and surface properties.

## Steps

1. Switch to the **Shading** workspace.
2. Select an object and click **New** in the Material Properties tab.
3. Open the **Shader Editor**; note the Principled BSDF node.
4. Adjust **Base Color**, **Roughness**, and **Metallic**.
5. Press **Z** → Material Preview to see materials in the viewport.
6. Add an **Image Texture** node and connect Color to Base Color for textures.
7. Use **UV Editing** workspace to unwrap (**U** → Smart UV Project) before texturing.

## Practice

Create three materials: metal, plastic, and glass (low roughness, transmission for glass in Cycles).`,
  },
  {
    slug: "sculpting-first-steps",
    title: "Sculpting — First Steps",
    summary: "Enter sculpt mode, dynotopo basics, and essential brushes.",
    youtubeId: "z7h4uv7EdjU",
    difficulty: "beginner",
    durationMinutes: 24,
    order: 1,
    categorySlug: "sculpting",
    body: `## Overview

Shape organic forms with digital brushes.

## Steps

1. Add a mesh with enough subdivisions (or enable **Dyntopo** in Sculpt Mode).
2. Switch to **Sculpt Mode** from the mode menu.
3. Use **Draw** brush to pull surfaces outward; **Shift** strokes subtract.
4. **Grab** brush moves large chunks; **Smooth** evens surfaces.
5. **Crease** and **Clay Strips** help define sharp forms and buildup.
6. Enable **Symmetry** on X for characters and mirrored objects.
7. Remesh periodically or apply Multires for detail.

## Practice

Sculpt a simple rock or skull from a subdivided sphere. Focus on silhouette first.`,
  },
  {
    slug: "keyframe-animation-basics",
    title: "Keyframe Animation Basics",
    summary: "Timeline, keyframes, interpolation, and simple object animation.",
    youtubeId: "uVsVuC8UBhE",
    difficulty: "beginner",
    durationMinutes: 28,
    order: 1,
    categorySlug: "animation",
    body: `## Overview

Bring objects to life with keyframe animation.

## Steps

1. Select an object; press **I** → Location to insert a location keyframe.
2. Move the playhead on the **Timeline** (frame 1, 24, 48…).
3. Move the object and press **I** → Location again.
4. Press **Space** to play the animation.
5. Open the **Graph Editor** to tweak interpolation (ease in/out).
6. Use **I** → Rotation and Scale for full transforms.
7. Enable **Auto Keyframe** (red record dot) for automatic keying while editing.

## Practice

Animate a bouncing ball: squash on impact (scale Y), stretch in the air, ease in the Graph Editor.`,
  },
  {
    slug: "eevee-vs-cycles",
    title: "EEVEE vs Cycles Overview",
    summary: "Real-time vs path-traced rendering and when to use each.",
    youtubeId: "IdIeKmY2qFM",
    difficulty: "beginner",
    durationMinutes: 15,
    order: 2,
    categorySlug: "rendering",
    body: `## Overview

Blender offers two main render engines.

## EEVEE (Real-time)

- Fast preview and game-style visuals
- Screen-space effects; great for stylized work

## Cycles (Path-traced)

- Physically based light transport
- Slower but photorealistic

## Steps

1. Open **Render Properties** → set engine to EEVEE or Cycles.
2. Add a **Sun** or **Area** light; adjust strength.
3. **F12** to render; **Ctrl+F12** for animation render.

## Practice

Render the same scene in both engines. Compare noise, reflections, and render time.`,
  },
  {
    slug: "geometry-nodes-first-graph",
    title: "Geometry Nodes — First Graph",
    summary: "Node-based procedural geometry: instancing and simple modifiers.",
    youtubeId: "AIRiX7b7q2Q",
    difficulty: "beginner",
    durationMinutes: 30,
    order: 1,
    categorySlug: "geometry-nodes",
    body: `## Overview

Build procedural setups with a node graph.

## Steps

1. Add a mesh; open **Geometry Nodes** workspace.
2. Click **New** in the modifier stack to add a Geometry Nodes modifier.
3. Use **Mesh Primitive** → **Cube** or **Grid**.
4. Connect **Transform** node to offset/scale the result.
5. Add **Instance on Points** with a smaller mesh as instance.
6. Use **Distribute Points on Faces** to scatter instances.

## Practice

Create a grid of cubes on a plane with random heights using Position and Set Position nodes.`,
  },
  {
    slug: "modifiers-non-destructive",
    title: "Modifiers — Non-Destructive Workflow",
    summary: "Subdivision, mirror, array, and solidify for flexible modeling.",
    youtubeId: "WZ9MTeL9DCc",
    difficulty: "beginner",
    durationMinutes: 26,
    order: 4,
    categorySlug: "modeling",
    body: `## Overview

Modifiers stack non-destructive operations on your mesh.

## Steps

1. Select mesh → **Modifier Properties** → Add Modifier.
2. **Subdivision Surface** smooths; keep creases with supporting edge loops.
3. **Mirror** duplicates across an axis.
4. **Array** repeats meshes.
5. **Solidify** gives thickness to thin surfaces.
6. Drag modifiers to reorder; the stack matters.

## Practice

Model half a vase with Mirror + Subsurf. Add Solidify for wall thickness.`,
  },
  {
    slug: "lighting-basics",
    title: "Lighting Basics for Scenes",
    summary: "Three-point lighting concepts with area and point lights.",
    youtubeId: "V3w7ohQSj1E",
    difficulty: "beginner",
    durationMinutes: 20,
    order: 3,
    categorySlug: "rendering",
    body: `## Overview

Light your subject for clarity and mood.

## Steps

1. **Shift+A** → Light → Area / Point / Sun.
2. **Key light**: main source, 45° from camera.
3. **Fill light**: softer, opposite side.
4. **Rim/back light**: separates subject from background.
5. Enable **World** HDRI for ambient fill.

## Practice

Light a single Suzanne head with three lights. Render a still in Cycles at 128 samples.`,
  },
];

export const cheatSheets = [
  {
    slug: "viewport-navigation",
    title: "Viewport Navigation",
    category: "navigation",
    content: `| Action | Shortcut |
|--------|----------|
| Orbit | Middle mouse drag |
| Pan | Shift + Middle mouse |
| Zoom | Scroll wheel |
| Frame selected | Numpad . |
| Front / Side / Top | Numpad 1 / 3 / 7 |
| Toggle ortho/persp | Numpad 5 |
| View all | Home |
| Fly mode | Shift + ~ |`,
  },
  {
    slug: "transform-gizmo",
    title: "Transform & Gizmo",
    category: "transform",
    content: `| Action | Shortcut |
|--------|----------|
| Move (Grab) | G |
| Rotate | R |
| Scale | S |
| Confirm | Left click |
| Cancel | Right click / Esc |
| Constrain axis | X, Y, or Z after G/R/S |
| Precise mode | Hold Shift |
| Reset transform | Alt+G / Alt+R / Alt+S |
| Duplicate | Shift+D |`,
  },
  {
    slug: "edit-mode-ops",
    title: "Edit Mode Operations",
    category: "modeling",
    content: `| Action | Shortcut |
|--------|----------|
| Edit mode toggle | Tab |
| Vertex / Edge / Face | 1 / 2 / 3 |
| Extrude | E |
| Inset faces | I |
| Loop cut | Ctrl+R |
| Bevel | Ctrl+B |
| Delete menu | X |
| Fill face | F |
| Select loop | Alt+Click edge |
| Merge | M |`,
  },
  {
    slug: "general-blender",
    title: "General Blender",
    category: "general",
    content: `| Action | Shortcut |
|--------|----------|
| Add menu | Shift+A |
| Search command | F3 |
| Undo / Redo | Ctrl+Z / Ctrl+Shift+Z |
| Save | Ctrl+S |
| Render image | F12 |
| Shading pie | Z |
| Properties region | N |
| Toggle quad view | Ctrl+Alt+Q |`,
  },
];

export const resources = [
  { title: "Blender Manual", url: "https://docs.blender.org/manual/en/latest/", description: "Official documentation for every Blender feature.", type: "docs" },
  { title: "Blender Studio", url: "https://studio.blender.org/", description: "Open movies, training, and production assets from the Blender team.", type: "community" },
  { title: "Blender Market", url: "https://blendermarket.com/", description: "Addons, models, and brushes from creators.", type: "addon" },
  { title: "Poly Haven", url: "https://polyhaven.com/", description: "Free HDRIs, textures, and 3D models (CC0).", type: "asset" },
  { title: "Blender Artists Community", url: "https://blenderartists.org/", description: "Forums for feedback, WIPs, and community support.", type: "community" },
  { title: "Blender Development", url: "https://developer.blender.org/", description: "Source code, bug tracker, and contribution guides.", type: "docs" },
  { title: "Sketchfab — Blender", url: "https://sketchfab.com/tags/blender", description: "Browse and download Blender-friendly 3D models.", type: "asset" },
  { title: "Gumroad Blender", url: "https://gumroad.com/discover?query=blender", description: "Independent tutorials and asset packs.", type: "addon" },
];
