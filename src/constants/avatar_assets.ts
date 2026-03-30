export const DEFAULT_HEADS_MALE: Record<string, string> = {
  default: "/Heads/MainHead_Mesh.glb",
};
export const DEFAULT_HEADS_FEMALE: Record<string, string> = {
  default: "/Heads/MainHead_Female_v02.glb",
};
export const DEFAULT_BODY_MALE: Record<string, string> = {
  default: "/Body-Variants/Male/Male_Body_v04.glb",
};
export const DEFAULT_BODY_FEMALE: Record<string, string> = {
  default: "/Body-Variants/Female/Female_Body_v06.glb",
};

export const OUTFITS_MALE: Record<string, string> = {
  outfit1: "/male_outfit_glbs/outfit-journalist-01-m.glb",
  outfit2: "/male_outfit_glbs/outfit-farmer-01-m.glb",
  outfit3: "/male_outfit_glbs/outfit-firefighter-01-m.glb",
  outfit4: "/male_outfit_glbs/outfit-software-engineer-01-m.glb",
  outfit5: "/male_outfit_glbs/outfit-mechanic-02-m.glb",
  outfit6: "/male_outfit_glbs/outfit-nurse-m-02.glb",
  outfit7: "/male_outfit_glbs/outfit-pilot-01-m.glb",
  outfit8: "/male_outfit_glbs/outfit-police-01-m.glb",
  outfit9: "/male_outfit_glbs/outfit-retailsalesperson-01-m.glb",
  outfit10: "/male_outfit_glbs/outfit-doctor-01-v2-m.glb",
};

export const OUTFITS_FEMALE: Record<string, string> = {
  outfit1: "/female_outfit_glbs/outfit-journalist-02-f.glb",
  outfit2: "/female_outfit_glbs/outfit-farmer-02-f.glb",
  outfit3: "/female_outfit_glbs/outfit-firefighter-02-f.glb",
  outfit4: "/female_outfit_glbs/outfit-software-engineer-f.glb",
  outfit5: "/female_outfit_glbs/outfit-mechanic-01-f.glb",
  outfit6: "/female_outfit_glbs/outfit-nurse-f-01.glb",
  outfit7: "/female_outfit_glbs/outfit-pilot-01-f.glb",
  outfit8: "/female_outfit_glbs/outfit-police-02-f.glb",
  outfit9: "/female_outfit_glbs/outfit-retailsalesperson-02-f.glb",
  outfit10: "/female_outfit_glbs/outfit-doctor-01-v2-f.glb",
};

export const BACKGROUND_IMAGES: Record<string, string> = {
  bg1: "/pexel_imgs/journalist.jpg",
  bg2: "/pexel_imgs/farmer.jpg",
  bg3: "/pexel_imgs/firefighter.jpg",
  bg4: "/pexel_imgs/software.jpg",
  bg5: "/pexel_imgs/mechanic.jpg",
  bg6: "/pexel_imgs/nurse.jpg",
  bg7: "/pexel_imgs/pilot.jpg",
  bg8: "/pexel_imgs/police.jpg",
  bg9: "/pexel_imgs/salesperson.jpg",
  bg10: "/pexel_imgs/doctor.jpg",
};

export const DEFAULT_ASSETS = (gender: "male" | "female") => ({
  body:
    gender === "male"
      ? "/Body-Variants/Male/Male_Body_v04.glb"
      : "/Body-Variants/Female/Female_Body_v06.glb",
  head:
    gender === "male"
      ? "/Heads/MainHead_Mesh.glb"
      : "/Heads/MainHead_Female_v02.glb",
  hair: gender === "male" ? "/Hair/Hair.glb" : "/Hair/female_hair_76.glb",
  hairColor: "#000000",
  shirt: gender === "male" ? "/Top/Shirt.glb" : "/Top/top-tshirt-01-f.glb",
  outfit:
    gender === "male"
      ? "/male_outfit_glbs/outfit-software-engineer-01-m.glb"
      : "/female_outfit_glbs/outfit-software-engineer-f.glb",
  pants:
    gender === "male" ? "/Bottom/Pants.glb" : "/Bottom/pants-casual-01-f.glb",
  shoes:
    gender === "male"
      ? "/Footwear/Shoes.glb"
      : "/Footwear/tennis-casual-01-grey-f.glb",
  bodyColorTexture: "/Skin-Color/7.png",
  eyeColorTexture:
    "https://simmingai.s3.us-east-1.amazonaws.com/simmingAssets/17633719094171700634379-1622793664-eye-04-mask-1699880622457-1700634386564.png",
  animation:
    gender === "male"
      ? "/Animations/M_Standing_Idle_001.glb"
      : "/Animations/F_Standing_Idle_001.glb",
});
