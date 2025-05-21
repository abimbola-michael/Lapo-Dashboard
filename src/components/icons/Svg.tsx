import React from "react";

interface SvgProps {
  src: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Svg: React.FC<SvgProps> = ({
  src,
  color = "currentColor",
  className = "",
  style,
}) => {
  const [svgContent, setSvgContent] = React.useState<string>("");

  React.useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((svgText) => {
        // Replace the stroke and fill colors with the provided color
        const coloredSvg = svgText
          .replace(/stroke="#[^"]*"/g, `stroke="${color}"`)
          .replace(/fill="#[^"]*"/g, `fill="${color}"`);
        setSvgContent(coloredSvg);
      })
      .catch((error) => {
        console.error(`Error loading SVG: ${src}`, error);
      });
  }, [src, color]);

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
