/*
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights
 * Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the “License”); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an “AS IS”
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./std subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU Affero General Public License (the [AGPLv3]
 * License), in which case the provisions of [AGPLv3] License are
 * applicable instead of those above. If you wish to allow use of your
 * version of this file only under the terms of the [AGPLv3] License
 * and not to allow others to use your version of this file under the
 * CPAL, indicate your decision by deleting the provisions above and
 * replace them with the notice and other provisions required by the
 * [AGPLv3] License. If you do not delete the provisions above, a
 * recipient may use your version of this file under either the CPAL
 * or the [AGPLv3] License.”
 */

var data = {
	"ITEM-1": {
		"id": "ITEM-1",
		"title":"Boundaries of Dissent: Protest and State Power in the Media Age",
		"author": [
			{
				"family": "D'Arcus",
				"given": "Bruce",
				"static-ordering": false
			}
		],
        "note":"The apostrophe in Bruce's name appears in proper typeset form.",
		"publisher": "Routledge",
        "publisher-place": "New York",
		"issued": {
			"date-parts":[
				[2006]
			]
		},
		"type": "book"
	},
	"ITEM-2": {
		"id": "ITEM-2",
		"author": [
			{
				"family": "Bennett",
				"given": "Frank G.",
				"suffix": "Jr.",
				"comma-suffix": true,
				"static-ordering": false
			}
		],
		"title":"Getting Property Right: \"Informal\" Mortgages in the Japanese Courts",
		"container-title":"Pacific Rim Law & Policy Journal",
		"volume": "18",
		"page": "463-509",
		"issued": {
			"date-parts":[
				[2009, 8]
			]
		},
		"type": "article-journal",
        "note": "Note the flip-flop behavior of the quotations marks around \"informal\" in the title of this citation.  This works for quotation marks in any style locale.  Oh, and, uh, these notes illustrate the formatting of annotated bibliographies (!).",
        "url": "http://www.zotero.org/some/journal/article?arg1=purple&arg2=green"
	},
	"ITEM-3": {
		"id": "ITEM-3",
		"title":"Key Process Conditions for Production of C<sub>4</sub> Dicarboxylic Acids in Bioreactor Batch Cultures of an Engineered <i>Saccharomyces cerevisiae</i> Strain",
        "note":"This cite illustrates the rich text formatting capabilities in the new processor, as well as page range collapsing (in this case, applying the collapsing method required by the Chicago Manual of Style).  Also, as the IEEE example above partially illustrates, we also offer robust handling of particles such as \"van\" and \"de\" in author names.",
		"author": [
			{
				"family": "Zelle",
				"given": "Rintze M."
			},
			{
				"family": "Hulster",
				"given": "Erik",
				"non-dropping-particle":"de"
			},
			{
				"family": "Kloezen",
				"given": "Wendy"
			},
			{
				"family":"Pronk",
				"given":"Jack T."
			},
			{
				"family": "Maris",
				"given":"Antonius J.A.",
				"non-dropping-particle":"van"
			}
		],
		"container-title": "Applied and Environmental Microbiology",
		"issued":{
			"date-parts":[
				[2010, 2]
			]
		},
		"page": "744-750",
		"volume":"76",
		"issue": "3",
		"DOI":"10.1128/AEM.02396-09",
		"type": "article-journal"
	},
	"ITEM-4": {
		"id": "ITEM-4",
		"author": [
			{
				"family": "Razlogova",
				"given": "Elena"
			}
		],
		"title": "Radio and Astonishment: The Emergence of Radio Sound, 1920-1926",
		"type": "speech",
		"event": "Society for Cinema Studies Annual Meeting",
		"event-place": "Denver, CO",
        "note":"All styles in the CSL repository are supported by the new processor, including the popular Chicago styles by Elena.",
		"issued": {
			"date-parts": [
				[
					2002,
					5
				]
			]
		}
	},
	"ITEM-5": {
		"id": "ITEM-5",
		"author": [
			{
				"family": "\u68b6\u7530",
				"given": "\u5c06\u53f8"
			},
			{
				"family": ":ja-alalc97: Kajita",
				"given": "Shoji"
			},
			{
				"family": "\u89d2\u6240",
				"given": "\u8003"
			},
			{
				"family": ":ja-alalc97: Kakusho",
				"given": "Takashi"
			},
			{
				"family": "\u4e2d\u6fa4",
				"given": "\u7be4\u5fd7"
			},
			{
				"family": ":ja-alalc97: Nakazawa",
				"given": "Atsushi"
			},
			{
				"family": "\u7af9\u6751",
				"given": "\u6cbb\u96c4"
			},
			{
				"family": ":ja-alalc97: Takemura",
				"given": "Haruo"
			},
			{
				"family": "\u7f8e\u6fc3",
				"given": "\u5c0e\u5f66"
			},
			{
				"family": ":ja-alalc97: Mino",
				"given": "Michihiko"
			},
			{
				"family": "\u9593\u702c",
				"given": "\u5065\u4e8c"
			},
			{
				"family": ":ja-alalc97: Mase",
				"given": "Kenji"
			}
		],
		"title": "\u9ad8\u7b49\u6559\u80b2\u6a5f\u95a2\u306b\u304a\u3051\u308b\u6b21\u4e16\u4ee3\u6559\u80b2\u5b66\u7fd2\u652f\u63f4\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u69cb\u7bc9\u306b\u5411\u3051\u3066 :ja-alalc97: K\u014dt\u014d ky\u014diku ni okeru jisedai ky\u014diku gakush\u016b shien puratto f\u014dmu no k\u014dchiku ni mukete :en: Toward the Development of Next-Generation Platforms for Teaching and Learning in Higher Education",
		"container-title": "\u65e5\u672c\u6559\u80b2\u5de5\u5b66\u4f1a\u8ad6\u6587\u8a8c",
		"volume": "31",
		"issue": "3",
		"page": "297-305",
		"issued": {
			"date-parts": [
				[
					2007,
					12
				]
			]
		},
        "note": "Note the transformations to which this cite is subjected in the samples above, and the fact that it appears in the correct sort position in all rendered forms.  Selection of multi-lingual content can be configured in the style, permitting one database to serve a multi-lingual author in all languages in which she might publish.",
		"type": "article-journal"

	},
	"ITEM-6": {
		"id": "ITEM-6",
		"title":"Evaluating Components of International Migration: Consistency of 2000 Nativity Data",
		"note": "This cite illustrates the formatting of institutional authors.  Note that there is no \"and\" between the individual author and the institution with which he is affiliated.",
		"author": [
			{
				"family": "Malone",
				"given": "Nolan J.",
				"static-ordering": false
			},
			{
				"literal": "U.S. Bureau of the Census"
			}
		],
		"publisher": "Routledge",
        "publisher-place": "New York",
		"issued": {
			"date-parts":[
				[2001, 12, 5]
			]
		},
		"type": "book"
	},
	"ITEM-7": {
		"id": "ITEM-7",
		"title": "True Crime Radio and Listener Disenchantment with Network Broadcasting, 1935-1946",
		"author":[
			{
				"family": "Razlogova",
				"given": "Elena"
			}
		],
		"container-title": "American Quarterly",
		"volume": "58",
		"page": "137-158",
		"issued": {
			"date-parts": [
				[2006, 3]
			]
		},
		"type": "article-journal"
	},
	"ITEM-8": {
		"id": "ITEM-8",
		"title": "The Guantanamobile Project",
		"container-title": "Vectors",
		"volume": "1",
		"author":[
			{
				"family": "Razlogova",
				"given": "Elena"
			},
			{
				"family": "Lynch",
				"given": "Lisa"
			}
		],
		"issued": {
			"season": 3,
			"date-parts": [
				[2005]
			]
		},
		"type": "article-journal"

	},
	"ITEM-9": {
		"id": "ITEM-9",
		"container-title": "FEMS Yeast Research",
		"volume": "9",
		"issue": "8",
		"page": "1123-1136",
		"title": "Metabolic engineering of <i>Saccharomyces cerevisiae</i> for production of carboxylic acids: current status and challenges",
		"contributor":[
			{
				"family": "Zelle",
				"given": "Rintze M."
			}
		],
		"author": [
			{
				"family": "Abbott",
				"given": "Derek A."
			},
			{
				"family": "Zelle",
				"given": "Rintze M."
			},
			{
				"family":"Pronk",
				"given":"Jack T."
			},
			{
				"family": "Maris",
				"given":"Antonius J.A.",
				"non-dropping-particle":"van"
			}
		],
		"issued": {
			"season": "2",
			"date-parts": [
				[
					2009,
					6,
					6
				]
			]
		},
		"type": "article-journal"
	},
    "ITEM-10": {
        "container-title": "N.Y.2d", 
        "id": "ITEM-10", 
        "issued": {
            "date-parts": [
                [
                    "1989"
                ]
            ]
        }, 
        "page": "683", 
        "title": "People v. Taylor", 
        "type": "legal_case", 
        "volume": 73
    }, 
    "ITEM-11": {
        "container-title": "N.E.2d", 
        "id": "ITEM-11", 
        "issued": {
            "date-parts": [
                [
                    "1989"
                ]
            ]
        }, 
        "page": "386", 
        "title": "People v. Taylor", 
        "type": "legal_case", 
        "volume": 541
    }, 
    "ITEM-12": {
        "container-title": "N.Y.S.2d", 
        "id": "ITEM-12", 
        "issued": {
            "date-parts": [
                [
                    "1989"
                ]
            ]
        }, 
        "page": "357", 
        "title": "People v. Taylor", 
        "type": "legal_case", 
        "volume": 543
    },
    "ITEM-13": {
        "id": "ITEM-13", 
        "title": "\u6c11\u6cd5 :ja-alalc97: Minp\u014d :en: Japanese Civil Code", 
        "type": "legislation"
    },
    "ITEM-14": {
        "id": "ITEM-14", 
        "title": "Clayton Act",
        "container-title": "ch.",
        "number": 323,
		"issued": {
           "date-parts": [
             [
                1914
             ]
           ]
		},
        "type": "legislation"
    },
    "ITEM-15": {
        "id": "ITEM-15", 
        "title": "Clayton Act",
		"volume":38,
        "container-title": "Stat.",
        "page": 730,
		"issued": {
           "date-parts": [
             [
                1914
             ]
           ]
		},
        "type": "legislation"
    },
    "ITEM-16": {
        "id": "ITEM-16", 
        "title": "FTC Credit Practices Rule",
		"volume":16,
        "container-title": "C.F.R.",
        "section": 444,
		"issued": {
           "date-parts": [
             [
                1999
             ]
           ]
		},
        "type": "legislation"
    },
    "ITEM-17": {
        "id": "ITEM-17", 
        "title": "Beck v. Beck",
		"volume":1999,
        "container-title": "ME",
        "page": 110,
		"issued": {
           "date-parts": [
             [
                1999
             ]
           ]
		},
        "type": "legal_case"
    },
    "ITEM-18": {
        "id": "ITEM-18", 
        "title": "Beck v. Beck",
		"volume":733,
        "container-title": "A.2d",
        "page": 981,
		"issued": {
           "date-parts": [
             [
                1999
             ]
           ]
		},
        "type": "legal_case"
    },
    "ITEM-19": {
        "id": "ITEM-19", 
        "title": "Donoghue v. Stevenson",
		"volume":1932,
        "container-title": "App. Cas.",
        "page": 562,
		"issued": {
           "date-parts": [
             [
                1932
             ]
           ]
		},
        "type": "legal_case"
    },
    "ITEM-20": {
        "id": "ITEM-20", 
        "title": "British Columbia Elec. Ry. v. Loach",
		"volume":1916,
		"issue":1,
        "container-title": "App. Cas.",
        "page": 719,
		"authority":"P.C.",
		"issued": {
           "date-parts": [
             [
                1915
             ]
           ]
		},
        "type": "legal_case"
    },
    "ITEM-21": {
        "id": "ITEM-21", 
        "title": "Chapters on Chaucer",
		"author":[
			{
				"family": "Malone",
				"given": "Kemp"
			}
		],
        "publisher":"Johns Hopkins Press",
        "publisher-place": "Baltimore",
		"issued": {
           "date-parts": [
             [
                1951
             ]
           ]
		},
        "type": "book"
    },
    "ITEM-22": {
        "id": "ITEM-22", 
        "title": "Zeroing in on efficient thermoelectric power",
        "author":[
            {
                "family": "Timmer",
                "given": "John"
            }
        ],
        "URL": "http://arstechnica.com/science/news/2011/05/zeroing-in-on-efficient-thermoelectric-power.ars",
        "type": "webpage"
    },
    "ITEM-23": {
        "id": "ITEM-23",
        "URL": "http://www.ja-sig.org/jasigconf/popSpeaker.jsp?id=39e50005&conf_id=jasig12&name=Lennard+Fuller", 
        "title": "JA-SIG Conference Presentation", 
        "type": "webpage"
    }
};

var bib1 = ["ITEM-1", 'ITEM-2', 'ITEM-3', 'ITEM-4', 'ITEM-5', 'ITEM-6', 'ITEM-21'];
var bib2 = ["ITEM-1", 'ITEM-2', 'ITEM-3', 'ITEM-4', 'ITEM-5', 'ITEM-6', 'ITEM-21', 'ITEM-22', 'ITEM-23'];

var biball = ["ITEM-1", 'ITEM-2', 'ITEM-3', 'ITEM-4', 'ITEM-5', 'ITEM-6', 'ITEM-7', 'ITEM-8', 'ITEM-9', 'ITEM-10',"ITEM-11", 'ITEM-12', 'ITEM-13', 'ITEM-14', 'ITEM-15', 'ITEM-16', 'ITEM-17', 'ITEM-18', 'ITEM-19', 'ITEM-20', 'ITEM-21', 'ITEM-22', 'ITEM-23'];

var citations1 = [
    {
	    "citationItems": [
            {
			    id: "ITEM-1",
    			label: "page",
    			locator: "223"

		    }
	    ],
	    "properties": {
		    "noteIndex": 1
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-2"
		    }
	    ],
	    "properties": {
		    "noteIndex": 2
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-3",
			    label: "page",
    			locator: "393"
		    }
	    ],
	    "properties": {
		    "noteIndex": 3
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-4",
			    locator: "15",
    			prefix:"<i>but see</i>"
		    }
	    ],
	    "properties": {
		    "noteIndex": 4
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-5"
		    }
	    ],
	    "properties": {
		    "noteIndex": 5
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-6"
		    }
	    ],
	    "properties": {
		    "noteIndex": 6
	    }
    },

    {
	    "citationItems": [
            {
			    id: "ITEM-21"
		    }
	    ],
	    "properties": {
		    "noteIndex": 7
	    }
    }
];


//NODEJS EXPORT
exports.data = data;
exports.bib1 = bib1;
exports.bib2 = bib2;
exports.citations1 = citations1;

