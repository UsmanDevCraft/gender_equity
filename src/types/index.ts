export interface MetaDataModalProps {
  outfitIndex: number;
}

export interface MinimalAvatarProps {
  gender?: "male" | "female";
  glbAssets?: {
    body?: string;
    head?: string;
    hair?: string;
    shirt?: string;
    pants?: string;
    shoes?: string;
    outfit?: string;
    outfitType?: string;
    bodyColorTexture?: string;
    eyeColorTexture?: string;
    hairColor?: string;
  };
  preview?: {
    hair?: string;
    shirt?: string;
    pants?: string;
    shoes?: string;
    outfit?: string;
    isCostume?: boolean;
    bodyColorTexture?: string;
    eyeColorTexture?: string;
    body?: string;
    hairColor?: string;
  };
  showControls?: boolean;
  backgroundColor?: string;
}
