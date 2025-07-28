import { useEffect } from "react";
import { useColorScheme } from "../src/useColorScheme";

export function ColorSchemeSwitcher({
  mode,
}: {
  mode: "light" | "dark" | "system";
}) {
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode(mode);
  }, [setMode, mode]);
  return null;
}
