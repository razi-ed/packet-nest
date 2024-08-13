import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ITEMS_PER_PAGE } from "@package/search/search.constants";

dayjs.extend(relativeTime);

export function extractGithubRepoOwner(githubUrl: string): string | null {
  if (githubUrl) {
    const parts = githubUrl.split("/");
    // Check if the URL has the right number of parts
    if (parts.length >= 5 && parts[2] === "github.com") {
      return parts[3];
    }
  }
  return "N/A";
}

export function convertToRelativeDuration(isoDate: string): string {
  return dayjs().to(dayjs(isoDate));
}

export function getPaginatedResultsShownRange(
  pageNumber: number,
  total: number
): string {
  const perPageItems = ITEMS_PER_PAGE;

  const start = (pageNumber - 1) * perPageItems + 1;
  const end = Math.min(pageNumber * perPageItems, total);

  return `${start}-${end} of ${total} items`;
}
