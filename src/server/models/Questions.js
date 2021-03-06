var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Question Model
 * ==========
 */

var Question = new keystone.List('Question', {
    map: {
        name: 'title',
    },
    autokey: {
        path: 'slug',
        from: 'title',
        unique: true,
    },
});

Question.add({
    title: {
        type: String,
        required: true
    },
    quiz: {
        type: Types.Relationship,
        ref: 'Quiz',
        filters: {
            chapter: ':chapter',
            course: ':course',
        },
    },
    questionTitle: {
        type: Types.Html,
        wysiwyg: true,
    },
    questionType: {
        type: Types.Select,
        options: 'multiple select, multiple choice, short answer, coding, mixed and match',
        emptyOption: true,
    },
    
    activateHelp: {
        type: Types.Boolean,
    },
    helpContent: {
        type: Types.Html,
        wysiwyg: true,
        dependsOn: {
            activateHelp: true
        }
    },

    // QUESTION TYPES

    //// Multiple choice

    questionOptionsChoice: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'multiple choice',
        }
    },
    correctAnswerChoice: {
        type: String,
        dependsOn: {
            questionType: 'multiple choice',
        }
    },

    //// Multiple select

    questionOptionsSelect: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'multiple select'
        }
    },
    correctAnswerSelect: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'multiple select'
        }
    },

    //// Short answer

    questionAnswer: {
        type: String,
        dependsOn: {
            questionType: 'short answer',
        },
    },

    //// Mixed and match

    questionColumn: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'mixed and match',
        }
    },
    correctAnswers: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'mixed and match',
        },
    },

    //// Coding

    expectedResult: {
        type: Types.TextArray,
        dependsOn: {
            questionType: 'coding',
        },
    },
    
    // Hints
    
    activateHints: {
        type: Types.Boolean
    },
    hint: {
        type: Types.Html,
        wysiwyg: true,
        dependsOn: {
            activateHints: true
        }
    }

});

Question.defaultColumns = 'title, course, chapter, quiz, questionType';

Question.register();
