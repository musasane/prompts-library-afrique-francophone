import { CATEGORICAL } from "./theme";

// Terrain
export const TERRAIN_WIDTH_M = 15;
export const TERRAIN_DEPTH_M = 20;
export const TERRAIN_AREA_M2 = TERRAIN_WIDTH_M * TERRAIN_DEPTH_M;
export const SCALE_PX_PER_M = 38;

// Maison : plan "mono-travée" — chaque pièce occupe toute la largeur (7 m)
// et possède donc un mur extérieur à l'ouest ET à l'est => ventilation
// traversante sur toutes les pièces, y compris la chambre parents.
export const HOUSE_WIDTH_M = 7;
export const HOUSE_DEPTH_M = 16;
export const HOUSE_MARGIN_X_M = (TERRAIN_WIDTH_M - HOUSE_WIDTH_M) / 2; // 4 m de jardin de chaque côté
export const HOUSE_MARGIN_TOP_M = 2; // cour d'entrée
export const HOUSE_MARGIN_BOTTOM_M =
  TERRAIN_DEPTH_M - HOUSE_DEPTH_M - HOUSE_MARGIN_TOP_M; // 2 m à l'arrière

// Repères de mise en page partagés entre TerrainScene et PlanScene, pour que
// le rectangle du terrain reste visuellement au même endroit d'une scène à
// l'autre.
export const COMPOSITION_WIDTH = 1080;
export const COMPOSITION_HEIGHT = 1920;
export const TERRAIN_PX_WIDTH = TERRAIN_WIDTH_M * SCALE_PX_PER_M;
export const TERRAIN_PX_HEIGHT = TERRAIN_DEPTH_M * SCALE_PX_PER_M;
export const CANVAS_LEFT = (COMPOSITION_WIDTH - TERRAIN_PX_WIDTH) / 2;
export const CANVAS_TOP = 480;
export const HOUSE_LEFT_PX = CANVAS_LEFT + HOUSE_MARGIN_X_M * SCALE_PX_PER_M;
export const HOUSE_TOP_PX = CANVAS_TOP + HOUSE_MARGIN_TOP_M * SCALE_PX_PER_M;

export type Room = {
  id: string;
  label: string;
  sub?: string;
  x: number; // m, relatif au coin haut-gauche de la maison
  y: number;
  w: number;
  h: number;
  fill: string;
  highlight?: boolean;
  ventilated?: boolean;
};

export const ROOMS: Room[] = [
  {
    id: "veranda",
    label: "Véranda",
    x: 0,
    y: 0,
    w: HOUSE_WIDTH_M,
    h: 1.5,
    fill: "#c9c6bd",
  },
  {
    id: "salon",
    label: "Salon / Séjour",
    x: 0,
    y: 1.5,
    w: HOUSE_WIDTH_M,
    h: 4.0,
    fill: CATEGORICAL.blue,
    ventilated: true,
  },
  {
    id: "cuisine",
    label: "Cuisine",
    x: 0,
    y: 5.5,
    w: HOUSE_WIDTH_M,
    h: 2.0,
    fill: CATEGORICAL.aqua,
    ventilated: true,
  },
  {
    id: "parents",
    label: "Chambre Parents",
    sub: "avec salle d'eau",
    x: 0,
    y: 7.5,
    w: HOUSE_WIDTH_M,
    h: 3.5,
    fill: CATEGORICAL.orange,
    highlight: true,
    ventilated: true,
  },
  {
    id: "sanitaire",
    label: "Douche / WC",
    x: 0,
    y: 11.0,
    w: HOUSE_WIDTH_M,
    h: 2.0,
    fill: CATEGORICAL.violet,
  },
  {
    id: "chambre2",
    label: "Chambre Enfants",
    x: 0,
    y: 13.0,
    w: HOUSE_WIDTH_M,
    h: 3.0,
    fill: CATEGORICAL.green,
    ventilated: true,
  },
];

export const HOUSE_AREA_M2 = ROOMS.reduce((sum, r) => sum + r.w * r.h, 0);

export type BudgetItem = {
  id: string;
  label: string;
  amount: number;
  color: string;
};

export const BUDGET_ITEMS: BudgetItem[] = [
  {
    id: "gros-oeuvre",
    label: "Fondations & gros œuvre",
    amount: 1_800_000,
    color: CATEGORICAL.blue,
  },
  {
    id: "toiture",
    label: "Toiture (charpente + tôles)",
    amount: 900_000,
    color: CATEGORICAL.green,
  },
  {
    id: "menuiserie",
    label: "Menuiserie (portes, fenêtres)",
    amount: 600_000,
    color: CATEGORICAL.magenta,
  },
  {
    id: "plomberie-elec",
    label: "Plomberie & électricité",
    amount: 500_000,
    color: CATEGORICAL.yellow,
  },
  {
    id: "finitions",
    label: "Finitions (enduit, peinture, carrelage)",
    amount: 700_000,
    color: CATEGORICAL.aqua,
  },
  {
    id: "main-oeuvre",
    label: "Main d'œuvre",
    amount: 350_000,
    color: CATEGORICAL.orange,
  },
  {
    id: "imprevus",
    label: "Imprévus",
    amount: 150_000,
    color: CATEGORICAL.violet,
  },
];

export const BUDGET_MAX_ITEM = Math.max(...BUDGET_ITEMS.map((b) => b.amount));
export const BUDGET_TOTAL = BUDGET_ITEMS.reduce((sum, b) => sum + b.amount, 0);

export const formatFCFA = (n: number) =>
  `${Math.round(n).toLocaleString("fr-FR")} FCFA`;
