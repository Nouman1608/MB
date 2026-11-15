/**
 * D-454 -- initials for a teacher who has no photograph yet.
 *
 * The teacher cards used to print the literal word "Photo" in the empty
 * avatar circle, which reads as an unfinished page. Initials are derived
 * from the profile's own `name`, so nothing is invented, and the circle is
 * still `aria-hidden` because the full name sits right beside it.
 *
 * First and last word of the name: "Harris Khan" -> "HK",
 * "Muhammad Ghazali Siddiqui" -> "MS", "Aizaz" -> "A".
 */
export const initials = (name: string): string => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
};
