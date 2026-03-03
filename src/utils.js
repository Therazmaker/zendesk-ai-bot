// Utility functions for text similarity, keyword extraction, validation, and IndexedDB operations

/**
 * Calculate text similarity using Jaccard index.
 * @param {string} text1 - First text.
 * @param {string} text2 - Second text.
 * @returns {number} - Jaccard similarity coefficient.
 */
function textSimilarity(text1, text2) {
    const setA = new Set(text1.split(' '));
    const setB = new Set(text2.split(' '));
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    const union = new Set([...setA, ...setB]);
    return intersection.size / union.size;
}

/**
 * Extract keywords from a text.
 * @param {string} text - The input text.
 * @returns {Array} - Array of keywords.
 */
function extractKeywords(text) {
    // Simple keyword extraction based on word frequency
    const words = text.split(' ');
    const frequencyMap = {};
    words.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });
    return Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]).slice(0, 5);
}

/**
 * Validate email format.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

/**
 * Save data to IndexedDB.
 * @param {string} dbName - The name of the database.
 * @param {string} storeName - The name of the store.
 * @param {object} data - The data to save.
 */
function saveToIndexedDB(dbName, storeName, data) {
    const request = indexedDB.open(dbName);
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        store.add(data);
    };
}

// Exporting functions
export { textSimilarity, extractKeywords, validateEmail, saveToIndexedDB };