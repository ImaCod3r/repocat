import { Infinity } from "lucide-react";

type UsageRingProps = {
  used: number;
  total?: number; // se não existir, é ilimitado
};

function UsageRing({ used, total }: UsageRingProps) {
  const isUnlimited = !total;

  const percentage = isUnlimited
    ? 100
    : Math.min((used / total) * 100, 100);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (isUnlimited) return "stroke-orange-500";
    if (percentage < 60) return "stroke-orange-400";
    if (percentage < 90) return "stroke-orange-500";
    return "stroke-red-500";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-36 w-36">
        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* Background */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            className="fill-none stroke-zinc-200"
          />

          {/* Progress */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`fill-none transition-all duration-500 ${getColor()}`}
          />
        </svg>

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isUnlimited ? (
            <Infinity className="h-10 w-10 text-orange-500" />
          ) : (
            <span className="text-2xl font-bold text-zinc-900">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>

      {/* Label */}
      <p className="text-sm text-zinc-600">
        {isUnlimited
          ? "Uso ilimitado"
          : `${used} de ${total} gerações usadas`}
      </p>
    </div>
  );
}

export default UsageRing;