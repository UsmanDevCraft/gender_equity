import { useProgress, Html } from "@react-three/drei";

export function AvatarLoader({
  position = [0, 0, 0],
  label = "Buffering Assets...",
}: {
  position?: [number, number, number];
  label?: string;
}) {
  const { progress } = useProgress();
  return (
    <group position={position}>
      <Html center>
        <div className="flex flex-col items-center justify-center p-4 pointer-events-none">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-500">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] animate-pulse whitespace-nowrap">
            {label}
          </p>
        </div>
      </Html>
    </group>
  );
}
