//my solutions
var wordCounter = function (text) {
    // TODO - Add your implementation here
    if (this instanceof wordCounter) {
        this.words = [];
        if (/[^\.\s\,]/.test(text)) {
            text = text.split(/\s|\.|\,/g);
            for (var i = 0; i < text.length; i++) {
                if ('string' !== typeof text[i]) {
                    continue;
                } else if (!this.words[text[i]]) {
                    this.words[text[i]] = 1;
                } else {
                    this.words[text[i]] += 1;
                }
            }
        }
        this.count = function (word) {
            if (!this.words[word]) {
                return 0;
            } else {
                if ('function' === typeof this.words[word]) {
                    return 0;
                } else if ('string' === typeof this.words[word]) {
                    return 1;
                } else {
                    return this.words[word];
                }
            }
        };
    } else {
        return new wordCounter(text);
    }
};



//sample tests
var counter = wordCounter("Lorem ipsum");
Test.assertEquals(counter.count("Lorem"), 1);
Test.assertEquals(counter.count("hey"), 0);


//best practices
var wordCounter = function(text) {
    var count = {};
    text.split(/[ ,.]+/).forEach(w => w ? count['$'+w] = (count['$'+w]||0) + 1 : null);
    return { count: w => count['$'+w]||0 }
  };