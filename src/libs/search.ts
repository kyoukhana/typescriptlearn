import type { Result } from "types/result";

/**
* The search function takes a query it 
sends * to the back end, as well as a 
couple of tags * as a string array, to 
get filtered results */

declare function search(query: string, tags: string[]): Result[];
