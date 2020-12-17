(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{433:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[t._v("#")]),t._v(" Indexes")]),t._v(" "),a("p",[t._v("An index is an entity that gathers a set of "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html"}},[t._v("documents")]),t._v(" with its own settings.")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("Learn more about indexes")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"list-all-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-all-indexes"}},[t._v("#")]),t._v(" List all indexes")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes"}}),t._v(" "),a("p",[t._v("List all "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("indexes")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"list_all_indexes_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_reviews"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"get-one-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-one-index"}},[t._v("#")]),t._v(" Get one index")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid"}}),t._v(" "),a("p",[t._v("Get information about an "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"get_one_index_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"create-an-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-index"}},[t._v("#")]),t._v(" Create an index")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes"}}),t._v(" "),a("p",[t._v("Create an "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),a("p",[t._v("This route takes as parameter an unique "),a("code",[t._v("uid")]),t._v(" and "),a("strong",[t._v("optionally")]),t._v(" the "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html#primary-key"}},[t._v("primary key")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("An index is automatically created when adding "),a("RouterLink",{attrs:{to:"/references/documents.html"}},[t._v("documents")]),t._v(" or "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings")]),t._v(" to an index that does not already exist.")],1)]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index unique identifier ("),a("em",[t._v("mandatory")]),t._v(")")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("primaryKey")])]),t._v(" "),a("td",[t._v("The "),a("clientGlossary",{attrs:{word:"primary key"}}),t._v(" of the documents")],1)])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"create_an_index_1"}}),t._v(" "),a("h4",{attrs:{id:"response-201-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-201-created"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("201 created")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711476Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711476Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-an-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-an-index"}},[t._v("#")]),t._v(" Update an index")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"PUT",route:"/indexes/:index_uid"}}),t._v(" "),a("p",[t._v("Update an "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("primaryKey")])]),t._v(" "),a("td",[t._v("The "),a("clientGlossary",{attrs:{word:"primary key"}}),t._v(" of the documents")],1)])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("uid")]),t._v(" of an index cannot be changed."),a("br"),t._v("\nThe "),a("code",[t._v("primaryKey")]),t._v(" can be added if it does not already exist (to know if it has been set, use "),a("RouterLink",{attrs:{to:"/references/indexes.html#get-one-index"}},[t._v("the get index route")]),t._v(").")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("There are many ways in MeiliSearch to set the primary key")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"update_an_index_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-3"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_review"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_review_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"delete-an-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-an-index"}},[t._v("#")]),t._v(" Delete an index")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid"}}),t._v(" "),a("p",[t._v("Delete an "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"delete_an_index_1"}}),t._v(" "),a("h4",{attrs:{id:"response-204-no-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-204-no-content"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("204 No Content")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);