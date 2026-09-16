import Image from "next/image";
import avatar from "../../public/avatar.webp";

export function Avatar({
  size = 30,
  className = "",
  alt = "",
  eager = false,
}: {
  size?: number;
  className?: string;
  alt?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={avatar}
      alt={alt}
      width={size}
      height={size}
      sizes={`${size}px`}
      loading={eager ? "eager" : "lazy"}
      className={`brand-avatar ${className}`}
    />
  );
}
