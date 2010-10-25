require.def("ace/theme/Twilight",
    ["ace/lib/dom"], function(dom) {

    var cssText = ".ace-twilight .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-twilight .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-twilight .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-twilight .ace_gutter-layer {\
  right: 0px;\
  text-align: right;\
}\
\
.ace-twilight .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 15px;\
}\
\
.ace-twilight .ace_editor .ace_printMargin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-twilight .ace_scroller {\
  background-color: #141414;\
}\
\
.ace-twilight .ace_text-layer {\
  cursor: text;\
  color: #F8F8F8;\
}\
\
.ace-twilight .ace_cursor {\
  border-left: 2px solid #A7A7A7;\
}\
\
.ace-twilight .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #A7A7A7;\
}\
 \
.ace-twilight .ace_marker-layer .ace_selection {\
  background: rgba(221, 240, 255, 0.20);\
}\
\
.ace-twilight .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-twilight .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25);\
}\
\
.ace-twilight .ace_marker-layer .ace_active_line {\
  background: rgba(255, 255, 255, 0.031);\
}\
\
       \
.ace-twilight .ace_invisible {\
  color: rgba(255, 255, 255, 0.25);\
}\
\
.ace-twilight .ace_keyword {\
  color:#CDA869;\
}\
\
.ace-twilight .ace_keyword.ace_operator {\
  \
}\
\
.ace-twilight .ace_constant {\
  color:#CF6A4C;\
}\
\
.ace-twilight .ace_constant.ace_language {\
  \
}\
\
.ace-twilight .ace_constant.ace_library {\
  \
}\
\
.ace-twilight .ace_constant.ace_numeric {\
  \
}\
\
.ace-twilight .ace_invalid {\
  \
}\
\
.ace-twilight .ace_invalid.ace_illegal {\
  color:#F8F8F8;\
background-color:rgba(86, 45, 86, 0.75);\
}\
\
.ace-twilight .ace_invalid.ace_deprecated {\
  text-decoration:underline;\
font-style:italic;\
color:#D2A8A1;\
}\
\
.ace-twilight .ace_function {\
  \
}\
\
.ace-twilight .ace_function.ace_buildin {\
  \
}\
\
.ace-twilight .ace_string {\
  color:#8F9D6A;\
}\
\
.ace-twilight .ace_comment {\
  font-style:italic;\
color:#5F5A60;\
}\
\
.ace-twilight .ace_comment.ace_doc {\
  \
}\
\
.ace-twilight .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-twilight .ace_variable {\
  color:#7587A6;\
}\
\
.ace-twilight .ace_variable.ace_language {\
  \
}\
\
.ace-twilight .ace_xml_pe {\
  color:#494949;\
}";
    
    // import CSS once
    dom.importCssString(cssText);
    
    return {
        cssClass: "ace-twilight"
    };
})