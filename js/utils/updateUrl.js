/**
 * @copyright dinaauliyah 2023
 * @author sadee <dinaauliyah@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { urlEncode } from "./urlEncode.js";


/**
 * Update url
 * @param {Object} filterObj Filter object
 * @param {String} searchType Search type eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    const /** {String} */ searchQuery = urlEncode(filterObj);

    window.location = `${searchType}.html?${searchQuery}`;
  }, 500);
}