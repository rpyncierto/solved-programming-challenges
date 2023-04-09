const canConstruct = (ransomNote, magazine) => {
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazine.indexOf(ransomNote[i])
        if ( index === -1) return false;
        else magazine = magazine.replace(ransomNote[i], "");
    }
    return true;
}