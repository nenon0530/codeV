//my solutions
function DNAStrand1(dna) {
    //your code here
    var output = '';
    return output = dna.split('').map(
        function (c) {
            if (c === 'A') {
                return 'T';
            } else if (c === 'T') {
                return 'A';
            } else if (c === 'C') {
                return 'G';
            } else if (c === 'G') {
                return 'C';
            }
        }).join('');
}


//sample tests
Test.assertEquals(DNAStrand("AAAA"), "TTTT", "String AAAA is");
Test.assertEquals(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
Test.assertEquals(DNAStrand("GTAT"), "CATA", "String GTAT is");


//best practices
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}
DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

//best practices2
var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}