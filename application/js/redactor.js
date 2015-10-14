if (function(a) {
        "use strict";

        function b(a, c) {
            return new b.prototype.init(a, c)
        }
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            return function() {
                return b.apply(a)
            }
        });
        var c = 0;
        a.fn.redactor = function(c) {
            var d = [],
                e = Array.prototype.slice.call(arguments, 1);
            return "string" == typeof c ? this.each(function() {
                var b, f = a.data(this, "redactor");
                if ("-1" != c.search(/\./) ? (b = c.split("."), "undefined" != typeof f[b[0]] && (b = f[b[0]][b[1]])) : b = f[c], "undefined" != typeof f && a.isFunction(b)) {
                    var g = b.apply(f, e);
                    void 0 !== g && g !== f && d.push(g)
                } else a.error('No such method "' + c + '" for Redactor')
            }) : this.each(function() {
                a.data(this, "redactor", {}), a.data(this, "redactor", b(this, c))
            }), 0 === d.length ? this : 1 === d.length ? d[0] : d
        }, a.Redactor = b, a.Redactor.VERSION = "10.2.2", a.Redactor.modules = ["alignment", "autosave", "block", "buffer", "build", "button", "caret", "clean", "code", "core", "dropdown", "file", "focus", "image", "indent", "inline", "insert", "keydown", "keyup", "lang", "line", "link", "linkify", "list", "modal", "observe", "paragraphize", "paste", "placeholder", "progress", "selection", "shortcuts", "tabifier", "tidy", "toolbar", "upload", "utils"], a.Redactor.opts = {
            lang: "en",
            direction: "ltr",
            plugins: !1,
            focus: !1,
            focusEnd: !1,
            placeholder: !1,
            visual: !0,
            tabindex: !1,
            minHeight: !1,
            maxHeight: !1,
            linebreaks: !1,
            replaceDivs: !0,
            paragraphize: !0,
            cleanStyleOnEnter: !1,
            enterKey: !0,
            cleanOnPaste: !0,
            cleanSpaces: !0,
            pastePlainText: !1,
            autosave: !1,
            autosaveName: !1,
            autosaveInterval: 60,
            autosaveOnChange: !1,
            autosaveFields: !1,
            linkTooltip: !0,
            linkProtocol: "http",
            linkNofollow: !1,
            linkSize: 50,
            imageEditable: !0,
            imageLink: !0,
            imagePosition: !0,
            imageFloatMargin: "10px",
            imageResizable: !0,
            imageUpload: null,
            imageUploadParam: "file",
            uploadImageField: !1,
            dragImageUpload: !0,
            fileUpload: null,
            fileUploadParam: "file",
            dragFileUpload: !0,
            s3: !1,
            convertLinks: !0,
            convertUrlLinks: !0,
            convertImageLinks: !0,
            convertVideoLinks: !0,
            preSpaces: 4,
            tabAsSpaces: !1,
            tabKey: !0,
            scrollTarget: !1,
            toolbar: !0,
            toolbarFixed: !1,
            toolbarFixedTarget: document,
            toolbarFixedTopOffset: 0,
            toolbarExternal: !1,
            toolbarOverflow: !1,
            source: !0,
            buttons: ["html", "formatting", "bold", "italic", "deleted", "unorderedlist", "orderedlist", "outdent", "indent", "image", "link", "alignment", "horizontalrule"],
            buttonsHide: [],
            buttonsHideOnMobile: [],
            formatting: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
            formattingAdd: !1,
            tabifier: !0,
            deniedTags: ["script", "style"],
            allowedTags: !1,
            paragraphizeBlocks: ["table", "div", "pre", "form", "ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "dl", "blockquote", "figcaption", "address", "section", "header", "footer", "aside", "article", "object", "style", "script", "iframe", "select", "input", "textarea", "button", "option", "map", "area", "math", "hr", "fieldset", "legend", "hgroup", "nav", "figure", "details", "menu", "summary", "p"],
            removeComments: !1,
            replaceTags: [
                ["strike", "del"],
                ["b", "strong"]
            ],
            replaceStyles: [
                ["font-weight:\\s?bold", "strong"],
                ["font-style:\\s?italic", "em"],
                ["text-decoration:\\s?underline", "u"],
                ["text-decoration:\\s?line-through", "del"]
            ],
            removeDataAttr: !1,
            removeAttr: !1,
            allowedAttr: !1,
            removeWithoutAttr: ["span"],
            removeEmpty: ["p"],
            activeButtons: ["deleted", "italic", "bold", "underline", "unorderedlist", "orderedlist", "alignleft", "aligncenter", "alignright", "justify"],
            activeButtonsStates: {
                b: "bold",
                strong: "bold",
                i: "italic",
                em: "italic",
                del: "deleted",
                strike: "deleted",
                ul: "unorderedlist",
                ol: "orderedlist",
                u: "underline"
            },
            shortcuts: {
                "ctrl+shift+m, meta+shift+m": {
                    func: "inline.removeFormat"
                },
                "ctrl+b, meta+b": {
                    func: "inline.format",
                    params: ["bold"]
                },
                "ctrl+i, meta+i": {
                    func: "inline.format",
                    params: ["italic"]
                },
                "ctrl+h, meta+h": {
                    func: "inline.format",
                    params: ["superscript"]
                },
                "ctrl+l, meta+l": {
                    func: "inline.format",
                    params: ["subscript"]
                },
                "ctrl+k, meta+k": {
                    func: "link.show"
                },
                "ctrl+shift+7": {
                    func: "list.toggle",
                    params: ["orderedlist"]
                },
                "ctrl+shift+8": {
                    func: "list.toggle",
                    params: ["unorderedlist"]
                }
            },
            shortcutsAdd: !1,
            concrete5: {
                filemanager: !1,
                sitemap: !1,
                lightbox: !1
            },
            buffer: [],
            rebuffer: [],
            emptyHtml: "<p>&#x200b;</p>",
            invisibleSpace: "&#x200b;",
            imageTypes: ["image/png", "image/jpeg", "image/gif"],
            indentValue: 20,
            verifiedTags: ["a", "img", "b", "strong", "sub", "sup", "i", "em", "u", "small", "strike", "del", "cite", "ul", "ol", "li"],
            inlineTags: ["strong", "b", "u", "em", "i", "code", "del", "ins", "samp", "kbd", "sup", "sub", "mark", "var", "cite", "small"],
            alignmentTags: ["P", "H1", "H2", "H3", "H4", "H5", "H6", "DL", "DT", "DD", "DIV", "TD", "BLOCKQUOTE", "OUTPUT", "FIGCAPTION", "ADDRESS", "SECTION", "HEADER", "FOOTER", "ASIDE", "ARTICLE"],
            blockLevelElements: ["PRE", "UL", "OL", "LI"],
            highContrast: !1,
            observe: {
                dropdowns: []
            },
            langs: {
                en: {
                    html: "HTML",
                    video: "Insert Video",
                    image: "Insert Image",
                    table: "Table",
                    link: "Link",
                    link_insert: "Insert link",
                    link_edit: "Edit link",
                    unlink: "Unlink",
                    formatting: "Formatting",
                    paragraph: "Normal text",
                    quote: "Quote",
                    code: "Code",
                    header1: "Header 1",
                    header2: "Header 2",
                    header3: "Header 3",
                    header4: "Header 4",
                    header5: "Header 5",
                    bold: "Bold",
                    italic: "Italic",
                    fontcolor: "Font Color",
                    backcolor: "Back Color",
                    unorderedlist: "Unordered List",
                    orderedlist: "Ordered List",
                    outdent: "Outdent",
                    indent: "Indent",
                    cancel: "Cancel",
                    insert: "Insert",
                    save: "Save",
                    _delete: "Delete",
                    insert_table: "Insert Table",
                    insert_row_above: "Add Row Above",
                    insert_row_below: "Add Row Below",
                    insert_column_left: "Add Column Left",
                    insert_column_right: "Add Column Right",
                    delete_column: "Delete Column",
                    delete_row: "Delete Row",
                    delete_table: "Delete Table",
                    rows: "Rows",
                    columns: "Columns",
                    add_head: "Add Head",
                    delete_head: "Delete Head",
                    title: "Title",
                    image_position: "Position",
                    none: "None",
                    left: "Left",
                    right: "Right",
                    center: "Center",
                    image_web_link: "Image Web Link",
                    text: "Text",
                    mailto: "Email",
                    web: "URL",
                    video_html_code: "Video Embed Code or Youtube/Vimeo Link",
                    file: "Insert File",
                    upload: "Upload",
                    download: "Download",
                    choose: "Choose",
                    or_choose: "Or choose",
                    drop_file_here: "Drop file here",
                    align_left: "Align text to the left",
                    align_center: "Center text",
                    align_right: "Align text to the right",
                    align_justify: "Justify text",
                    horizontalrule: "Insert Horizontal Rule",
                    deleted: "Deleted",
                    anchor: "Anchor",
                    link_new_tab: "Open link in new tab",
                    link_same_window: "Open link in same window",
                    in_lightbox: "Open link in Lightbox",
                    lightbox_link_type: "Link Type",
                    lightbox_link_type_iframe: "Web Page",
                    lightbox_link_type_image: "Image",
                    lightbox_link_type_iframe_options: "Frame Options",
                    lightbox_link_type_iframe_width: "Width",
                    lightbox_link_type_iframe_height: "Height",
                    customStyles: "Custom Styles",
                    remove_font: "Remove font",
                    change_font_family: "Change font family",
                    remove_font_size: "Remove font size",
                    change_font_size: "Change font size",
                    remove_style: "Remove Style",
                    insert_character: "Insert Character",
                    undo: "Undo",
                    redo: "Redo",
                    remove_font_family: "Remove Font Family",
                    underline: "Underline",
                    alignment: "Alignment",
                    filename: "Name (optional)",
                    edit: "Edit",
                    upload_label: "Drop file here or "
                }
            },
            linkify: {
                regexps: {
                    youtube: /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,
                    vimeo: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
                    image: /((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/gi,
                    url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi
                }
            },
            codemirror: !1
        }, b.fn = a.Redactor.prototype = {
            keyCode: {
                BACKSPACE: 8,
                DELETE: 46,
                UP: 38,
                DOWN: 40,
                ENTER: 13,
                SPACE: 32,
                ESC: 27,
                TAB: 9,
                CTRL: 17,
                META: 91,
                SHIFT: 16,
                ALT: 18,
                RIGHT: 39,
                LEFT: 37,
                LEFT_WIN: 91
            },
            init: function(b, d) {
                if (this.$element = a(b), this.uuid = c++, this.rtePaste = !1, this.$pasteBox = !1, this.loadOptions(d), this.loadModules(), this.formatting = {}, a.merge(this.opts.blockLevelElements, this.opts.alignmentTags), this.reIsBlock = new RegExp("^(" + this.opts.blockLevelElements.join("|") + ")$", "i"), this.tidy.setupAllowed(), this.opts.deniedTags !== !1)
                    for (var e = ["html", "head", "link", "body", "meta", "applet"], f = 0; f < e.length; f++) this.opts.deniedTags.push(e[f]);
                this.lang.load(), a.extend(this.opts.shortcuts, this.opts.shortcutsAdd), this.core.setCallback("start"), this.start = !0, this.build.run()
            },
            loadOptions: function(b) {
                this.opts = a.extend({}, a.extend(!0, {}, a.Redactor.opts), this.$element.data(), b)
            },
            getModuleMethods: function(a) {
                return Object.getOwnPropertyNames(a).filter(function(b) {
                    return "function" == typeof a[b]
                })
            },
            loadModules: function() {
                for (var b = a.Redactor.modules.length, c = 0; b > c; c++) this.bindModuleMethods(a.Redactor.modules[c])
            },
            bindModuleMethods: function(a) {
                if ("undefined" != typeof this[a]) {
                    this[a] = this[a]();
                    for (var b = this.getModuleMethods(this[a]), c = b.length, d = 0; c > d; d++) this[a][b[d]] = this[a][b[d]].bind(this)
                }
            },
            alignment: function() {
                return {
                    left: function() {
                        this.alignment.set("")
                    },
                    right: function() {
                        this.alignment.set("right")
                    },
                    center: function() {
                        this.alignment.set("center")
                    },
                    justify: function() {
                        this.alignment.set("justify")
                    },
                    set: function(a) {
                        this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save(), this.alignment.blocks = this.selection.getBlocks(), this.alignment.type = a, this.alignment.isLinebreaksOrNoBlocks() ? this.alignment.setText() : this.alignment.setBlocks(), this.selection.restore(), this.code.sync()
                    },
                    setText: function() {
                        var b = this.selection.wrap("div");
                        a(b).attr("data-tagblock", "redactor").css("text-align", this.alignment.type)
                    },
                    setBlocks: function() {
                        a.each(this.alignment.blocks, a.proxy(function(a, b) {
                            var c = this.utils.getAlignmentElement(b);
                            c && (this.alignment.isNeedReplaceElement(c) ? this.alignment.replaceElement(c) : this.alignment.alignElement(c))
                        }, this))
                    },
                    isLinebreaksOrNoBlocks: function() {
                        return this.opts.linebreaks && this.alignment.blocks[0] === !1
                    },
                    isNeedReplaceElement: function(a) {
                        return "" === this.alignment.type && "undefined" != typeof a.data("tagblock")
                    },
                    replaceElement: function(a) {
                        a.replaceWith(a.html())
                    },
                    alignElement: function(a) {
                        a.css("text-align", this.alignment.type), this.utils.removeEmptyAttr(a, "style")
                    }
                }
            },
            autosave: function() {
                return {
                    html: !1,
                    enable: function() {
                        this.opts.autosave && (this.autosave.name = this.opts.autosaveName ? this.opts.autosaveName : this.$textarea.attr("name"), this.opts.autosaveOnChange || (this.autosaveInterval = setInterval(this.autosave.load, 1e3 * this.opts.autosaveInterval)))
                    },
                    onChange: function() {
                        this.opts.autosaveOnChange && this.autosave.load()
                    },
                    load: function() {
                        if (this.autosave.source = this.code.get(), this.autosave.html !== this.autosave.source) {
                            var b = {};
                            b.name = this.autosave.name, b[this.autosave.name] = this.autosave.source, b = this.autosave.getHiddenFields(b);
                            var c = a.ajax({
                                url: this.opts.autosave,
                                type: "post",
                                data: b
                            });
                            c.done(this.autosave.success)
                        }
                    },
                    getHiddenFields: function(b) {
                        return this.opts.autosaveFields === !1 || "object" != typeof this.opts.autosaveFields ? b : (a.each(this.opts.autosaveFields, a.proxy(function(c, d) {
                            null !== d && 0 === d.toString().indexOf("#") && (d = a(d).val()), b[c] = d
                        }, this)), b)
                    },
                    success: function(b) {
                        var c;
                        try {
                            c = a.parseJSON(b)
                        } catch (d) {
                            c = b
                        }
                        var e = "undefined" == typeof c.error ? "autosave" : "autosaveError";
                        this.core.setCallback(e, this.autosave.name, c), this.autosave.html = this.autosave.source
                    },
                    disable: function() {
                        clearInterval(this.autosaveInterval)
                    }
                }
            },
            block: function() {
                return {
                    formatting: function(a) {
                        this.block.clearStyle = !1;
                        var b, c;
                        "undefined" != typeof this.formatting[a].data ? b = "data" : "undefined" != typeof this.formatting[a].attr ? b = "attr" : "undefined" != typeof this.formatting[a]["class"] && (b = "class"), "undefined" != typeof this.formatting[a].clear && (this.block.clearStyle = !0), b && (c = this.formatting[a][b]), this.block.format(this.formatting[a].tag, b, c)
                    },
                    format: function(b, c, d) {
                        "quote" == b && (b = "blockquote");
                        var e = ["p", "pre", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"];
                        if (-1 != a.inArray(b, e)) {
                            this.block.isRemoveInline = "pre" == b || -1 != b.search(/h[1-6]/i), this.utils.browser("msie") || this.$editor.focus();
                            var f = a.trim(this.$editor.html());
                            if (this.block.isEmpty = this.utils.isEmpty(f), this.utils.browser("mozilla") && !this.focus.isFocused() && this.block.isEmpty) {
                                var g;
                                this.opts.linebreaks || (g = this.$editor.children().first(), this.caret.setEnd(g))
                            }
                            this.block.blocks = this.selection.getBlocks(), this.block.blocksSize = this.block.blocks.length, this.block.type = c, this.block.value = d, this.buffer.set(), this.selection.save(), this.block.set(b), this.selection.restore(), this.code.sync(), this.observe.load()
                        }
                    },
                    set: function(a) {
                        this.selection.get(), this.block.containerTag = this.range.commonAncestorContainer.tagName, this.range.collapsed ? this.block.setCollapsed(a) : this.block.setMultiple(a)
                    },
                    setCollapsed: function(b) {
                        if (this.opts.linebreaks && this.block.isEmpty && "p" != b) {
                            var c = document.createElement(b);
                            return this.$editor.html(c), void this.caret.setEnd(c)
                        }
                        var d = this.block.blocks[0];
                        if (d !== !1) {
                            if ("LI" == d.tagName) {
                                if ("blockquote" != b) return;
                                return void this.block.formatListToBlockquote()
                            }
                            var e = "TD" == this.block.containerTag || "TH" == this.block.containerTag;
                            if (e && !this.opts.linebreaks) document.execCommand("formatblock", !1, "<" + b + ">"), d = this.selection.getBlock(), this.block.toggle(a(d));
                            else if (d.tagName.toLowerCase() != b)
                                if (this.opts.linebreaks && "p" == b) a(d).append("<br>"), this.utils.replaceWithContents(d);
                                else {
                                    var f = this.utils.replaceToTag(d, b);
                                    this.block.toggle(f), "p" != b && "blockquote" != b && f.find("img").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(f), ("p" == b || this.block.headTag) && f.find("p").contents().unwrap(), this.block.formatTableWrapping(f)
                                } else if ("blockquote" == b && d.tagName.toLowerCase() == b)
                                if (this.opts.linebreaks) a(d).append("<br>"), this.utils.replaceWithContents(d);
                                else {
                                    var g = this.utils.replaceToTag(d, "p");
                                    this.block.toggle(g)
                                } else d.tagName.toLowerCase() == b && this.block.toggle(a(d));
                            "undefined" == typeof this.block.type && "undefined" == typeof this.block.value && a(d).removeAttr("class").removeAttr("style")
                        }
                    },
                    setMultiple: function(b) {
                        var c = this.block.blocks[0],
                            d = "TD" == this.block.containerTag || "TH" == this.block.containerTag;
                        if (c !== !1 && 1 === this.block.blocksSize)
                            if (c.tagName.toLowerCase() == b && "blockquote" == b)
                                if (this.opts.linebreaks) a(c).append("<br>"), this.utils.replaceWithContents(c);
                                else {
                                    var e = this.utils.replaceToTag(c, "p");
                                    this.block.toggle(e)
                                } else if ("LI" == c.tagName) {
                            if ("blockquote" != b) return;
                            this.block.formatListToBlockquote()
                        } else if ("BLOCKQUOTE" == this.block.containerTag) this.block.formatBlockquote(b);
                        else if (this.opts.linebreaks && (d || this.range.commonAncestorContainer != c)) this.block.formatWrap(b);
                        else if (this.opts.linebreaks && "p" == b) a(c).prepend("<br>").append("<br>"), this.utils.replaceWithContents(c);
                        else if ("TD" === c.tagName) this.block.formatWrap(b);
                        else {
                            var f = this.utils.replaceToTag(c, b);
                            this.block.toggle(f), this.block.isRemoveInline && this.utils.removeInlineTags(f), ("p" == b || this.block.headTag) && f.find("p").contents().unwrap()
                        } else if (this.opts.linebreaks || "p" != b) {
                            if ("blockquote" == b) {
                                for (var g = 0, h = 0; h < this.block.blocksSize; h++) "BLOCKQUOTE" == this.block.blocks[h].tagName && g++;
                                if (g == this.block.blocksSize) return void a.each(this.block.blocks, a.proxy(function(b, c) {
                                    var d = !1;
                                    this.opts.linebreaks ? (a(c).prepend("<br>").append("<br>"), d = this.utils.replaceWithContents(c)) : d = this.utils.replaceToTag(c, "p"), d && "undefined" == typeof this.block.type && "undefined" == typeof this.block.value && d.removeAttr("class").removeAttr("style")
                                }, this))
                            }
                            this.block.formatWrap(b)
                        } else {
                            var i = 0,
                                j = !1;
                            "class" == this.block.type && (j = "toggle", i = a(this.block.blocks).filter("." + this.block.value).length, this.block.blocksSize == i ? j = "toggle" : this.block.blocksSize > i ? j = "set" : 0 === i && (j = "set"));
                            var k = ["ul", "ol", "li", "td", "th", "dl", "dt", "dd"];
                            a.each(this.block.blocks, a.proxy(function(c, d) {
                                if (-1 == a.inArray(d.tagName.toLowerCase(), k)) {
                                    var e = this.utils.replaceToTag(d, b);
                                    j ? "toggle" == j ? this.block.toggle(e) : "remove" == j ? this.block.remove(e) : "set" == j && this.block.setForce(e) : this.block.toggle(e), "p" != b && "blockquote" != b && e.find("img").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(e), ("p" == b || this.block.headTag) && e.find("p").contents().unwrap(), "undefined" == typeof this.block.type && "undefined" == typeof this.block.value && e.removeAttr("class").removeAttr("style")
                                }
                            }, this))
                        }
                    },
                    setForce: function(a) {
                        return this.block.clearStyle && a.removeAttr("class").removeAttr("style"), "class" == this.block.type ? void a.addClass(this.block.value) : "attr" == this.block.type || "data" == this.block.type ? void a.attr(this.block.value.name, this.block.value.value) : void 0
                    },
                    toggle: function(a) {
                        return this.block.clearStyle && a.removeAttr("class").removeAttr("style"), "class" == this.block.type ? void a.toggleClass(this.block.value) : "attr" == this.block.type || "data" == this.block.type ? void(a.attr(this.block.value.name) == this.block.value.value ? a.removeAttr(this.block.value.name) : a.attr(this.block.value.name, this.block.value.value)) : void a.removeAttr("style class")
                    },
                    remove: function(a) {
                        a.removeClass(this.block.value)
                    },
                    formatListToBlockquote: function() {
                        var b = a(this.block.blocks[0]).closest("ul, ol", this.$editor[0]);
                        a(b).find("ul, ol").contents().unwrap(), a(b).find("li").append(a("<br>")).contents().unwrap();
                        var c = this.utils.replaceToTag(b, "blockquote");
                        this.block.toggle(c)
                    },
                    formatBlockquote: function(b) {
                        document.execCommand("outdent"), document.execCommand("formatblock", !1, b), this.clean.clearUnverified(), this.$editor.find("p:empty").remove();
                        var c = this.selection.getBlock();
                        "p" != b && a(c).find("img").remove(), this.opts.linebreaks || this.block.toggle(a(c)), this.$editor.find("ul, ol, tr, blockquote, p").each(a.proxy(this.utils.removeEmpty, this)), this.opts.linebreaks && "p" == b && this.utils.replaceWithContents(c)
                    },
                    formatWrap: function(b) {
                        if ("UL" == this.block.containerTag || "OL" == this.block.containerTag) {
                            if ("blockquote" != b) return;
                            this.block.formatListToBlockquote()
                        }
                        var c = this.selection.wrap(b);
                        if (c !== !1) {
                            var d = a(c);
                            this.block.formatTableWrapping(d);
                            var e = d.find(this.opts.blockLevelElements.join(",") + ", td, table, thead, tbody, tfoot, th, tr");
                            if (e.contents().unwrap(), "p" != b && "blockquote" != b && d.find("img").remove(), a.each(this.block.blocks, a.proxy(this.utils.removeEmpty, this)), d.append(this.selection.getMarker(2)), this.opts.linebreaks || this.block.toggle(d), this.$editor.find("ul, ol, tr, blockquote, p").each(a.proxy(this.utils.removeEmpty, this)), d.find("blockquote:empty").remove(), this.block.isRemoveInline && this.utils.removeInlineTags(d), this.opts.linebreaks && "p" == b && this.utils.replaceWithContents(d), this.opts.linebreaks) {
                                var f = d.next().next();
                                0 != f.size() && "BR" === f[0].tagName && f.remove()
                            }
                        }
                    },
                    formatTableWrapping: function(a) {
                        0 !== a.closest("table", this.$editor[0]).length && (0 === a.closest("tr", this.$editor[0]).length && a.wrap("<tr>"), 0 === a.closest("td", this.$editor[0]).length && 0 === a.closest("th").length && a.wrap("<td>"))
                    },
                    removeData: function(b, c) {
                        var d = this.selection.getBlocks();
                        a(d).removeAttr("data-" + b), this.code.sync()
                    },
                    setData: function(b, c) {
                        var d = this.selection.getBlocks();
                        a(d).attr("data-" + b, c), this.code.sync()
                    },
                    toggleData: function(b, c) {
                        var d = this.selection.getBlocks();
                        a.each(d, function() {
                            a(this).attr("data-" + b) ? a(this).removeAttr("data-" + b) : a(this).attr("data-" + b, c)
                        })
                    },
                    removeAttr: function(b, c) {
                        var d = this.selection.getBlocks();
                        a(d).removeAttr(b), this.code.sync()
                    },
                    setAttr: function(b, c) {
                        var d = this.selection.getBlocks();
                        a(d).attr(b, c), this.code.sync()
                    },
                    toggleAttr: function(b, c) {
                        var d = this.selection.getBlocks();
                        a.each(d, function() {
                            a(this).attr(name) ? a(this).removeAttr(name) : a(this).attr(name, c)
                        })
                    },
                    removeClass: function(b) {
                        var c = this.selection.getBlocks();
                        a(c).removeClass(b), this.utils.removeEmptyAttr(c, "class"), this.code.sync()
                    },
                    setClass: function(b) {
                        var c = this.selection.getBlocks();
                        a(c).addClass(b), this.code.sync()
                    },
                    toggleClass: function(b) {
                        var c = this.selection.getBlocks();
                        a(c).toggleClass(b), this.code.sync()
                    }
                }
            },
            buffer: function() {
                return {
                    set: function(a) {
                        "undefined" == typeof a || "undo" == a ? this.buffer.setUndo() : this.buffer.setRedo()
                    },
                    setUndo: function() {
                        this.selection.save(), this.opts.buffer.push(this.$editor.html()), this.selection.restore()
                    },
                    setRedo: function() {
                        this.selection.save(), this.opts.rebuffer.push(this.$editor.html()), this.selection.restore()
                    },
                    getUndo: function() {
                        this.$editor.html(this.opts.buffer.pop())
                    },
                    getRedo: function() {
                        this.$editor.html(this.opts.rebuffer.pop())
                    },
                    add: function() {
                        this.opts.buffer.push(this.$editor.html())
                    },
                    undo: function() {
                        0 !== this.opts.buffer.length && (this.buffer.set("redo"), this.buffer.getUndo(), this.selection.restore(), setTimeout(a.proxy(this.observe.load, this), 50))
                    },
                    redo: function() {
                        0 !== this.opts.rebuffer.length && (this.buffer.set("undo"), this.buffer.getRedo(), this.selection.restore(), setTimeout(a.proxy(this.observe.load, this), 50))
                    }
                }
            },
            build: function() {
                return {
                    run: function() {
                        this.build.createContainerBox(), this.build.loadContent(), this.build.loadEditor(), this.build.enableEditor(), this.build.setCodeAndCall()
                    },
                    isTextarea: function() {
                        return "TEXTAREA" === this.$element[0].tagName
                    },
                    createContainerBox: function() {
                        this.$box = a('<div class="redactor-box" role="application" />')
                    },
                    createTextarea: function() {
                        this.$textarea = a("<textarea />").attr("name", this.build.getTextareaName())
                    },
                    getTextareaName: function() {
                        return "undefined" == typeof name ? "content-" + this.uuid : this.$element.attr("id")
                    },
                    loadContent: function() {
                        var b = this.build.isTextarea() ? "val" : "html";
                        this.content = a.trim(this.$element[b]())
                    },
                    enableEditor: function() {
                        this.$editor.attr({
                            contenteditable: !0,
                            dir: this.opts.direction
                        })
                    },
                    loadEditor: function() {
                        var a = this.build.isTextarea() ? "fromTextarea" : "fromElement";
                        this.build[a]()
                    },
                    fromTextarea: function() {
                        this.$editor = a("<div />"), this.$textarea = this.$element, this.$box.insertAfter(this.$element).append(this.$editor).append(this.$element), this.$editor.addClass("redactor-editor"), this.$element.hide()
                    },
                    fromElement: function() {
                        this.$editor = this.$element, this.build.createTextarea(), this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$textarea), this.$editor.addClass("redactor-editor"), this.$textarea.hide()
                    },
                    setCodeAndCall: function() {
                        this.code.set(this.content), this.build.setOptions(), this.build.callEditor(), this.opts.visual || setTimeout(a.proxy(this.code.showCode, this), 200)
                    },
                    callEditor: function() {
                        this.build.disableMozillaEditing(), this.build.disableIeLinks(), this.build.setEvents(), this.build.setHelpers(), this.opts.toolbar && (this.opts.toolbar = this.toolbar.init(), this.toolbar.build()), this.modal.loadTemplates(), this.build.plugins(), setTimeout(a.proxy(this.observe.load, this), 4), this.core.setCallback("init")
                    },
                    setOptions: function() {
                        a(this.$textarea).attr("dir", this.opts.direction), this.opts.linebreaks && this.$editor.addClass("redactor-linebreaks"), this.opts.tabindex && this.$editor.attr("tabindex", this.opts.tabindex), this.opts.minHeight && this.$editor.css("minHeight", this.opts.minHeight), this.opts.maxHeight && this.$editor.css("maxHeight", this.opts.maxHeight)
                    },
                    setEventDropUpload: function(a) {
                        if (a.preventDefault(), this.opts.dragImageUpload && this.opts.dragFileUpload) {
                            var b = a.dataTransfer.files;
                            this.upload.directUpload(b[0], a)
                        }
                    },
                    setEventDrop: function(a) {
                        this.code.sync(), setTimeout(this.clean.clearUnverified, 1), this.core.setCallback("drop", a)
                    },
                    setEvents: function() {
                        this.$editor.on("drop.redactor", a.proxy(function(a) {
                            return a = a.originalEvent || a, void 0 !== window.FormData && a.dataTransfer ? 0 === a.dataTransfer.files.length ? this.build.setEventDrop(a) : (this.build.setEventDropUpload(a), setTimeout(this.clean.clearUnverified, 1), void this.core.setCallback("drop", a)) : !0
                        }, this)), this.$editor.on("click.redactor", a.proxy(function(a) {
                            var b = this.core.getEvent(),
                                c = "click" == b || "arrow" == b ? !1 : "click";
                            this.core.addEvent(c), this.utils.disableSelectAll(), this.core.setCallback("click", a)
                        }, this)), this.$editor.on("paste.redactor", a.proxy(this.paste.init, this)), this.$editor.on("cut.redactor", a.proxy(this.code.sync, this)), this.$editor.on("keydown.redactor", a.proxy(this.keydown.init, this)), this.$editor.on("keyup.redactor", a.proxy(this.keyup.init, this)), a.isFunction(this.opts.codeKeydownCallback) && this.$textarea.on("keydown.redactor-textarea", a.proxy(this.opts.codeKeydownCallback, this)), a.isFunction(this.opts.codeKeyupCallback) && this.$textarea.on("keyup.redactor-textarea", a.proxy(this.opts.codeKeyupCallback, this)), a.isFunction(this.opts.focusCallback) && this.$editor.on("focus.redactor", a.proxy(this.opts.focusCallback, this)), a(document).on("mousedown.redactor." + this.uuid, a.proxy(function(a) {
                            this.blurClickedElement = a.target
                        }, this)), this.$editor.on("blur.redactor", a.proxy(function(b) {
                            this.start || this.rtePaste || this.build.isBlured() && (this.utils.disableSelectAll(), a.isFunction(this.opts.blurCallback) && this.core.setCallback("blur", b))
                        }, this))
                    },
                    isBlured: function() {
                        if (this.blurClickedElement === !0) return !0;
                        var b = a(this.blurClickedElement);
                        return !b.hasClass("redactor-toolbar, redactor-dropdown") && !b.is("#redactor-modal") && 0 === b.parents(".redactor-toolbar, .redactor-dropdown, #redactor-modal").length
                    },
                    setHelpers: function() {
                        this.linkify.isEnabled() && this.linkify.format(), this.placeholder.enable(), this.opts.focus && setTimeout(this.focus.setStart, 100), this.opts.focusEnd && setTimeout(this.focus.setEnd, 100)
                    },
                    plugins: function() {
                        this.opts.plugins && a.each(this.opts.plugins, a.proxy(function(c, d) {
                            var e = "undefined" != typeof RedactorPlugins && "undefined" != typeof RedactorPlugins[d] ? RedactorPlugins : b.fn;
                            if (a.isFunction(e[d])) {
                                this[d] = e[d]();
                                for (var f = this.getModuleMethods(this[d]), g = f.length, h = 0; g > h; h++) this[d][f[h]] = this[d][f[h]].bind(this);
                                a.isFunction(this[d].init) && this[d].init()
                            }
                        }, this))
                    },
                    disableMozillaEditing: function() {
                        if (this.utils.browser("mozilla")) try {
                            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
                        } catch (a) {}
                    },
                    disableIeLinks: function() {
                        this.utils.browser("msie") && document.execCommand("AutoUrlDetect", !1, !1)
                    }
                }
            },
            button: function() {
                return {
                    getClass: function(a) {
                        switch (a) {
                            case "html":
                                return "fa fa-code";
                            case "formatting":
                            case "formatting-concrete5":
                                return "fa fa-paragraph";
                            case "orderedlist":
                                return "fa fa-list-ol";
                            case "unorderedlist":
                                return "fa fa-list-ul";
                            case "video":
                                return "fa fa-file-video-o";
                            case "alignment":
                                return "fa fa-align-left";
                            case "horizontalrule":
                                return "fa fa-minus";
                            case "deleted":
                                return "fa fa-strikethrough";
                            case "fontfamily":
                                return "fa fa-font";
                            case "fontsize":
                                return "fa fa-text-height";
                            case "fontcolor":
                                return "fa fa-tint";
                            case "backcolor":
                                return "fa fa-tint";
                            case "bold":
                                return "fa fa-bold";
                            case "italic":
                                return "fa fa-italic";
                            case "outdent":
                                return "fa fa-outdent";
                            case "indent":
                                return "fa fa-indent";
                            case "image":
                                return "fa fa-image";
                            case "link":
                                return "fa fa-link"
                        }
                    },
                    build: function(b, c) {
                        var d = a('<a href="#" class="' + this.button.getClass(b) + " re-icon re-" + b + '" rel="' + b + '" />').attr("tabindex", "-1");
                        if ((c.func || c.command || c.dropdown) && this.button.setEvent(d, b, c), c.dropdown) {
                            var e = a('<ul class="dropdown-menu redactor-dropdown redactor-dropdown-' + +this.uuid + " redactor-dropdown-box-" + b + '" style="display: none;">');
                            d.data("dropdown", e), this.dropdown.build(b, e, c.dropdown)
                        }
                        return this.utils.isDesktop() && this.button.createTooltip(d, b, c.title), d
                    },
                    setEvent: function(b, c, d) {
                        b.on("touchstart click", a.proxy(function(a) {
                            if (b.hasClass("redactor-button-disabled")) return !1;
                            var e = "func",
                                f = d.func;
                            d.command ? (e = "command", f = d.command) : d.dropdown && (e = "dropdown", f = !1), this.button.onClick(a, c, e, f)
                        }, this))
                    },
                    createTooltip: function(b, c, d) {
                        var e = a("<span>").addClass("redactor-toolbar-tooltip redactor-toolbar-tooltip-" + this.uuid + " redactor-toolbar-tooltip-" + c).hide().html(d);
                        e.appendTo("body"), b.on("mouseover", function() {
                            if (!a(this).hasClass("redactor-button-disabled")) {
                                var c = b.offset();
                                e.show(), e.css({
                                    top: c.top + b.innerHeight() + "px",
                                    left: c.left + b.innerWidth() / 2 - e.innerWidth() / 2 + "px"
                                })
                            }
                        }), b.on("mouseout", function() {
                            e.hide()
                        })
                    },
                    onClick: function(a, b, c, d) {
                        this.button.caretOffset = this.caret.getOffset(), a.preventDefault(), this.utils.browser("msie") && (a.returnValue = !1), "command" == c ? this.inline.format(d) : "dropdown" == c ? this.dropdown.show(a, b) : this.button.onClickCallback(a, d, b)
                    },
                    onClickCallback: function(b, c, d) {
                        var e;
                        if (this.blurClickedElement = !0, a.isFunction(c)) c.call(this, d);
                        else if ("-1" != c.search(/\./)) {
                            if (e = c.split("."), "undefined" == typeof this[e[0]]) return;
                            this[e[0]][e[1]](d)
                        } else this[c](d);
                        this.observe.buttons(b, d)
                    },
                    get: function(a) {
                        return this.$toolbar.find("a.re-" + a)
                    },
                    setActive: function(a) {
                        this.button.get(a).addClass("redactor-act")
                    },
                    setInactive: function(a) {
                        this.button.get(a).removeClass("redactor-act")
                    },
                    setInactiveAll: function(a) {
                        "undefined" == typeof a ? this.$toolbar.find("a.re-icon").removeClass("redactor-act") : this.$toolbar.find("a.re-icon").not(".re-" + a).removeClass("redactor-act")
                    },
                    setActiveInVisual: function() {
                        this.$toolbar.find("a.re-icon").not("a.re-html, a.re-fullscreen").removeClass("redactor-button-disabled")
                    },
                    setInactiveInCode: function() {
                        this.$toolbar.find("a.re-icon").not("a.re-html, a.re-fullscreen").addClass("redactor-button-disabled")
                    },
                    changeIcon: function(a, b) {
                        this.button.get(a).addClass("re-" + b)
                    },
                    removeIcon: function(a, b) {
                        this.button.get(a).removeClass("re-" + b)
                    },
                    setAwesome: function(a, b) {
                        var c = this.button.get(a);
                        c.removeClass("redactor-btn-image").addClass("fa " + b)
                    },
                    addCallback: function(b, c) {
                        if ("buffer" != b) {
                            var d = "dropdown" == c ? "dropdown" : "func",
                                e = b.attr("rel");
                            b.on("touchstart click", a.proxy(function(a) {
                                return b.hasClass("redactor-button-disabled") ? !1 : void this.button.onClick(a, e, d, c)
                            }, this))
                        }
                    },
                    addDropdown: function(b, c) {
                        b.addClass("redactor-toolbar-link-dropdown").attr("aria-haspopup", !0);
                        var d = b.attr("rel");
                        this.button.addCallback(b, "dropdown");
                        var e = a('<ul class="dropdown-menu redactor-dropdown redactor-dropdown-' + +this.uuid + " redactor-dropdown-box-" + d + '" style="display: none;">');
                        return b.data("dropdown", e), c && this.dropdown.build(d, e, c), e
                    },
                    add: function(b, c) {
                        if (this.opts.toolbar) {
                            if (this.button.isMobileUndoRedo(b)) return "buffer";
                            var d = this.button.build(b, {
                                title: c
                            });
                            return d.addClass("redactor-btn-image"), this.$toolbar.append(a("<li>").append(d)), d
                        }
                    },
                    addFirst: function(b, c) {
                        if (this.opts.toolbar) {
                            if (this.button.isMobileUndoRedo(b)) return "buffer";
                            var d = this.button.build(b, {
                                title: c
                            });
                            return d.addClass("redactor-btn-image"), this.$toolbar.prepend(a("<li>").append(d)), d
                        }
                    },
                    addAfter: function(b, c, d) {
                        if (this.opts.toolbar) {
                            if (this.button.isMobileUndoRedo(c)) return "buffer";
                            var e = this.button.build(c, {
                                title: d
                            });
                            e.addClass("redactor-btn-image");
                            var f = this.button.get(b);
                            return 0 !== f.length ? f.parent().after(a("<li>").append(e)) : this.$toolbar.append(a("<li>").append(e)), e
                        }
                    },
                    addBefore: function(b, c, d) {
                        if (this.opts.toolbar) {
                            if (this.button.isMobileUndoRedo(c)) return "buffer";
                            var e = this.button.build(c, {
                                title: d
                            });
                            e.addClass("redactor-btn-image");
                            var f = this.button.get(b);
                            return 0 !== f.length ? f.parent().before(a("<li>").append(e)) : this.$toolbar.append(a("<li>").append(e)), e
                        }
                    },
                    remove: function(a) {
                        this.button.get(a).parent().remove()
                    },
                    isMobileUndoRedo: function(a) {
                        return ("undo" == a || "redo" == a) && !this.utils.isDesktop()
                    }
                }
            },
            caret: function() {
                return {
                    setStart: function(b) {
                        if (this.utils.isBlock(b)) this.caret.set(b, 0, b, 0);
                        else {
                            var c = this.utils.createSpaceElement();
                            a(b).prepend(c), this.caret.setEnd(c)
                        }
                    },
                    setEnd: function(a) {
                        return a = a[0] || a, 1 == a.lastChild.nodeType ? this.caret.setAfter(a.lastChild) : void this.caret.set(a, 1, a, 1)
                    },
                    set: function(b, c, d, e) {
                        if (b = b[0] || b, d = d[0] || d, this.utils.isBlockTag(b.tagName) && "" === b.innerHTML && (b.innerHTML = this.opts.invisibleSpace), "BR" == b.tagName && this.opts.linebreaks === !1) {
                            var f = a(this.opts.emptyHtml)[0];
                            a(b).replaceWith(f), b = f, d = b
                        }
                        this.selection.get();
                        try {
                            this.range.setStart(b, c), this.range.setEnd(d, e)
                        } catch (g) {}
                        this.selection.addRange()
                    },
                    setAfter: function(b) {
                        try {
                            var c = a(b)[0].tagName;
                            if ("BR" == c || this.utils.isBlock(b)) "BR" != c && this.utils.browser("msie") ? this.caret.setStart(a(b).next()) : this.caret.setAfterOrBefore(b, "after");
                            else {
                                var d = this.utils.createSpaceElement();
                                a(b).after(d), this.caret.setEnd(d)
                            }
                        } catch (e) {
                            var d = this.utils.createSpaceElement();
                            a(b).after(d), this.caret.setEnd(d)
                        }
                    },
                    setBefore: function(b) {
                        this.utils.isBlock(b) ? this.caret.setEnd(a(b).prev()) : this.caret.setAfterOrBefore(b, "before")
                    },
                    setAfterOrBefore: function(a, b) {
                        if (this.utils.browser("msie") || this.$editor.focus(), a = a[0] || a, this.selection.get(), "after" == b) try {
                            this.range.setStartAfter(a), this.range.setEndAfter(a)
                        } catch (c) {} else try {
                            this.range.setStartBefore(a), this.range.setEndBefore(a)
                        } catch (c) {}
                        this.range.collapse(!1), this.selection.addRange()
                    },
                    getOffsetOfElement: function(b) {
                        b = b[0] || b, this.selection.get();
                        var c = this.range.cloneRange();
                        return c.selectNodeContents(b), c.setEnd(this.range.endContainer, this.range.endOffset), a.trim(c.toString()).length
                    },
                    getOffset: function() {
                        var a = 0,
                            b = window.getSelection();
                        if (b.rangeCount > 0) {
                            var c = window.getSelection().getRangeAt(0),
                                d = c.cloneRange();
                            d.selectNodeContents(this.$editor[0]), d.setEnd(c.endContainer, c.endOffset), a = d.toString().length
                        }
                        return a
                    },
                    setOffset: function(a, b) {
                        "undefined" == typeof b && (b = a), this.focus.isFocused() || this.focus.setStart();
                        for (var c, d = (this.selection.get(), 0), e = document.createTreeWalker(this.$editor[0], NodeFilter.SHOW_TEXT, null, null); c == e.nextNode();)
                            if (d += c.nodeValue.length,
                                d > a && (this.range.setStart(c, c.nodeValue.length + a - d), a = 1 / 0), d >= b) {
                                this.range.setEnd(c, c.nodeValue.length + b - d);
                                break
                            }
                        this.range.collapse(!1), this.selection.addRange()
                    },
                    setToPoint: function(a, b) {
                        this.caret.setOffset(a, b)
                    },
                    getCoords: function() {
                        return this.caret.getOffset()
                    }
                }
            },
            clean: function() {
                return {
                    onSet: function(b) {
                        b = this.clean.savePreCode(b), b = b.replace(/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi, '<pre class="redactor-script-tag" style="display: none;" $1>$2</pre>'), b = b.replace(/\$/g, "&#36;"), b = b.replace(/<a href="(.*?[^>]?)®(.*?[^>]?)">/gi, '<a href="$1&reg$2">'), this.opts.replaceDivs && (b = this.clean.replaceDivs(b)), this.opts.linebreaks && (b = this.clean.replaceParagraphsToBr(b)), b = this.clean.saveFormTags(b);
                        var c = a("<div>");
                        c.html(b);
                        var d = c.find("font[style]");
                        return 0 !== d.length && (d.replaceWith(function() {
                            var b = a(this),
                                c = a("<span>").attr("style", b.attr("style"));
                            return c.append(b.contents())
                        }), b = c.html()), c.remove(), b = b.replace(/<font(.*?[^<])>/gi, ""), b = b.replace(/<\/font>/gi, ""), b = this.tidy.load(b), this.opts.paragraphize && (b = this.paragraphize.load(b)), b = this.clean.setVerified(b), b = this.clean.convertInline(b), b = b.replace(/&amp;/g, "&")
                    },
                    onSync: function(b) {
                        if (b = b.replace(/\u200B/g, ""), b = b.replace(/&#x200b;/gi, ""), this.opts.cleanSpaces && (b = b.replace(/&nbsp;/gi, " ")), -1 != b.search(/^<p>(||\s||<br\s?\/?>||&nbsp;)<\/p>$/i)) return "";
                        b = b.replace(/<pre class="redactor-script-tag" style="display: none;"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi, "<script$1>$2</script>"), b = this.clean.restoreFormTags(b);
                        var c = {
                            "™": "&trade;",
                            "©": "&copy;",
                            "…": "&hellip;",
                            "—": "&mdash;",
                            "‐": "&dash;"
                        };
                        a.each(c, function(a, c) {
                            b = b.replace(new RegExp(a, "g"), c)
                        }), this.utils.browser("mozilla") && (b = b.replace(/<br\s?\/?>$/gi, "")), b = b.replace(new RegExp("<br\\s?/?></li>", "gi"), "</li>"), b = b.replace(new RegExp("</li><br\\s?/?>", "gi"), "</li>"), b = b.replace(/<(.*?)rel="\s*?"(.*?[^>]?)>/gi, '<$1$2">'), b = b.replace(/<(.*?)style="\s*?"(.*?[^>]?)>/gi, '<$1$2">'), b = b.replace(/="">/gi, ">"), b = b.replace(/""">/gi, '">'), b = b.replace(/"">/gi, '">'), b = b.replace(/<div(.*?[^>]) data-tagblock="redactor"(.*?[^>])>/gi, "<div$1$2>"), b = b.replace(/<(.*?) data-verified="redactor"(.*?[^>])>/gi, "<$1$2>");
                        var d = a("<div/>").html(a.parseHTML(b, document, !0));
                        return d.find("span").removeAttr("rel"), d.find("pre .redactor-invisible-space").each(function() {
                            a(this).contents().unwrap()
                        }), b = d.html(), b = b.replace(/<img(.*?[^>])rel="(.*?[^>])"(.*?[^>])>/gi, "<img$1$3>"), b = b.replace(/<span class="redactor-invisible-space">(.*?)<\/span>/gi, "$1"), b = b.replace(/ data-save-url="(.*?[^>])"/gi, ""), b = b.replace(/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi, "$3<img$4>"), b = b.replace(/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi, ""), b = b.replace(/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi, ""), b = b.replace(/<font(.*?[^<])>/gi, ""), b = b.replace(/<\/font>/gi, ""), b = this.tidy.load(b), this.opts.linkNofollow && (b = b.replace(/<a(.*?)rel="nofollow"(.*?[^>])>/gi, "<a$1$2>"), b = b.replace(/<a(.*?[^>])>/gi, '<a$1 rel="nofollow">')), b = b.replace(/\sdata-redactor-(tag|class|style)="(.*?[^>])"/gi, ""), b = b.replace(new RegExp('<(.*?) data-verified="redactor"(.*?[^>])>', "gi"), "<$1$2>"), b = b.replace(new RegExp('<(.*?) data-verified="redactor">', "gi"), "<$1>"), b = b.replace(/&amp;/g, "&")
                    },
                    onPaste: function(b, c) {
                        if (b = a.trim(b), b = b.replace(/\$/g, "&#36;"), b = b.replace(/<span class="s[0-9]">/gi, "<span>"), b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), b = b.replace(/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi, "	"), b = b.replace(/<span[^>]*>(\s|&nbsp;)<\/span>/gi, " "), this.opts.pastePlainText) return this.clean.getPlainText(b);
                        if (!this.utils.isSelectAll() && "undefined" == typeof c) {
                            if (this.utils.isCurrentOrParent(["FIGCAPTION", "A"])) return this.clean.getPlainText(b, !1);
                            if (this.utils.isCurrentOrParent("PRE")) return b = b.replace(/”/g, '"'), b = b.replace(/“/g, '"'), b = b.replace(/‘/g, "'"), b = b.replace(/’/g, "'"), this.clean.getPreCode(b);
                            if (this.utils.isCurrentOrParent(["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"])) {
                                if (b = this.clean.getOnlyImages(b), !this.utils.browser("msie")) {
                                    var d = this.selection.getBlock();
                                    d && "P" == d.tagName && (b = b.replace(/<img(.*?)>/gi, "<p><img$1></p>"))
                                }
                                return b
                            }
                            if (this.utils.isCurrentOrParent(["TD"])) return b = this.clean.onPasteTidy(b, "td"), this.opts.linebreaks && (b = this.clean.replaceParagraphsToBr(b)), b = this.clean.replaceDivsToBr(b);
                            if (this.utils.isCurrentOrParent(["LI"])) return this.clean.onPasteTidy(b, "li")
                        }
                        return b = this.clean.isSingleLine(b, c), this.clean.singleLine || (this.opts.linebreaks && (b = this.clean.replaceParagraphsToBr(b)), this.opts.replaceDivs && (b = this.clean.replaceDivs(b)), b = this.clean.saveFormTags(b)), b = this.clean.onPasteWord(b), b = this.clean.onPasteExtra(b), b = this.clean.onPasteTidy(b, "all"), !this.clean.singleLine && this.opts.paragraphize && (b = this.paragraphize.load(b)), b = this.clean.removeDirtyStyles(b), b = this.clean.onPasteRemoveSpans(b), b = this.clean.onPasteRemoveEmpty(b), b = this.clean.convertInline(b)
                    },
                    onPasteWord: function(b) {
                        if (b = b.replace(/<!--[\s\S]*?-->/gi, ""), b = b.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""), b = b.replace(/<o\:p[^>]*>[\s\S]*?<\/o\:p>/gi, ""), b.match(/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i)) {
                            b = b.replace(/<!--[\s\S]+?-->/gi, ""), b = b.replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi, ""), b = b.replace(/<(\/?)s>/gi, "<$1strike>"), b = b.replace(/ /gi, " "), b = b.replace(/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi, function(a, b) {
                                return b.length > 0 ? b.replace(/./, " ").slice(Math.floor(b.length / 2)).split("").join(" ") : ""
                            }), b = this.clean.onPasteIeFixLinks(b), b = b.replace(/<img(.*?)v:shapes=(.*?)>/gi, ""), b = b.replace(/src="file\:\/\/(.*?)"/, 'src=""');
                            var c = a("<div/>").html(b),
                                d = !1,
                                e = 1,
                                f = [];
                            c.find("p[style]").each(function() {
                                var b = a(this).attr("style").match(/mso\-list\:l([0-9]+)\slevel([0-9]+)/);
                                if (b) {
                                    var g = parseInt(b[1]),
                                        h = parseInt(b[2]),
                                        i = a(this).html().match(/^[\w]+\./) ? "ol" : "ul",
                                        j = a("<li/>").html(a(this).html());
                                    if (j.html(j.html().replace(/^([\w\.]+)</, "<")), j.find("span:first").remove(), 1 == h && -1 == a.inArray(g, f)) {
                                        var k = a("<" + i + "/>").attr({
                                            "data-level": h,
                                            "data-list": g
                                        }).html(j);
                                        a(this).replaceWith(k), d = g, f.push(g)
                                    } else {
                                        if (h > e) {
                                            for (var l = c.find('[data-level="' + e + '"][data-list="' + d + '"]'), m = l, n = e; h > n; n++) k = a("<" + i + "/>"), k.appendTo(m.find("li").last()), m = k;
                                            m.attr({
                                                "data-level": h,
                                                "data-list": g
                                            }).html(j)
                                        } else {
                                            var l = c.find('[data-level="' + h + '"][data-list="' + g + '"]').last();
                                            l.append(j)
                                        }
                                        e = h, d = g, a(this).remove()
                                    }
                                }
                            }), c.find("[data-level][data-list]").removeAttr("data-level data-list"), b = c.html(), b = b.replace(/·/g, ""), b = b.replace(/<p class="Mso(.*?)"/gi, "<p"), b = b.replace(/ class=\"(mso[^\"]*)\"/gi, ""), b = b.replace(/ class=(mso\w+)/gi, ""), b = b.replace(/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi, "$2"), b = b.replace(/\n/g, " "), b = b.replace(/<p>\n?<li>/gi, "<li>")
                        }
                        return b
                    },
                    onPasteExtra: function(a) {
                        return a = a.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2"), a = a.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, "$3"), a = a.replace(/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi, '<span style="font-weight: bold;"><span style="font-style: italic;">'), a = a.replace(/<span[^>]*font-style: italic[^>]*>/gi, '<span style="font-style: italic;">'), a = a.replace(/<span[^>]*font-weight: bold[^>]*>/gi, '<span style="font-weight: bold;">'), a = a.replace(/<span[^>]*text-decoration: underline[^>]*>/gi, '<span style="text-decoration: underline;">'), a = a.replace(/<img>/gi, ""), a = a.replace(/\n{3,}/gi, "\n"), a = a.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi, "$2"), a = a.replace(/<p><p>/gi, "<p>"), a = a.replace(/<\/p><\/p>/gi, "</p>"), a = a.replace(/<li>(\s*|\t*|\n*)<p>/gi, "<li>"), a = a.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi, "</li>"), a = a.replace(/<\/p>\s<p/gi, "</p><p"), a = a.replace(/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi, ""), a = a.replace(/<p>•([\w\W]*?)<\/p>/gi, "<li>$1</li>"), this.utils.browser("mozilla") && (a = a.replace(/<br\s?\/?>$/gi, "")), a
                    },
                    onPasteTidy: function(a, b) {
                        var c = ["span", "a", "pre", "blockquote", "small", "em", "strong", "code", "kbd", "mark", "address", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "ol", "ul", "li", "dl", "dt", "dd", "p", "br", "video", "audio", "iframe", "embed", "param", "object", "img", "table", "td", "th", "tr", "tbody", "tfoot", "thead", "h1", "h2", "h3", "h4", "h5", "h6"],
                            d = !1,
                            e = [
                                ["a", "*"],
                                ["img", ["src", "alt"]],
                                ["span", ["class", "rel", "data-verified"]],
                                ["iframe", "*"],
                                ["video", "*"],
                                ["audio", "*"],
                                ["embed", "*"],
                                ["object", "*"],
                                ["param", "*"],
                                ["source", "*"]
                            ];
                        "all" == b ? (d = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"], e = [
                            ["table", "class"],
                            ["td", ["colspan", "rowspan"]],
                            ["a", "*"],
                            ["img", ["src", "alt", "data-redactor-inserted-image"]],
                            ["span", ["class", "rel", "data-verified"]],
                            ["iframe", "*"],
                            ["video", "*"],
                            ["audio", "*"],
                            ["embed", "*"],
                            ["object", "*"],
                            ["param", "*"],
                            ["source", "*"]
                        ]) : "td" == b ? c = ["ul", "ol", "li", "span", "a", "small", "em", "strong", "code", "kbd", "mark", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "ol", "ul", "li", "dl", "dt", "dd", "br", "iframe", "video", "audio", "embed", "param", "object", "img", "h1", "h2", "h3", "h4", "h5", "h6"] : "li" == b && (c = ["ul", "ol", "li", "span", "a", "small", "em", "strong", "code", "kbd", "mark", "cite", "var", "samp", "dfn", "sup", "sub", "b", "i", "u", "del", "br", "iframe", "video", "audio", "embed", "param", "object", "img"]);
                        var f = {
                            deniedTags: this.opts.deniedTags ? this.opts.deniedTags : !1,
                            allowedTags: this.opts.allowedTags ? this.opts.allowedTags : c,
                            removeComments: !0,
                            removePhp: !0,
                            removeAttr: this.opts.removeAttr ? this.opts.removeAttr : !1,
                            allowedAttr: this.opts.allowedAttr ? this.opts.allowedAttr : e,
                            removeEmpty: d
                        };
                        return this.tidy.load(a, f)
                    },
                    onPasteRemoveEmpty: function(a) {
                        return a = a.replace(/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi, ""), this.opts.linebreaks || (a = a.replace(/<br>$/i, "")), a
                    },
                    onPasteRemoveSpans: function(a) {
                        return a = a.replace(/<span>(.*?)<\/span>/gi, "$1"), a = a.replace(/<span[^>]*>\s|&nbsp;<\/span>/gi, " ")
                    },
                    onPasteIeFixLinks: function(b) {
                        if (!this.utils.browser("msie")) return b;
                        var c = a.trim(b);
                        return 0 === c.search(/^<a(.*?)>(.*?)<\/a>$/i) && (b = b.replace(/^<a(.*?)>(.*?)<\/a>$/i, "$2")), b
                    },
                    isSingleLine: function(a, b) {
                        if (this.clean.singleLine = !1, !this.utils.isSelectAll() && "undefined" == typeof b) {
                            var c = this.opts.blockLevelElements.join("|").replace("P|", "").replace("DIV|", ""),
                                d = a.match(new RegExp("</(" + c + ")>", "gi")),
                                e = a.match(/<\/(p|div)>/gi);
                            if (!d && (null === e || e && e.length <= 1)) {
                                var f = a.match(/<br\s?\/?>/gi);
                                f || (this.clean.singleLine = !0, a = a.replace(/<\/?(p|div)(.*?)>/gi, ""))
                            }
                        }
                        return a
                    },
                    stripTags: function(a, b) {
                        b = (((b || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
                        var c = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                        return a.replace(c, function(a, c) {
                            return b.indexOf("<" + c.toLowerCase() + ">") > -1 ? a : ""
                        })
                    },
                    savePreCode: function(a) {
                        return a = this.clean.savePreFormatting(a), a = this.clean.saveCodeFormatting(a), a = this.clean.restoreSelectionMarker(a)
                    },
                    savePreFormatting: function(b) {
                        var c = b.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
                        return null !== c && a.each(c, a.proxy(function(a, c) {
                            var d = c.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);
                            d[2] = d[2].replace(/<br\s?\/?>/g, "\n"), d[2] = d[2].replace(/&nbsp;/g, " "), this.opts.preSpaces && (d[2] = d[2].replace(/\t/g, Array(this.opts.preSpaces + 1).join(" "))), d[2] = this.clean.encodeEntities(d[2]), d[2] = d[2].replace(/\$/g, "&#36;"), b = b.replace(c, "<pre" + d[1] + ">" + d[2] + "</pre>")
                        }, this)), b
                    },
                    saveCodeFormatting: function(b) {
                        var c = b.match(/<code(.*?)>([\w\W]*?)<\/code>/gi);
                        return null !== c && a.each(c, a.proxy(function(a, c) {
                            var d = c.match(/<code(.*?)>([\w\W]*?)<\/code>/i);
                            d[2] = d[2].replace(/&nbsp;/g, " "), d[2] = this.clean.encodeEntities(d[2]), d[2] = d[2].replace(/\$/g, "&#36;"), b = b.replace(c, "<code" + d[1] + ">" + d[2] + "</code>")
                        }, this)), b
                    },
                    restoreSelectionMarker: function(a) {
                        return a = a.replace(/&lt;span id=&quot;selection-marker-([0-9])&quot; class=&quot;redactor-selection-marker&quot; data-verified=&quot;redactor&quot;&gt;​&lt;\/span&gt;/g, '<span id="selection-marker-$1" class="redactor-selection-marker" data-verified="redactor">​</span>')
                    },
                    getTextFromHtml: function(b) {
                        b = b.replace(/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi, "\n");
                        var c = document.createElement("div");
                        return c.innerHTML = b, b = c.textContent || c.innerText, a.trim(b)
                    },
                    getPlainText: function(a, b) {
                        return a = this.clean.getTextFromHtml(a), a = a.replace(/\n/g, "<br />"), this.opts.paragraphize && "undefined" == typeof b && !this.utils.browser("mozilla") && (a = this.paragraphize.load(a)), a
                    },
                    getPreCode: function(a) {
                        return a = a.replace(/<img(.*?) style="(.*?)"(.*?[^>])>/gi, "<img$1$3>"), a = a.replace(/<img(.*?)>/gi, "&lt;img$1&gt;"), a = this.clean.getTextFromHtml(a), this.opts.preSpaces && (a = a.replace(/\t/g, Array(this.opts.preSpaces + 1).join(" "))), a = this.clean.encodeEntities(a)
                    },
                    getOnlyImages: function(a) {
                        return a = a.replace(/<img(.*?)>/gi, "[img$1]"), a = a.replace(/<([Ss]*?)>/gi, ""), a = a.replace(/\[img(.*?)\]/gi, "<img$1>")
                    },
                    getOnlyLinksAndImages: function(a) {
                        return a = a.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]'), a = a.replace(/<img(.*?)>/gi, "[img$1]"), a = a.replace(/<(.*?)>/gi, ""), a = a.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, '<a href="$1">$2</a>'), a = a.replace(/\[img(.*?)\]/gi, "<img$1>")
                    },
                    encodeEntities: function(a) {
                        return a = String(a).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                    },
                    removeDirtyStyles: function(b) {
                        if (this.utils.browser("msie")) return b;
                        var c = document.createElement("div");
                        return c.innerHTML = b, this.clean.clearUnverifiedRemove(a(c)), b = c.innerHTML, a(c).remove(), b
                    },
                    clearUnverified: function() {
                        if (!this.utils.browser("msie")) {
                            this.clean.clearUnverifiedRemove(this.$editor);
                            var a = this.$editor.find("h1, h2, h3, h4, h5, h6");
                            a.find("span").removeAttr("style"), a.find(this.opts.verifiedTags.join(", ")).removeAttr("style"), this.code.sync()
                        }
                    },
                    clearUnverifiedRemove: function(b) {
                        b.find(this.opts.verifiedTags.join(", ")).removeAttr("style"), b.find("span").not('[data-verified="redactor"]').removeAttr("style"), b.find('span[data-verified="redactor"], img[data-verified="redactor"]').each(function(b, c) {
                            var d = a(c);
                            d.attr("style", d.attr("rel"))
                        })
                    },
                    cleanEmptyParagraph: function() {},
                    setVerified: function(a) {
                        if (this.utils.browser("msie")) return a;
                        a = a.replace(new RegExp("<img(.*?[^>])>", "gi"), '<img$1 data-verified="redactor">'), a = a.replace(new RegExp("<span(.*?[^>])>", "gi"), '<span$1 data-verified="redactor">');
                        var b = a.match(new RegExp('<(span|img)(.*?)style="(.*?)"(.*?[^>])>', "gi"));
                        if (b)
                            for (var c = b.length, d = 0; c > d; d++) try {
                                var e = b[d].replace(/style="(.*?)"/i, 'style="$1" rel="$1"');
                                a = a.replace(b[d], e)
                            } catch (f) {}
                        return a
                    },
                    convertInline: function(b) {
                        var c = a("<div />").html(b),
                            d = this.opts.inlineTags;
                        return d.push("span"), c.find(d.join(",")).each(function() {
                            var b = a(this),
                                c = this.tagName.toLowerCase();
                            b.attr("data-redactor-tag", c), "span" == c && (b.attr("style") ? b.attr("data-redactor-style", b.attr("style")) : b.attr("class") && b.attr("data-redactor-class", b.attr("class")))
                        }), b = c.html(), c.remove(), b
                    },
                    normalizeLists: function() {
                        this.$editor.find("li").each(function(b, c) {
                            var d = a(c).next();
                            0 === d.length || "UL" != d[0].tagName && "OL" != d[0].tagName || a(c).append(d)
                        })
                    },
                    removeSpaces: function(a) {
                        return a = a.replace(/\n/g, ""), a = a.replace(/[\t]*/g, ""), a = a.replace(/\n\s*\n/g, "\n"), a = a.replace(/^[\s\n]*/g, " "), a = a.replace(/[\s\n]*$/g, " "), a = a.replace(/>\s{2,}</g, "> <"), a = a.replace(/\n\n/g, "\n"), a = a.replace(/\u200B/g, "")
                    },
                    replaceDivs: function(a) {
                        return this.opts.linebreaks ? (a = a.replace(/<div><br\s?\/?><\/div>/gi, "<br />"), a = a.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "$2<br />")) : a = a.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p$1>$2</p>"), a = a.replace(/<div(.*?[^>])>/gi, ""), a = a.replace(/<\/div>/gi, "")
                    },
                    replaceDivsToBr: function(a) {
                        return a = a.replace(/<div\s(.*?)>/gi, "<p>"), a = a.replace(/<div><br\s?\/?><\/div>/gi, "<br /><br />"), a = a.replace(/<div>([\w\W]*?)<\/div>/gi, "$1<br /><br />")
                    },
                    replaceParagraphsToBr: function(a) {
                        return a = a.replace(/<p\s(.*?)>/gi, "<p>"), a = a.replace(/<p><br\s?\/?><\/p>/gi, "<br />"), a = a.replace(/<p>([\w\W]*?)<\/p>/gi, "$1<br /><br />"), a = a.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi, "</blockquote>")
                    },
                    saveFormTags: function(a) {
                        return a.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi, '<section$1 rel="redactor-form-tag">$2</section>')
                    },
                    restoreFormTags: function(a) {
                        return a.replace(/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi, "<form$1$2>$3</form>")
                    }
                }
            },
            code: function() {
                return {
                    set: function(b) {
                        b = a.trim(b.toString()), b = this.clean.onSet(b), this.utils.browser("msie") && (b = b.replace(/<span(.*?)id="selection-marker-(1|2)"(.*?)><\/span>;/gi, "")), this.$editor.html(b), this.code.sync(), "" !== b && this.placeholder.remove(), setTimeout(a.proxy(this.buffer.add, this), 15), this.start === !1 && this.observe.load()
                    },
                    get: function() {
                        var a = this.$textarea.val();
                        return this.opts.replaceDivs && (a = this.clean.replaceDivs(a)), this.opts.linebreaks && (a = this.clean.replaceParagraphsToBr(a)), a = this.tabifier.get(a)
                    },
                    sync: function() {
                        setTimeout(a.proxy(this.code.startSync, this), 10)
                    },
                    startSync: function() {
                        var a = this.$editor.html();
                        this.code.syncCode && this.code.syncCode == a || (this.code.syncCode = a, a = this.core.setCallback("syncBefore", a), a = this.clean.onSync(a), this.$textarea.val(a), this.core.setCallback("sync", a), this.start === !1 && this.core.setCallback("change", a), this.start = !1, 0 == this.autosave.html && (this.autosave.html = this.code.get()), this.opts.codemirror && this.$textarea.next(".CodeMirror").each(function(b, c) {
                            c.CodeMirror.setValue(a)
                        }), this.autosave.onChange(), this.autosave.enable())
                    },
                    toggle: function() {
                        this.opts.visual ? this.code.showCode() : this.code.showVisual()
                    },
                    showCode: function() {
                        this.selection.save(), this.code.offset = this.caret.getOffset();
                        var b = a(window).scrollTop(),
                            c = (this.$editor.innerWidth(), this.$editor.innerHeight());
                        this.$editor.hide();
                        var d = this.$textarea.val();
                        this.modified = this.clean.removeSpaces(d), d = this.tabifier.get(d);
                        var e = 0,
                            f = 0,
                            g = a("<div/>").append(a.parseHTML(this.clean.onSync(this.$editor.html()), document, !0)),
                            h = g.find("span.redactor-selection-marker");
                        if (h.length > 0) {
                            var i = this.tabifier.get(g.html()).replace(/&amp;/g, "&");
                            1 == h.length ? (e = this.utils.strpos(i, g.find("#selection-marker-1").prop("outerHTML")), f = e) : 2 == h.length && (e = this.utils.strpos(i, g.find("#selection-marker-1").prop("outerHTML")), f = this.utils.strpos(i, g.find("#selection-marker-2").prop("outerHTML")) - g.find("#selection-marker-1").prop("outerHTML").toString().length)
                        }
                        this.selection.removeMarkers(), this.$textarea.val(d), this.opts.codemirror ? this.$textarea.next(".CodeMirror").each(function(b, g) {
                            a(g).show(), g.CodeMirror.setValue(d), g.CodeMirror.setSize("100%", c), g.CodeMirror.refresh(), e == f ? g.CodeMirror.setCursor(g.CodeMirror.posFromIndex(e).line, g.CodeMirror.posFromIndex(f).ch) : g.CodeMirror.setSelection({
                                line: g.CodeMirror.posFromIndex(e).line,
                                ch: g.CodeMirror.posFromIndex(e).ch
                            }, {
                                line: g.CodeMirror.posFromIndex(f).line,
                                ch: g.CodeMirror.posFromIndex(f).ch
                            }), g.CodeMirror.focus()
                        }) : (this.$textarea.height(c).show().focus(), this.$textarea.on("keydown.redactor-textarea-indenting", this.code.textareaIndenting), a(window).scrollTop(b), this.$textarea[0].setSelectionRange && this.$textarea[0].setSelectionRange(e, f), this.$textarea[0].scrollTop = 0), this.opts.visual = !1, this.button.setInactiveInCode(), this.button.setActive("html"), this.core.setCallback("source", d)
                    },
                    showVisual: function() {
                        var a;
                        if (!this.opts.visual) {
                            var b = 0,
                                c = 0;
                            if (this.opts.codemirror) {
                                var d;
                                this.$textarea.next(".CodeMirror").each(function(e, f) {
                                    d = f.CodeMirror.listSelections(), b = f.CodeMirror.indexFromPos(d[0].anchor), c = f.CodeMirror.indexFromPos(d[0].head), a = f.CodeMirror.getValue()
                                })
                            } else b = this.$textarea.get(0).selectionStart, c = this.$textarea.get(0).selectionEnd, a = this.$textarea.hide().val();
                            if (b > c && c > 0) {
                                var e = c,
                                    f = b;
                                b = e, c = f
                            }
                            if (b = this.code.enlargeOffset(a, b), c = this.code.enlargeOffset(a, c), a = a.substr(0, b) + this.selection.getMarkerAsHtml(1) + a.substr(b), c > b) {
                                var g = this.selection.getMarkerAsHtml(1).toString().length;
                                a = a.substr(0, c + g) + this.selection.getMarkerAsHtml(2) + a.substr(c + g)
                            }
                            this.modified !== this.clean.removeSpaces(a) && this.code.set(a), this.opts.codemirror && this.$textarea.next(".CodeMirror").hide(), this.$editor.show(), this.utils.isEmpty(a) || this.placeholder.remove(), this.selection.restore(), this.$textarea.off("keydown.redactor-textarea-indenting"), this.button.setActiveInVisual(), this.button.setInactive("html"), this.observe.load(), this.opts.visual = !0, this.core.setCallback("visual", a)
                        }
                    },
                    textareaIndenting: function(a) {
                        if (9 !== a.keyCode) return !0;
                        var b = this.$textarea,
                            c = b.get(0).selectionStart;
                        return b.val(b.val().substring(0, c) + "	" + b.val().substring(b.get(0).selectionEnd)), b.get(0).selectionStart = b.get(0).selectionEnd = c + 1, !1
                    },
                    enlargeOffset: function(a, b) {
                        var c = a.length,
                            d = 0;
                        if (">" == a[b]) d++;
                        else
                            for (var e = b; c >= e && (d++, ">" != a[e]); e++)
                                if ("<" == a[e] || e == c) {
                                    d = 0;
                                    break
                                } return b + d
                    }
                }
            },
            core: function() {
                return {
                    getObject: function() {
                        return a.extend({}, this)
                    },
                    getEditor: function() {
                        return this.$editor
                    },
                    getBox: function() {
                        return this.$box
                    },
                    getElement: function() {
                        return this.$element
                    },
                    getTextarea: function() {
                        return this.$textarea
                    },
                    getToolbar: function() {
                        return this.$toolbar ? this.$toolbar : !1
                    },
                    addEvent: function(a) {
                        this.core.event = a
                    },
                    getEvent: function() {
                        return this.core.event
                    },
                    setCallback: function(b, c, d) {
                        var e = b + "Callback",
                            f = "redactor",
                            g = this.opts[e];
                        if (this.$textarea) {
                            var h = !1,
                                i = a._data(this.$textarea[0], "events");
                            if ("undefined" != typeof i && "undefined" != typeof i[e] && a.each(i[e], a.proxy(function(a, b) {
                                    if (b.namespace == f) {
                                        var d = "undefined" == typeof d ? [c] : [c, d];
                                        h = "undefined" == typeof d ? b.handler.call(this, c) : b.handler.call(this, c, d)
                                    }
                                }, this)), h) return h
                        }
                        return a.isFunction(g) ? "undefined" == typeof d ? g.call(this, c) : g.call(this, c, d) : "undefined" == typeof d ? c : d
                    },
                    destroy: function() {
                        this.opts.destroyed = !0, this.core.setCallback("destroy"), this.$element.off(".redactor").removeData("redactor"), this.$editor.off(".redactor"), a(document).off("mousedown.redactor." + this.uuid), a(document).off("click.redactor-image-delete." + this.uuid), a(document).off("click.redactor-image-resize-hide." + this.uuid), a(document).off("touchstart.redactor." + this.uuid + " click.redactor." + this.uuid), a("body").off("scroll.redactor." + this.uuid), a(this.opts.toolbarFixedTarget).off("scroll.redactor." + this.uuid), this.$editor.removeClass("redactor-editor redactor-linebreaks redactor-placeholder"), this.$editor.removeAttr("contenteditable");
                        var b = this.code.get();
                        this.opts.toolbar && this.$toolbar.find("a").each(function() {
                            var b = a(this);
                            b.data("dropdown") && (b.data("dropdown").remove(), b.data("dropdown", {}))
                        }), this.build.isTextarea() ? (this.$box.after(this.$element), this.$box.remove(), this.$element.val(b).show()) : (this.$box.after(this.$editor), this.$box.remove(), this.$element.html(b).show()), this.$pasteBox && this.$pasteBox.remove(), this.$modalBox && this.$modalBox.remove(), this.$modalOverlay && this.$modalOverlay.remove(), a(".redactor-toolbar-tooltip-" + this.uuid).remove(), clearInterval(this.autosaveInterval)
                    }
                }
            },
            dropdown: function() {
                return {
                    build: function(b, c, d) {
                        "formatting" == b && this.opts.formattingAdd && a.each(this.opts.formattingAdd, a.proxy(function(a, b) {
                            var c, e = b.tag;
                            "undefined" != typeof b["class"] && (e = e + "-" + b["class"]), b.type = this.utils.isBlockTag(b.tag) ? "block" : "inline", c = "undefined" != typeof b.func ? b.func : "inline" == b.type ? "inline.formatting" : "block.formatting", this.opts.linebreaks && "block" == b.type && "p" == b.tag || (this.formatting[e] = {
                                tag: b.tag,
                                style: b.style,
                                "class": b["class"],
                                attr: b.attr,
                                data: b.data,
                                clear: b.clear
                            }, d[e] = {
                                func: c,
                                title: b.title
                            })
                        }, this)), a.each(d, a.proxy(function(d, e) {
                            var f = "";
                            e.className && (f = e.className);
                            var g = a('<li><a href="#" class="' + f + " redactor-dropdown-" + d + '">' + e.title + "</a></li>");
                            "formatting" == b && g.addClass("redactor-formatting-" + d), g.on("click", a.proxy(function(b) {
                                b.preventDefault();
                                var c = "func",
                                    f = e.func;
                                e.command ? (c = "command", f = e.command) : e.dropdown && (c = "dropdown", f = e.dropdown), a(b.target).hasClass("redactor-dropdown-link-inactive") || (this.button.onClick(b, d, c, f), this.dropdown.hideAll())
                            }, this)), this.observe.addDropdown(g, d, e), c.append(g)
                        }, this))
                    },
                    show: function(b, c) {
                        if (!this.opts.visual) return b.preventDefault(), !1;
                        var d = this.button.get(c);
                        0 == a("#redactor-dropdown-holder").length && a(document.body).append('<div id="redactor-dropdown-holder" class="ccm-ui" />');
                        var e = a("#redactor-dropdown-holder"),
                            f = d.data("dropdown").appendTo(e);
                        if (this.opts.highContrast && f.addClass("redactor-dropdown-contrast"), d.hasClass("dropact")) this.dropdown.hideAll();
                        else {
                            this.dropdown.hideAll(), this.observe.dropdowns(), this.core.setCallback("dropdownShow", {
                                dropdown: f,
                                key: c,
                                button: d
                            }), this.button.setActive(c), d.addClass("dropact");
                            var g = d.offset(),
                                h = f.width();
                            g.left + h > a(document).width() && (g.left = Math.max(0, g.left - h));
                            var i = g.left + "px";
                            if (this.$toolbar.hasClass("toolbar-fixed-box")) {
                                var j = this.$toolbar.innerHeight() + this.opts.toolbarFixedTopOffset,
                                    k = "fixed";
                                this.opts.toolbarFixedTarget !== document && (j = this.$toolbar.innerHeight() + this.$toolbar.offset().top + this.opts.toolbarFixedTopOffset, k = "absolute"), f.css({
                                    position: k,
                                    left: i,
                                    top: j + "px"
                                }).show()
                            } else {
                                var j = d.innerHeight() + g.top + "px";
                                f.css({
                                    position: "absolute",
                                    left: i,
                                    top: j
                                }).show()
                            }
                            this.core.setCallback("dropdownShown", {
                                dropdown: f,
                                key: c,
                                button: d
                            }), this.$dropdown = f
                        }
                        a(document).one("click.redactor-dropdown", a.proxy(this.dropdown.hide, this)), this.$editor.one("click.redactor-dropdown", a.proxy(this.dropdown.hide, this)), a(document).one("keyup.redactor-dropdown", a.proxy(this.dropdown.closeHandler, this)), f.on("mouseover.redactor-dropdown", a.proxy(this.utils.disableBodyScroll, this)).on("mouseout.redactor-dropdown", a.proxy(this.utils.enableBodyScroll, this)), b.stopPropagation()
                    },
                    closeHandler: function(a) {
                        a.which == this.keyCode.ESC && (this.dropdown.hideAll(), this.$editor.focus())
                    },
                    hideAll: function() {
                        this.$toolbar.find("a.dropact").removeClass("redactor-act").removeClass("dropact"), this.utils.enableBodyScroll(), a(".redactor-dropdown-" + this.uuid).hide(), a(".redactor-dropdown-link-selected").removeClass("redactor-dropdown-link-selected"), this.$dropdown && (this.$dropdown.off(".redactor-dropdown"), this.core.setCallback("dropdownHide", this.$dropdown), this.$dropdown = !1)
                    },
                    hide: function(b) {
                        var c = a(b.target);
                        c.hasClass("dropact") || c.hasClass("redactor-dropdown-link-inactive") || (c.removeClass("dropact"), c.off("mouseover mouseout"), this.dropdown.hideAll())
                    }
                }
            },
            file: function() {
                return {
                    show: function() {
                        this.modal.load("file", this.lang.get("file"), 700), this.modal.createCancelButton(), this.file.buttonSave = this.modal.createActionButton(this.lang.get("save")), this.opts.concrete5.filemanager ? a("a[data-action=choose-image-from-file-manager]").on("click", function(b) {
                            b.preventDefault(), ConcreteFileManager.launchDialog(function(b) {
                                jQuery.fn.dialog.showLoader(), ConcreteFileManager.getFileDetails(b.fID, function(b) {
                                    jQuery.fn.dialog.hideLoader();
                                    var c = b.files[0];
                                    a("#redactor-file-link").val(c.urlDownload)
                                })
                            })
                        }) : a("a[data-action=choose-image-from-file-manager]").remove(), this.file.buttonSave.on("click", a.proxy(function() {
                            var b = a("#redactor-file-link").val();
                            if ("" !== b) {
                                var c = a("#redactor-filename").val(),
                                    d = '<a href="' + b + '" id="filelink-marker">' + c + "</a>";
                                this.file.insert(d, !1)
                            } else this.modal.close()
                        }, this)), this.selection.save(), this.selection.get();
                        var b = this.sel.toString();
                        a("#redactor-filename").val(b), this.modal.show()
                    },
                    insert: function(b, c, d) {
                        if ("undefined" != typeof b.error) return this.modal.close(), this.selection.restore(), void this.core.setCallback("fileUploadError", b);
                        var e;
                        if ("string" == typeof b) e = b;
                        else {
                            var f = a("#redactor-filename").val();
                            ("undefined" == typeof f || "" === f) && (f = b.filename), e = '<a href="' + b.filelink + '" id="filelink-marker">' + f + "</a>"
                        }
                        if (c) {
                            this.selection.removeMarkers();
                            var g = this.selection.getMarker();
                            this.insert.nodeToCaretPositionFromPoint(d, g)
                        } else this.modal.close();
                        if (this.selection.restore(), this.buffer.set(), this.insert.htmlWithoutClean(e), "string" != typeof b) {
                            var h = a(this.$editor.find("a#filelink-marker"));
                            0 !== h.length ? h.removeAttr("id").removeAttr("style") : h = !1, this.core.setCallback("fileUpload", h, b)
                        }
                    }
                }
            },
            focus: function() {
                return {
                    setStart: function() {
                        this.$editor.focus();
                        var a = this.$editor.children().first();
                        if (0 !== a.length && 0 !== a[0].length && "BR" != a[0].tagName && 3 != a[0].nodeType) {
                            if ("UL" == a[0].tagName || "OL" == a[0].tagName) {
                                var b = a.find("li").first();
                                if (!this.utils.isBlock(b) && "" === b.text()) return void this.caret.setStart(b)
                            }
                            return this.opts.linebreaks && !this.utils.isBlockTag(a[0].tagName) ? (this.selection.get(), this.range.setStart(this.$editor[0], 0), this.range.setEnd(this.$editor[0], 0), void this.selection.addRange()) : void this.caret.setStart(a)
                        }
                    },
                    setEnd: function() {
                        var a = this.$editor.children().last();
                        this.$editor.focus(), 0 !== a.size() && (this.utils.isEmpty(this.$editor.html()) ? (this.selection.get(), this.range.collapse(!0), this.range.setStartAfter(a[0]), this.range.setEnd(a[0], 0), this.selection.addRange()) : (this.selection.get(), this.range.selectNodeContents(a[0]), this.range.collapse(!1), this.selection.addRange()))
                    },
                    isFocused: function() {
                        var b = document.getSelection().focusNode;
                        return null === b ? !1 : this.opts.linebreaks && a(b.parentNode).hasClass("redactor-linebreaks") ? !0 : this.utils.isRedactorParent(b.parentNode) ? this.$editor.is(":focus") : !1
                    }
                }
            },
            image: function() {
                return {
                    show: function() {
                        this.modal.load("image", this.lang.get("image"), 700), this.modal.createCancelButton(), this.image.buttonSave = this.modal.createActionButton(this.lang.get("save")), this.opts.concrete5.filemanager ? a("a[data-action=choose-image-from-file-manager]").on("click", function(b) {
                            b.preventDefault(), ConcreteFileManager.launchDialog(function(b) {
                                jQuery.fn.dialog.showLoader(), ConcreteFileManager.getFileDetails(b.fID, function(b) {
                                    jQuery.fn.dialog.hideLoader();
                                    var c = b.files[0];
                                    a("#redactor-image-link").val(c.urlInline)
                                })
                            })
                        }) : a("a[data-action=choose-image-from-file-manager]").remove(), this.image.buttonSave.on("click", a.proxy(function() {
                            var b = a("#redactor-image-link").val();
                            if ("" !== b) {
                                var c = '<img id="image-marker" src="' + b + '" />';
                                this.opts.linebreaks === !1 && (c = "<p>" + c + "</p>"), this.image.insert(c, !1)
                            } else this.modal.close()
                        }, this)), this.selection.save(), this.modal.show()
                    },
                    showEdit: function(b) {
                        var c = b.closest("a", this.$editor[0]);
                        this.modal.load("imageEdit", this.lang.get("edit"), 705), this.image.linkLightboxType = "image", this.image.linkLightboxIframeWidth = "600", this.image.linkLightboxIframeHeight = "400";
                        var d = c.attr("data-concrete5-link-lightbox");
                        "_blank" == c.attr("target") ? this.image.linkType = "blank" : "image" == d || "iframe" == d ? (this.image.linkType = "lightbox", this.image.linkLightboxType = d, this.image.linkLightboxIframeWidth = c.attr("data-concrete5-link-lightbox-width"), this.image.linkLightboxIframeHeight = c.attr("data-concrete5-link-lightbox-height")) : this.image.linkType = "same", this.image.$selectUrlOpen = a("#redactor-link-url-open"), this.opts.concrete5.lightbox || this.image.$selectUrlOpen.find("option[value=lightbox]").remove(), this.image.$selectUrlLightboxFieldGroup = a("div[data-field-group=lightbox]"), this.image.$selectUrlLightboxIframeFieldGroup = a("div[data-field-group=lightbox-iframe]"), this.image.$selectUrlLightboxFieldGroupSelect = a("div[data-field-group=lightbox] select"), this.image.$selectUrlLightboxIframeWidth = a("#redactor-link-lightbox-iframe-width"), this.image.$selectUrlLightboxIframeHeight = a("#redactor-link-lightbox-iframe-height"), this.image.$selectUrlOpen.val(this.image.linkType), this.image.$selectUrlLightboxIframeWidth.val(this.image.linkLightboxIframeWidth), this.image.$selectUrlLightboxIframeHeight.val(this.image.linkLightboxIframeHeight);
                        var e = this.image;
                        if (this.image.$selectUrlOpen.on("change", function() {
                                "lightbox" == a(this).val() ? e.$selectUrlLightboxFieldGroup.show() : (e.$selectUrlLightboxFieldGroup.hide(), e.$selectUrlLightboxFieldGroupSelect.val("image").trigger("change"))
                            }).trigger("change"), this.image.$selectUrlLightboxFieldGroupSelect.val(this.image.linkLightboxType), this.image.$selectUrlLightboxFieldGroupSelect.on("change", function() {
                                "iframe" == a(this).val() ? e.$selectUrlLightboxIframeFieldGroup.show() : e.$selectUrlLightboxIframeFieldGroup.hide()
                            }).trigger("change"), this.opts.concrete5.filemanager ? a("a[data-action=choose-file-from-file-manager]").on("click", function(b) {
                                b.preventDefault(), ConcreteFileManager.launchDialog(function(b) {
                                    jQuery.fn.dialog.showLoader(), ConcreteFileManager.getFileDetails(b.fID, function(b) {
                                        jQuery.fn.dialog.hideLoader();
                                        var c = b.files[0];
                                        a("#redactor-image-link").val(c.urlInline);
                                    })
                                })
                            }) : a("a[data-action=choose-file-from-file-manager]").remove(), this.opts.concrete5.sitemap ? a("a[data-action=choose-link-from-sitemap]").on("click", function(b) {
                                b.preventDefault(), jQuery.fn.dialog.open({
                                    width: "90%",
                                    height: "70%",
                                    modal: !1,
                                    title: ccmi18n_sitemap.choosePage,
                                    href: CCM_TOOLS_PATH + "/sitemap_search_selector"
                                }), ConcreteEvent.unsubscribe("SitemapSelectPage"), ConcreteEvent.subscribe("SitemapSelectPage", function(b, c) {
                                    jQuery.fn.dialog.closeTop();
                                    var d = CCM_APPLICATION_URL + "/index.php?cID=" + c.cID;
                                    a("#redactor-image-link").val(d), this.link.$inputUrl.val(d), this.link.$inputText.val(d)
                                })
                            }) : a("a[data-action=choose-link-from-sitemap]").remove(), this.opts.concrete5.sitemap || this.opts.concrete5.filemanager || a("#redactor-image-link").parent().removeClass(), this.modal.createCancelButton(), this.image.buttonDelete = this.modal.createDeleteButton(this.lang.get("_delete")), this.image.buttonSave = this.modal.createActionButton(this.lang.get("save")), this.image.buttonDelete.on("click", a.proxy(function() {
                                this.image.remove(b)
                            }, this)), this.image.buttonSave.on("click", a.proxy(function() {
                                this.image.update(b)
                            }, this)), a(".redactor-link-tooltip").remove(), a("#redactor-image-title").val(b.attr("alt")), this.opts.imageLink) {
                            var f = a("#redactor-image-link");
                            f.attr("href", b.attr("src")), 0 !== c.length && (f.val(c.attr("href")), "_blank" == c.attr("target") && a("#redactor-image-link-blank").prop("checked", !0))
                        } else a(".redactor-image-link-option").hide();
                        if (this.opts.imagePosition) {
                            var g = "block" == b.css("display") && "none" == b.css("float") ? "center" : b.css("float");
                            a("#redactor-image-align").val(g)
                        } else a(".redactor-image-position-option").hide();
                        this.modal.show(), a("#redactor-image-title").focus()
                    },
                    setFloating: function(b) {
                        var c = a("#redactor-image-align").val(),
                            d = "",
                            e = "",
                            f = "";
                        switch (c) {
                            case "left":
                                d = "left", f = "0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin + " 0";
                                break;
                            case "right":
                                d = "right", f = "0 0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin;
                                break;
                            case "center":
                                e = "block", f = "auto"
                        }
                        b.css({
                            "float": d,
                            display: e,
                            margin: f
                        }), b.attr("rel", b.attr("style"))
                    },
                    update: function(b) {
                        this.image.hideResize(), this.buffer.set();
                        var c = b.closest("a", this.$editor[0]),
                            d = a("#redactor-image-title").val().replace(/(<([^>]+)>)/gi, "");
                        b.attr("alt", d), this.image.setFloating(b);
                        var e = a.trim(a("#redactor-image-link").val()),
                            e = e.replace(/(<([^>]+)>)/gi, "");
                        if ("" !== e) {
                            var f = "((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}",
                                g = new RegExp("^(http|ftp|https)://" + f, "i"),
                                h = new RegExp("^" + f, "i"); - 1 == e.search(g) && 0 === e.search(h) && this.opts.linkProtocol && (e = this.opts.linkProtocol + "://" + e);
                            var i, j, k, l = !1;
                            if ("blank" == a("#redactor-link-url-open").val() && (l = !0), "lightbox" == a("#redactor-link-url-open").val() && (i = a("#redactor-link-lightbox-type").val(), "iframe" == i && (j = a("#redactor-link-lightbox-iframe-width").val(), k = a("#redactor-link-lightbox-iframe-height").val())), 0 === c.length) {
                                var m = a('<a href="' + e + '">' + this.utils.getOuterHtml(b) + "</a>");
                                l && m.attr("target", "_blank"), i && (m.attr("data-concrete5-link-lightbox", i), "iframe" == i && j && k && (m.attr("data-concrete5-link-lightbox-width", j), m.attr("data-concrete5-link-lightbox-height", k))), b.replaceWith(m)
                            } else c.removeAttr("data-concrete5-link-lightbox"), c.removeAttr("data-concrete5-link-lightbox-width"), c.removeAttr("data-concrete5-link-lightbox-height"), c.attr("href", e), l ? c.attr("target", "_blank") : c.removeAttr("target"), i && (c.attr("data-concrete5-link-lightbox", i), "iframe" == i && j && k && (c.attr("data-concrete5-link-lightbox-width", j), c.attr("data-concrete5-link-lightbox-height", k)))
                        } else 0 !== c.length && c.replaceWith(this.utils.getOuterHtml(b));
                        this.modal.close(), this.observe.images(), this.code.sync()
                    },
                    setEditable: function(b) {
                        this.opts.imageEditable && b.on("dragstart", a.proxy(this.image.onDrag, this));
                        var c = a.proxy(function(c) {
                            this.observe.image = b, this.image.resizer = this.image.loadEditableControls(b), a(document).on("mousedown.redactor-image-resize-hide." + this.uuid, a.proxy(this.image.hideResize, this)), this.opts.imageResizable && this.image.resizer.on("mousedown.redactor touchstart.redactor", a.proxy(function(a) {
                                this.image.setResizable(a, b)
                            }, this))
                        }, this);
                        b.off("mousedown.redactor").on("mousedown.redactor", a.proxy(this.image.hideResize, this)), b.off("click.redactor touchstart.redactor").on("click.redactor touchstart.redactor", c)
                    },
                    setResizable: function(a, b) {
                        a.preventDefault(), this.image.resizeHandle = {
                            x: a.pageX,
                            y: a.pageY,
                            el: b,
                            ratio: b.width() / b.height(),
                            h: b.height()
                        }, a = a.originalEvent || a, a.targetTouches && (this.image.resizeHandle.x = a.targetTouches[0].pageX, this.image.resizeHandle.y = a.targetTouches[0].pageY), this.image.startResize()
                    },
                    startResize: function() {
                        a(document).on("mousemove.redactor-image-resize touchmove.redactor-image-resize", a.proxy(this.image.moveResize, this)), a(document).on("mouseup.redactor-image-resize touchend.redactor-image-resize", a.proxy(this.image.stopResize, this))
                    },
                    moveResize: function(a) {
                        a.preventDefault(), a = a.originalEvent || a;
                        var b = this.image.resizeHandle.h;
                        b += a.targetTouches ? a.targetTouches[0].pageY - this.image.resizeHandle.y : a.pageY - this.image.resizeHandle.y;
                        var c = Math.round(b * this.image.resizeHandle.ratio);
                        if (!(50 > b || 100 > c)) {
                            var b = Math.round(this.image.resizeHandle.el.width() / this.image.resizeHandle.ratio);
                            this.image.resizeHandle.el.attr({
                                width: c,
                                height: b
                            }), this.image.resizeHandle.el.width(c), this.image.resizeHandle.el.height(b), this.code.sync()
                        }
                    },
                    stopResize: function() {
                        this.handle = !1, a(document).off(".redactor-image-resize"), this.image.hideResize()
                    },
                    onDrag: function(b) {
                        return 0 !== this.$editor.find("#redactor-image-box").length ? (b.preventDefault(), !1) : void this.$editor.on("drop.redactor-image-inside-drop", a.proxy(function() {
                            setTimeout(a.proxy(this.image.onDrop, this), 1)
                        }, this))
                    },
                    onDrop: function() {
                        this.image.fixImageSourceAfterDrop(), this.observe.images(), this.$editor.off("drop.redactor-image-inside-drop"), this.clean.clearUnverified(), this.code.sync()
                    },
                    fixImageSourceAfterDrop: function() {
                        this.$editor.find("img[data-save-url]").each(function() {
                            var b = a(this);
                            b.attr("src", b.attr("data-save-url")), b.removeAttr("data-save-url")
                        })
                    },
                    hideResize: function(b) {
                        if (!b || 0 === a(b.target).closest("#redactor-image-box", this.$editor[0]).length) {
                            if (b && "IMG" == b.target.tagName) {
                                var c = a(b.target);
                                c.attr("data-save-url", c.attr("src"))
                            }
                            var d = this.$editor.find("#redactor-image-box");
                            0 !== d.length && (a("#redactor-image-editter").remove(), a("#redactor-image-resizer").remove(), d.find("img").css({
                                marginTop: d[0].style.marginTop,
                                marginBottom: d[0].style.marginBottom,
                                marginLeft: d[0].style.marginLeft,
                                marginRight: d[0].style.marginRight
                            }), d.css("margin", ""), d.find("img").css("opacity", ""), d.replaceWith(function() {
                                return a(this).contents()
                            }), a(document).off("mousedown.redactor-image-resize-hide." + this.uuid), "undefined" != typeof this.image.resizeHandle && this.image.resizeHandle.el.attr("rel", this.image.resizeHandle.el.attr("style")), this.code.sync())
                        }
                    },
                    loadResizableControls: function(b, c) {
                        if (this.opts.imageResizable && !this.utils.isMobile()) {
                            var d = a('<span id="redactor-image-resizer" data-redactor="verified"></span>');
                            return this.utils.isDesktop() || d.css({
                                width: "15px",
                                height: "15px"
                            }), d.attr("contenteditable", !1), c.append(d), c.append(b), d
                        }
                        return c.append(b), !1
                    },
                    loadEditableControls: function(b) {
                        var c = a('<span id="redactor-image-box" data-redactor="verified">');
                        if (c.css("float", b.css("float")).attr("contenteditable", !1), "auto" != b[0].style.margin ? (c.css({
                                marginTop: b[0].style.marginTop,
                                marginBottom: b[0].style.marginBottom,
                                marginLeft: b[0].style.marginLeft,
                                marginRight: b[0].style.marginRight
                            }), b.css("margin", "")) : c.css({
                                display: "block",
                                margin: "auto"
                            }), b.css("opacity", ".5").after(c), this.opts.imageEditable) {
                            this.image.editter = a('<span id="redactor-image-editter" data-redactor="verified">' + this.lang.get("edit") + "</span>"), this.image.editter.attr("contenteditable", !1), this.image.editter.on("click", a.proxy(function() {
                                this.image.showEdit(b)
                            }, this)), c.append(this.image.editter);
                            var d = this.image.editter.innerWidth();
                            this.image.editter.css("margin-left", "-" + d / 2 + "px")
                        }
                        return this.image.loadResizableControls(b, c)
                    },
                    remove: function(b) {
                        var c = a(b),
                            d = c.closest("a", this.$editor[0]),
                            e = c.closest("figure", this.$editor[0]),
                            f = c.parent();
                        0 !== a("#redactor-image-box").length && (f = a("#redactor-image-box").parent());
                        var g;
                        0 !== e.length ? (g = e.next(), e.remove()) : 0 !== d.length ? (f = d.parent(), d.remove()) : c.remove(), a("#redactor-image-box").remove(), 0 !== e.length ? this.caret.setStart(g) : this.caret.setStart(f), this.core.setCallback("imageDelete", c[0].src, c), this.modal.close(), this.code.sync()
                    },
                    insert: function(b, c, d) {
                        if ("undefined" != typeof b.error) return this.modal.close(), this.selection.restore(), void this.core.setCallback("imageUploadError", b);
                        var e;
                        "string" == typeof b ? e = a(b).attr("data-redactor-inserted-image", "true") : (e = a("<img>"), e.attr("src", b.filelink).attr("data-redactor-inserted-image", "true"));
                        var f = e,
                            g = this.utils.isCurrentOrParent("P");
                        if (g && (f = a("<blockquote />").append(e)), c) {
                            this.selection.removeMarkers();
                            var h = this.selection.getMarker();
                            this.insert.nodeToCaretPositionFromPoint(d, h)
                        } else this.modal.close();
                        this.selection.restore(), this.buffer.set(), this.insert.html(this.utils.getOuterHtml(f), !1);
                        var i = this.$editor.find("img[data-redactor-inserted-image=true]").removeAttr("data-redactor-inserted-image");
                        g ? i.parent().contents().unwrap().wrap("<p />") : this.opts.linebreaks && (this.utils.isEmpty(this.code.get()) || i.before("<br>"), i.after("<br>")), "string" != typeof b && this.core.setCallback("imageUpload", i, b)
                    }
                }
            },
            indent: function() {
                return {
                    increase: function() {
                        this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save();
                        var a = this.selection.getBlock();
                        a && "LI" == a.tagName ? this.indent.increaseLists() : a === !1 && this.opts.linebreaks ? this.indent.increaseText() : this.indent.increaseBlocks(), this.selection.restore(), this.code.sync()
                    },
                    increaseLists: function() {
                        document.execCommand("indent"), this.indent.fixEmptyIndent(), this.clean.normalizeLists(), this.clean.clearUnverified()
                    },
                    increaseBlocks: function() {
                        a.each(this.selection.getBlocks(), a.proxy(function(a, b) {
                            if ("TD" !== b.tagName && "TH" !== b.tagName) {
                                var c = this.utils.getAlignmentElement(b),
                                    d = this.utils.normalize(c.css("margin-left")) + this.opts.indentValue;
                                c.css("margin-left", d + "px")
                            }
                        }, this))
                    },
                    increaseText: function() {
                        var b = this.selection.wrap("div");
                        a(b).attr("data-tagblock", "redactor"), a(b).css("margin-left", this.opts.indentValue + "px")
                    },
                    decrease: function() {
                        this.buffer.set(), this.selection.save();
                        var a = this.selection.getBlock();
                        a && "LI" == a.tagName ? this.indent.decreaseLists() : this.indent.decreaseBlocks(), this.selection.restore(), this.code.sync()
                    },
                    decreaseLists: function() {
                        document.execCommand("outdent");
                        var b = this.selection.getCurrent(),
                            c = a(b).closest("li", this.$editor[0]);
                        this.indent.fixEmptyIndent(), this.opts.linebreaks || 0 !== c.length || (document.execCommand("formatblock", !1, "p"), this.$editor.find("ul, ol, blockquote, p").each(a.proxy(this.utils.removeEmpty, this))), this.clean.clearUnverified()
                    },
                    decreaseBlocks: function() {
                        a.each(this.selection.getBlocks(), a.proxy(function(a, b) {
                            var c = this.utils.getAlignmentElement(b),
                                d = this.utils.normalize(c.css("margin-left")) - this.opts.indentValue;
                            0 >= d ? this.opts.linebreaks && "undefined" != typeof c.data("tagblock") ? c.replaceWith(c.html() + "<br />") : (c.css("margin-left", ""), this.utils.removeEmptyAttr(c, "style")) : c.css("margin-left", d + "px")
                        }, this))
                    },
                    fixEmptyIndent: function() {
                        var b = this.selection.getBlock();
                        if (this.range.collapsed && b && "LI" == b.tagName && this.utils.isEmpty(a(b).text())) {
                            var c = a(b);
                            c.find("span").not(".redactor-selection-marker").contents().unwrap(), c.append("<br>")
                        }
                    }
                }
            },
            inline: function() {
                return {
                    formatting: function(a) {
                        var b, c;
                        "undefined" != typeof this.formatting[a].style ? b = "style" : "undefined" != typeof this.formatting[a]["class"] && (b = "class"), b && (c = this.formatting[a][b]), this.inline.format(this.formatting[a].tag, b, c)
                    },
                    format: function(b, c, d) {
                        var e = this.selection.getCurrent();
                        if (!(e && "TR" === e.tagName || (this.blurClickedElement = !0, this.utils.isCurrentOrParent("PRE") || this.utils.isCurrentOrParentHeader()))) {
                            for (var f = ["b", "bold", "i", "italic", "underline", "strikethrough", "deleted", "superscript", "subscript"], g = ["strong", "strong", "em", "em", "u", "del", "del", "sup", "sub"], h = 0; h < f.length; h++) b == f[h] && (b = g[h]);
                            if (this.opts.allowedTags) {
                                if (-1 == a.inArray(b, this.opts.allowedTags)) return
                            } else if (-1 !== a.inArray(b, this.opts.deniedTags)) return;
                            this.inline.type = c || !1, this.inline.value = d || !1, this.buffer.set(), this.utils.browser("msie") || this.$editor.focus(), this.selection.get(), this.range.collapsed ? this.inline.formatCollapsed(b) : this.inline.formatMultiple(b)
                        }
                    },
                    formatCollapsed: function(b) {
                        var c = this.selection.getCurrent(),
                            d = a(c).closest(b + "[data-redactor-tag=" + b + "]", this.$editor[0]);
                        if (0 !== d.length && "style" != this.inline.type && "SPAN" != d[0].tagName) return void(this.utils.isEmpty(d.text()) ? (this.caret.setAfter(d[0]), d.remove(), this.code.sync()) : this.utils.isEndOfElement(d) && this.caret.setAfter(d[0]));
                        var e = a("<" + b + ">").attr("data-verified", "redactor").attr("data-redactor-tag", b);
                        e.html(this.opts.invisibleSpace), e = this.inline.setFormat(e);
                        var e = this.insert.node(e);
                        this.caret.setEnd(e), this.code.sync()
                    },
                    formatMultiple: function(b) {
                        if (this.inline.formatConvert(b), this.selection.save(), document.execCommand("strikethrough"), this.$editor.find("strike").each(a.proxy(function(c, d) {
                                var e = a(d);
                                this.inline.formatRemoveSameChildren(e, b);
                                var f;
                                this.inline.type ? (f = a("<span>").attr("data-redactor-tag", b).attr("data-verified", "redactor"), f = this.inline.setFormat(f)) : f = a("<" + b + ">").attr("data-redactor-tag", b).attr("data-verified", "redactor"), e.replaceWith(f.html(e.contents()));
                                var g = f.parent();
                                if (g && "U" === g[0].tagName && f.parent().replaceWith(f), "span" == b && g && "SPAN" === g[0].tagName && "style" === this.inline.type)
                                    for (var h = this.inline.value.split(";"), i = 0; i < h.length; i++) {
                                        if ("" === h[i]) return;
                                        var j = h[i].split(":");
                                        g.css(j[0], ""), this.utils.removeEmptyAttr(g, "style") && g.replaceWith(g.contents())
                                    }
                            }, this)), "span" != b && this.$editor.find(this.opts.inlineTags.join(", ")).each(a.proxy(function(b, c) {
                                var d = a(c);
                                if ("U" === c.tagName && 0 === c.attributes.length) return void d.replaceWith(d.contents());
                                var e = d.css("text-decoration");
                                "line-through" === e && (d.css("text-decoration", ""), this.utils.removeEmptyAttr(d, "style"))
                            }, this)), "del" != b) {
                            var c = this;
                            this.$editor.find("inline").each(function(a, b) {
                                c.utils.replaceToTag(b, "del")
                            })
                        }
                        this.selection.restore(), this.code.sync()
                    },
                    formatRemoveSameChildren: function(b, c) {
                        var d = this;
                        b.children(c).each(function() {
                            var b = a(this);
                            if (!b.hasClass("redactor-selection-marker"))
                                if ("style" == d.inline.type)
                                    for (var c = d.inline.value.split(";"), e = 0; e < c.length; e++) {
                                        if ("" === c[e]) return;
                                        var f = c[e].split(":");
                                        b.css(f[0], ""), d.utils.removeEmptyAttr(b, "style") && b.replaceWith(b.contents())
                                    } else b.contents().unwrap()
                        })
                    },
                    formatConvert: function(b) {
                        this.selection.save();
                        var c = "";
                        "class" == this.inline.type ? c = '[data-redactor-class="' + this.inline.value + '"]' : "style" == this.inline.type && (c = '[data-redactor-style="' + this.inline.value + '"]');
                        var d = this;
                        "del" != b && this.$editor.find("del").each(function(a, b) {
                            d.utils.replaceToTag(b, "inline")
                        }), "span" != b && this.$editor.find(b).each(function() {
                            var b = a(this);
                            b.replaceWith(a("<strike />").html(b.contents()))
                        }), this.$editor.find('[data-redactor-tag="' + b + '"]' + c).each(function() {
                            if ("" !== c || "span" != b || this.tagName.toLowerCase() != b) {
                                var d = a(this);
                                d.replaceWith(a("<strike />").html(d.contents()))
                            }
                        }), this.selection.restore()
                    },
                    setFormat: function(a) {
                        switch (this.inline.type) {
                            case "class":
                                a.hasClass(this.inline.value) ? (a.removeClass(this.inline.value), a.removeAttr("data-redactor-class")) : (a.addClass(this.inline.value), a.attr("data-redactor-class", this.inline.value));
                                break;
                            case "style":
                                a[0].style.cssText = this.inline.value, a.attr("data-redactor-style", this.inline.value)
                        }
                        return a
                    },
                    removeStyle: function() {
                        this.buffer.set();
                        var b = this.selection.getCurrent(),
                            c = this.selection.getInlines();
                        if (this.selection.save(), b && "SPAN" === b.tagName) {
                            var d = a(b);
                            d.removeAttr("style"), 0 === d[0].attributes.length && d.replaceWith(d.contents())
                        }
                        a.each(c, a.proxy(function(b, c) {
                            var d = a(c); - 1 == a.inArray(c.tagName.toLowerCase(), this.opts.inlineTags) || d.hasClass("redactor-selection-marker") || (d.removeAttr("style"), 0 === d[0].attributes.length && d.replaceWith(d.contents()))
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    removeStyleRule: function(b) {
                        this.buffer.set();
                        var c = this.selection.getParent(),
                            d = this.selection.getInlines();
                        if (this.selection.save(), c && "SPAN" === c.tagName) {
                            var e = a(c);
                            e.css(b, ""), this.utils.removeEmptyAttr(e, "style"), 0 === e[0].attributes.length && e.replaceWith(e.contents())
                        }
                        a.each(d, a.proxy(function(c, d) {
                            var e = a(d); - 1 == a.inArray(d.tagName.toLowerCase(), this.opts.inlineTags) || e.hasClass("redactor-selection-marker") || (e.css(b, ""), this.utils.removeEmptyAttr(e, "style"), 0 === e[0].attributes.length && e.replaceWith(e.contents()))
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    removeFormat: function() {
                        this.buffer.set();
                        var b = this.selection.getCurrent();
                        this.selection.save(), document.execCommand("removeFormat"), b && "SPAN" === b.tagName && a(b).replaceWith(a(b).contents()), a.each(this.selection.getNodes(), a.proxy(function(b, c) {
                            var d = a(c); - 1 == a.inArray(c.tagName.toLowerCase(), this.opts.inlineTags) || d.hasClass("redactor-selection-marker") || d.replaceWith(d.contents())
                        }, this)), this.selection.restore(), this.code.sync()
                    },
                    toggleClass: function(a) {
                        this.inline.format("span", "class", a)
                    },
                    toggleStyle: function(a) {
                        this.inline.format("span", "style", a)
                    }
                }
            },
            insert: function() {
                return {
                    set: function(b, c) {
                        this.placeholder.remove(), b = this.clean.setVerified(b), "undefined" == typeof c && (b = this.clean.onPaste(b, !1)), this.$editor.html(b), this.selection.remove(), this.focus.setEnd(), this.clean.normalizeLists(), this.code.sync(), this.observe.load(), "undefined" == typeof c && setTimeout(a.proxy(this.clean.clearUnverified, this), 10)
                    },
                    text: function(b) {
                        if (this.placeholder.remove(), b = b.toString(), b = a.trim(b), b = this.clean.getPlainText(b, !1), this.$editor.focus(), this.utils.browser("msie")) this.insert.htmlIe(b);
                        else {
                            this.selection.get(), this.range.deleteContents();
                            var c = document.createElement("div");
                            c.innerHTML = b;
                            for (var d, e, f = document.createDocumentFragment(); d = c.firstChild;) e = f.appendChild(d);
                            if (this.range.insertNode(f), e) {
                                var g = this.range.cloneRange();
                                g.setStartAfter(e), g.collapse(!0), this.sel.removeAllRanges(), this.sel.addRange(g)
                            }
                        }
                        this.code.sync(), this.clean.clearUnverified()
                    },
                    htmlWithoutClean: function(a) {
                        this.insert.html(a, !1)
                    },
                    html: function(b, c) {
                        this.placeholder.remove(), "undefined" == typeof c && (c = !0), this.$editor.focus(), b = this.clean.setVerified(b), c && (b = this.clean.onPaste(b)), this.utils.browser("msie") ? this.insert.htmlIe(b) : (this.clean.singleLine ? this.insert.execHtml(b) : document.execCommand("insertHTML", !1, b), this.insert.htmlFixMozilla()), this.clean.normalizeLists(), this.opts.linebreaks || this.$editor.find("p").each(a.proxy(this.utils.removeEmpty, this)), this.code.sync(), this.observe.load(), c && this.clean.clearUnverified()
                    },
                    htmlFixMozilla: function() {
                        if (this.utils.browser("mozilla")) {
                            var b = a(this.selection.getBlock()).next();
                            b.length > 0 && "P" == b[0].tagName && "" === b.html() && b.remove()
                        }
                    },
                    htmlIe: function(b) {
                        if (this.utils.isIe11()) {
                            var c = this.utils.isCurrentOrParent("P"),
                                d = a("<div>").append(b),
                                e = d.contents().is("p, :header, dl, ul, ol, div, table, td, blockquote, pre, address, section, header, footer, aside, article");
                            return void(c && e ? this.insert.ie11FixInserting(c, b) : this.insert.ie11PasteFrag(b))
                        }
                        document.selection.createRange().pasteHTML(b)
                    },
                    execHtml: function(a) {
                        a = this.clean.setVerified(a), this.selection.get(), this.range.deleteContents();
                        var b = document.createElement("div");
                        b.innerHTML = a;
                        for (var c, d, e = document.createDocumentFragment(); c = b.firstChild;) d = e.appendChild(c);
                        this.range.insertNode(e), this.range.collapse(!0), this.caret.setAfter(d)
                    },
                    node: function(b, c) {
                        b = b[0] || b;
                        var d = this.utils.getOuterHtml(b);
                        return d = this.clean.setVerified(d), null !== d.match(/</g) && (b = a(d)[0]), this.selection.get(), c !== !1 && this.range.deleteContents(), this.range.insertNode(b), this.range.collapse(!1), this.selection.addRange(), b
                    },
                    nodeToPoint: function(a, b, c) {
                        a = a[0] || a, this.selection.get();
                        var d;
                        if (document.caretPositionFromPoint) {
                            var e = document.caretPositionFromPoint(b, c);
                            this.range.setStart(e.offsetNode, e.offset), this.range.collapse(!0), this.range.insertNode(a)
                        } else if (document.caretRangeFromPoint) d = document.caretRangeFromPoint(b, c), d.insertNode(a);
                        else if ("undefined" != typeof document.body.createTextRange) {
                            d = document.body.createTextRange(), d.moveToPoint(b, c);
                            var f = d.duplicate();
                            f.moveToPoint(b, c), d.setEndPoint("EndToEnd", f), d.select()
                        }
                    },
                    nodeToCaretPositionFromPoint: function(a, b) {
                        b = b[0] || b;
                        var c, d = a.clientX,
                            e = a.clientY;
                        if (document.caretPositionFromPoint) {
                            var f = document.caretPositionFromPoint(d, e),
                                g = document.getSelection();
                            c = g.getRangeAt(0), c.setStart(f.offsetNode, f.offset), c.collapse(!0), c.insertNode(b)
                        } else if (document.caretRangeFromPoint) c = document.caretRangeFromPoint(d, e), c.insertNode(b);
                        else if ("undefined" != typeof document.body.createTextRange) {
                            c = document.body.createTextRange(), c.moveToPoint(d, e);
                            var h = c.duplicate();
                            h.moveToPoint(d, e), c.setEndPoint("EndToEnd", h), c.select()
                        }
                    },
                    ie11FixInserting: function(b, c) {
                        var d = document.createElement("span");
                        d.className = "redactor-ie-paste", this.insert.node(d);
                        var e = a(b).html();
                        e = "<p>" + e.replace(/<span class="redactor-ie-paste"><\/span>/gi, "</p>" + c + "<p>") + "</p>", e = e.replace(/<p><\/p>/gi, ""), a(b).replaceWith(e)
                    },
                    ie11PasteFrag: function(a) {
                        this.selection.get(), this.range.deleteContents();
                        var b = document.createElement("div");
                        b.innerHTML = a;
                        for (var c, d, e = document.createDocumentFragment(); c = b.firstChild;) d = e.appendChild(c);
                        this.range.insertNode(e), this.range.collapse(!1), this.selection.addRange()
                    }
                }
            },
            keydown: function() {
                return {
                    init: function(b) {
                        if (!this.rtePaste) {
                            var c = b.which,
                                d = c >= 37 && 40 >= c;
                            this.keydown.ctrl = b.ctrlKey || b.metaKey, this.keydown.current = this.selection.getCurrent(), this.keydown.parent = this.selection.getParent(), this.keydown.block = this.selection.getBlock(), this.keydown.pre = this.utils.isTag(this.keydown.current, "pre"), this.keydown.blockquote = this.utils.isTag(this.keydown.current, "blockquote"), this.keydown.figcaption = this.utils.isTag(this.keydown.current, "figcaption"), this.shortcuts.init(b, c), this.utils.isDesktop() && (this.keydown.checkEvents(d, c), this.keydown.setupBuffer(b, c)), this.keydown.addArrowsEvent(d), this.keydown.setupSelectAll(b, c);
                            var e = this.core.setCallback("keydown", b);
                            if (e === !1) return b.preventDefault(), !1;
                            if (this.opts.enterKey && (this.utils.browser("msie") || this.utils.browser("mozilla")) && (c === this.keyCode.DOWN || c === this.keyCode.RIGHT)) {
                                var f = !1,
                                    g = !1;
                                if (this.keydown.block && "TD" === this.keydown.block.tagName && (g = a(this.keydown.block).closest("table", this.$editor[0])), g && g.find("td").last()[0] === this.keydown.block && (f = !0), this.utils.isEndOfElement() && f) {
                                    var h = a(this.opts.emptyHtml);
                                    g.after(h), this.caret.setStart(h)
                                }
                            }
                            if (this.opts.enterKey && c === this.keyCode.DOWN && this.keydown.onArrowDown(), !this.opts.enterKey && c === this.keyCode.ENTER) return b.preventDefault(), void(this.range.collapsed || this.range.deleteContents());
                            if (c == this.keyCode.ENTER && !b.shiftKey && !b.ctrlKey && !b.metaKey) {
                                var i = this.core.setCallback("enter", b);
                                if (i === !1) return b.preventDefault(), !1;
                                if (this.keydown.blockquote && this.keydown.exitFromBlockquote(b) === !0) return !1;
                                var j, k;
                                if (this.keydown.pre) return this.keydown.insertNewLine(b);
                                if (this.keydown.blockquote || this.keydown.figcaption) return j = this.selection.getCurrent(), k = a(j).next(), 0 !== k.length && "BR" == k[0].tagName ? this.keydown.insertBreakLine(b) : this.utils.isEndOfElement() && j && "SPAN" != j ? this.keydown.insertDblBreakLine(b) : this.keydown.insertBreakLine(b);
                                if (this.opts.linebreaks && !this.keydown.block) return j = this.selection.getCurrent(), k = a(this.keydown.current).next(), 0 !== k.length && "BR" == k[0].tagName ? this.keydown.insertBreakLine(b) : j !== !1 && a(j).hasClass("redactor-invisible-space") ? (this.caret.setAfter(j), a(j).contents().unwrap(), this.keydown.insertDblBreakLine(b)) : this.utils.isEndOfEditor() ? this.keydown.insertDblBreakLine(b) : 0 === k.length && j === !1 && "undefined" != typeof k.context ? this.keydown.insertBreakLine(b) : this.keydown.insertBreakLine(b);
                                if (this.opts.linebreaks && this.keydown.block) setTimeout(a.proxy(this.keydown.replaceDivToBreakLine, this), 1);
                                else if (!this.opts.linebreaks && this.keydown.block) {
                                    if (setTimeout(a.proxy(this.keydown.replaceDivToParagraph, this), 1), "LI" === this.keydown.block.tagName) {
                                        j = this.selection.getCurrent();
                                        var l = a(j).closest("li", this.$editor[0]),
                                            m = l.closest("ul,ol", this.$editor[0]);
                                        if (0 !== l.length && this.utils.isEmpty(l.html()) && 0 === m.next().length && this.utils.isEmpty(m.find("li").last().html())) {
                                            m.find("li").last().remove();
                                            var h = a(this.opts.emptyHtml);
                                            return m.after(h), this.caret.setStart(h), !1
                                        }
                                    }
                                } else if (!this.opts.linebreaks && !this.keydown.block) return this.keydown.insertParagraph(b)
                            }
                            if (c === this.keyCode.ENTER && (b.ctrlKey || b.shiftKey)) return this.keydown.onShiftEnter(b);
                            if (c === this.keyCode.TAB || b.metaKey && 221 === c || b.metaKey && 219 === c) return this.keydown.onTab(b, c);
                            if (c === this.keyCode.BACKSPACE || c === this.keyCode.DELETE) {
                                var n = this.selection.getNodes();
                                if (n)
                                    for (var o, p = n.length, q = 0; p > q; q++) {
                                        var r = a(n[q]).children("img");
                                        if (0 !== r.length) {
                                            var s = this;
                                            a.each(r, function(b, c) {
                                                var d = a(c);
                                                "none" == d.css("float") && (s.core.setCallback("imageDelete", c.src, d), o = c)
                                            })
                                        } else "IMG" == n[q].tagName && o != n[q] && (this.core.setCallback("imageDelete", n[q].src, a(n[q])), o = n[q])
                                    }
                            }
                            if (c === this.keyCode.BACKSPACE) {
                                var t = this.selection.getBlock(),
                                    u = "0px" !== a(t).css("margin-left");
                                if (t && u && this.range.collapsed && this.utils.isStartOfElement()) return this.indent.decrease(), void b.preventDefault();
                                if (this.utils.browser("mozilla")) {
                                    var v = this.selection.getPrev(),
                                        w = a(v).prev()[0];
                                    v && "HR" === v.tagName && a(v).remove(), w && "HR" === w.tagName && a(w).remove()
                                }
                                this.keydown.removeInvisibleSpace(), this.keydown.removeEmptyListInTable(b)
                            }
                            this.code.sync()
                        }
                    },
                    checkEvents: function(a, b) {
                        a || "click" != this.core.getEvent() && "arrow" != this.core.getEvent() || (this.core.addEvent(!1), this.keydown.checkKeyEvents(b) && this.buffer.set())
                    },
                    checkKeyEvents: function(b) {
                        var c = this.keyCode,
                            d = [c.BACKSPACE, c.DELETE, c.ENTER, c.SPACE, c.ESC, c.TAB, c.CTRL, c.META, c.ALT, c.SHIFT];
                        return -1 == a.inArray(b, d) ? !0 : !1
                    },
                    addArrowsEvent: function(a) {
                        return a ? "click" == this.core.getEvent() || "arrow" == this.core.getEvent() ? void this.core.addEvent(!1) : void this.core.addEvent("arrow") : void 0
                    },
                    setupBuffer: function(a, b) {
                        return this.keydown.ctrl && 90 === b && !a.shiftKey && !a.altKey && this.opts.buffer.length ? (a.preventDefault(), void this.buffer.undo()) : this.keydown.ctrl && 90 === b && a.shiftKey && !a.altKey && 0 !== this.opts.rebuffer.length ? (a.preventDefault(), void this.buffer.redo()) : void(this.keydown.ctrl || (b == this.keyCode.BACKSPACE || b == this.keyCode.DELETE || b == this.keyCode.ENTER && !a.ctrlKey && !a.shiftKey || b == this.keyCode.SPACreturn this.selectAll
                            }, enableSelectAll: function() {
                                this.selectAll = !0
                            }, disableSelectAll: function() {
                                this.selectAll = !1
                            }, isRedactorParent: function(b) {
                                return b ? 0 === a(b).parents(".redactor-editor").length || a(b).hasClass("redactor-editor") ? !1 : b : !1
                            }, isCurrentOrParentHeader: function() {
                                return this.utils.isCurrentOrParent(["H1", "H2", "H3", "H4", "H5", "H6"])
                            }, isCurrentOrParent: function(b) {
                                var c = this.selection.getParent(),
                                    d = this.selection.getCurrent();
                                if (a.isArray(b)) {
                                    var e = 0;
                                    return a.each(b, a.proxy(function(a, b) {
                                        this.utils.isCurrentOrParentOne(d, c, b) && e++
                                    }, this)), 0 === e ? !1 : !0
                                }
                                return this.utils.isCurrentOrParentOne(d, c, b)
                            }, isCurrentOrParentOne: function(a, b, c) {
                                return c = c.toUpperCase(), b && b.tagName === c ? b : a && a.tagName === c ? a : !1
                            }, isOldIe: function() {
                                return this.utils.browser("msie") && parseInt(this.utils.browser("version"), 10) < 9 ? !0 : !1
                            }, isLessIe10: function() {
                                return this.utils.browser("msie") && parseInt(this.utils.browser("version"), 10) < 10 ? !0 : !1
                            }, isIe11: function() {
                                return !!navigator.userAgent.match(/Trident\/7\./)
                            }, browser: function(a) {
                                var b = navigator.userAgent.toLowerCase(),
                                    c = /(opr)[\/]([\w.]+)/.exec(b) || /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
                                return "safari" == a ? "undefined" != typeof c[3] ? "safari" == c[3] : !1 : "version" == a ? c[2] : "webkit" == a ? "chrome" == c[1] || "opr" == c[1] || "webkit" == c[1] : "rv" == c[1] ? "msie" == a : "opr" == c[1] ? "webkit" == a : a == c[1]
                            }, strpos: function(a, b, c) {
                                var d = a.indexOf(b, c);
                                return d >= 0 ? d : !1
                            }, disableBodyScroll: function() {
                                var b = a("html"),
                                    c = window.innerWidth;
                                if (!c) {
                                    var d = document.documentElement.getBoundingClientRect();
                                    c = d.right - Math.abs(d.left)
                                }
                                var e = document.body.clientWidth < c,
                                    f = this.utils.measureScrollbar();
                                b.css("overflow", "hidden"), e && b.css("padding-right", f)
                            }, measureScrollbar: function() {
                                var b = a("body"),
                                    c = document.createElement("div");
                                c.className = "redactor-scrollbar-measure", b.append(c);
                                var d = c.offsetWidth - c.clientWidth;
                                return b[0].removeChild(c), d
                            }, enableBodyScroll: function() {
                                a("html").css({
                                    overflow: "",
                                    "padding-right": ""
                                }), a("body").remove("redactor-scrollbar-measure")
                            }
                        }
                    }
                }, a(window).on("load.tools.redactor", function() {
                    a('[data-tools="redactor"]').redactor()
                }), b.prototype.init.prototype = b.prototype
            }(jQuery),
            !RedactorPlugins) var RedactorPlugins = {};
        if (function(a) {
                RedactorPlugins.fontcolor = function() {
                    return {
                        init: function() {
                            for (var a = ["#ffffff", "#000000", "#eeece1", "#1f497d", "#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#ffff00", "#f2f2f2", "#7f7f7f", "#ddd9c3", "#c6d9f0", "#dbe5f1", "#f2dcdb", "#ebf1dd", "#e5e0ec", "#dbeef3", "#fdeada", "#fff2ca", "#d8d8d8", "#595959", "#c4bd97", "#8db3e2", "#b8cce4", "#e5b9b7", "#d7e3bc", "#ccc1d9", "#b7dde8", "#fbd5b5", "#ffe694", "#bfbfbf", "#3f3f3f", "#938953", "#548dd4", "#95b3d7", "#d99694", "#c3d69b", "#b2a2c7", "#b7dde8", "#fac08f", "#f2c314", "#a5a5a5", "#262626", "#494429", "#17365d", "#366092", "#953734", "#76923c", "#5f497a", "#92cddc", "#e36c09", "#c09100", "#7f7f7f", "#0c0c0c", "#1d1b10", "#0f243e", "#244061", "#632423", "#4f6128", "#3f3151", "#31859b", "#974806", "#7f6000"], b = ["fontcolor", "backcolor"], c = 0; 2 > c; c++) {
                                var d = b[c],
                                    e = this.button.add(d, this.lang.get(d)),
                                    f = this.button.addDropdown(e);
                                f.width(242), this.fontcolor.buildPicker(f, d, a)
                            }
                            this.button.setAwesome("fontcolor", "fa fa-tint"), this.button.setAwesome("backcolor", "fa fa-tint re-inverse");
                            var g = this.button.get("backcolor");
                            g.parent().addClass("ccm-inline-toolbar-inverse-cell")
                        },
                        buildPicker: function(b, c, d) {
                            for (var e = "backcolor" == c ? "background-color" : "color", f = d.length, g = this, h = function(b) {
                                    b.preventDefault(), g.fontcolor.set(a(this).data("rule"), a(this).attr("rel"))
                                }, i = 0; f > i; i++) {
                                var j = d[i],
                                    k = a('<a rel="' + j + '" data-rule="' + e + '" href="#" style="float: left; font-size: 0; border: 2px solid #fff; padding: 0; margin: 0; width: 22px; height: 22px;"></a>');
                                k.css("background-color", j), k.on("click", h), b.append(k)
                            }
                            var l = a('<a href="#" style="display: block; clear: both; padding: 5px; font-size: 12px; line-height: 1;"></a>').html(this.lang.get("none"));
                            l.on("click", a.proxy(function(a) {
                                a.preventDefault(), this.fontcolor.remove(e)
                            }, this)), b.append(l)
                        },
                        set: function(a, b) {
                            this.inline.format("span", "style", a + ": " + b + ";")
                        },
                        remove: function(a) {
                            this.inline.removeStyleRule(a)
                        }
                    }
                }
            }(jQuery), !RedactorPlugins) var RedactorPlugins = {};
        if (function(a) {
                RedactorPlugins.fontfamily = function() {
                    return {
                        init: function() {
                            var b = ["Arial", "Helvetica", "Georgia", "Times New Roman", "Monospace"],
                                c = this,
                                d = {};
                            a.each(b, function(a, b) {
                                d["s" + a] = {
                                    title: b,
                                    func: function() {
                                        c.fontfamily.set(b)
                                    }
                                }
                            }), d.remove = {
                                title: this.lang.get("remove_font_family"),
                                func: c.fontfamily.reset
                            };
                            var e = this.button.add("fontfamily", this.lang.get("change_font_family"));
                            this.button.setAwesome("fontfamily", "fa fa-font"), this.button.addDropdown(e, d)
                        },
                        set: function(a) {
                            this.inline.format("span", "style", "font-family:" + a + ";")
                        },
                        reset: function() {
                            this.inline.removeStyleRule("font-family")
                        }
                    }
                }
            }(jQuery), !RedactorPlugins) var RedactorPlugins = {};
        if (function(a) {
                RedactorPlugins.fontsize = function() {
                    return {
                        init: function() {
                            var b = [10, 11, 12, 14, 16, 18, 20, 24, 28, 30],
                                c = this,
                                d = {};
                            a.each(b, function(a, b) {
                                d["s" + a] = {
                                    title: b + "px",
                                    func: function() {
                                        c.fontsize.set(b)
                                    }
                                }
                            }), d.remove = {
                                title: this.lang.get("remove_font_size"),
                                func: c.fontsize.reset
                            };
                            var e = this.button.add("fontsize", this.lang.get("change_font_size"));
                            this.button.setAwesome("fontsize", "fa fa-text-height"), this.button.addDropdown(e, d)
                        },
                        set: function(a) {
                            this.inline.format("span", "style", "font-size: " + a + "px;")
                        },
                        reset: function() {
                            this.inline.removeStyleRule("font-size")
                        }
                    }
                }
            }(jQuery), !RedactorPlugins) var RedactorPlugins = {};
        if (function(a) {
                RedactorPlugins.table = function() {
                    return {
                        getTemplate: function() {
                            return String() + '<section id="redactor-modal-table-insert"><div class="form-group"><label class="control-label">' + this.lang.get("rows") + '</label><input type="text" size="5" value="2" class="form-control" id="redactor-table-rows" /></div><div class="form-group"><label class="control-label">' + this.lang.get("columns") + '</label><input type="text" size="5" value="3" class="form-control" id="redactor-table-columns" /></div></section>'
                        },
                        init: function() {
                            var a = {};
                            a.insert_table = {
                                title: this.lang.get("insert_table"),
                                func: this.table.show
                            }, a.insert_row_above = {
                                title: this.lang.get("insert_row_above"),
                                func: this.table.addRowAbove
                            }, a.insert_row_below = {
                                title: this.lang.get("insert_row_below"),
                                func: this.table.addRowBelow
                            }, a.insert_column_left = {
                                title: this.lang.get("insert_column_left"),
                                func: this.table.addColumnLeft
                            }, a.insert_column_right = {
                                title: this.lang.get("insert_column_right"),
                                func: this.table.addColumnRight
                            }, a.add_head = {
                                title: this.lang.get("add_head"),
                                func: this.table.addHead
                            }, a.delete_head = {
                                title: this.lang.get("delete_head"),
                                func: this.table.deleteHead
                            }, a.delete_column = {
                                title: this.lang.get("delete_column"),
                                func: this.table.deleteColumn
                            }, a.delete_row = {
                                title: this.lang.get("delete_row"),
                                func: this.table.deleteRow
                            }, a.delete_table = {
                                title: this.lang.get("delete_table"),
                                func: this.table.deleteTable
                            }, this.observe.addButton("td", "table"), this.observe.addButton("th", "table");
                            var b = this.button.addBefore("link", "table", this.lang.get("table"));
                            this.button.setAwesome("table", "fa fa-table"), this.button.addDropdown(b, a)
                        },
                        show: function() {
                            this.modal.addTemplate("table", this.table.getTemplate()), this.modal.load("table", this.lang.get("insert_table"), 300), this.modal.createCancelButton();
                            var b = this.modal.createActionButton(this.lang.get("insert"));
                            b.on("click", this.table.insert), this.selection.save(), this.modal.show(), a("#redactor-table-rows").focus()
                        },
                        insert: function() {
                            var b, c, d, e, f = a("#redactor-table-rows").val(),
                                g = a("#redactor-table-columns").val(),
                                h = a("<div>"),
                                i = Math.floor(99999 * Math.random()),
                                j = a('<table id="table' + i + '"><tbody></tbody></table>');
                            for (b = 0; f > b; b++) {
                                for (c = a("<tr>"), d = 0; g > d; d++) e = a("<td>" + this.opts.invisibleSpace + "</td>"), 0 === b && 0 === d && e.append(this.selection.getMarker()), a(c).append(e);
                                j.append(c)
                            }
                            h.append(j);
                            var k = h.html();
                            if (this.modal.close(), this.selection.restore(), !this.table.getTable()) {
                                this.buffer.set();
                                var l = this.selection.getBlock() || this.selection.getCurrent();
                                l && "BODY" != l.tagName ? ("LI" == l.tagName && (l = a(l).closest("ul, ol")), a(l).after(k)) : this.insert.html(k), this.selection.restore();
                                var m = this.$editor.find("#table" + i);
                                if (!this.opts.linebreaks && (this.utils.browser("mozilla") || this.utils.browser("msie"))) {
                                    var n = m.next();
                                    0 === n.length && m.after(this.opts.emptyHtml)
                                }
                                this.observe.buttons(), m.find("span.redactor-selection-marker").remove(), m.removeAttr("id"), this.code.sync(), this.core.setCallback("insertedTable", m)
                            }
                        },
                        getTable: function() {
                            var b = a(this.selection.getParent()).closest("table");
                            return this.utils.isRedactorParent(b) ? 0 === b.size() ? !1 : b : !1
                        },
                        restoreAfterDelete: function(a) {
                            this.selection.restore(), a.find("span.redactor-selection-marker").remove(), this.code.sync()
                        },
                        deleteTable: function() {
                            var a = this.table.getTable();
                            if (a) {
                                this.buffer.set();
                                var b = a.next();
                                this.opts.linebreaks || 0 === b.length ? this.caret.setAfter(a) : this.caret.setStart(b), a.remove(), this.code.sync()
                            }
                        },
                        deleteRow: function() {
                            var b = this.table.getTable();
                            if (b) {
                                var c = a(this.selection.getCurrent());
                                this.buffer.set();
                                var d = c.closest("tr"),
                                    e = d.prev().length ? d.prev() : d.next();
                                if (e.length) {
                                    var f = e.children("td, th").first();
                                    f.length && f.prepend(this.selection.getMarker())
                                }
                                d.remove(), this.table.restoreAfterDelete(b)
                            }
                        },
                        deleteColumn: function() {
                            var b = this.table.getTable();
                            if (b) {
                                this.buffer.set();
                                var c = a(this.selection.getCurrent()),
                                    d = c.closest("td, th"),
                                    e = d[0].cellIndex;
                                b.find("tr").each(a.proxy(function(b, c) {
                                    var d = a(c),
                                        f = 0 > e - 1 ? e + 1 : e - 1;
                                    0 === b && d.find("td, th").eq(f).prepend(this.selection.getMarker()), d.find("td, th").eq(e).remove()
                                }, this)), this.table.restoreAfterDelete(b)
                            }
                        },
                        addHead: function() {
                            var b = this.table.getTable();
                            if (b) {
                                if (this.buffer.set(), 0 !== b.find("thead").size()) return void this.table.deleteHead();
                                var c = b.find("tr").first().clone();
                                c.find("td").replaceWith(a.proxy(function() {
                                    return a("<th>").html(this.opts.invisibleSpace)
                                }, this)), $thead = a("<thead></thead>").append(c), b.prepend($thead), this.code.sync()
                            }
                        },
                        deleteHead: function() {
                            var a = this.table.getTable();
                            if (a) {
                                var b = a.find("thead");
                                0 !== b.size() && (this.buffer.set(), b.remove(), this.code.sync())
                            }
                        },
                        addRowAbove: function() {
                            this.table.addRow("before")
                        },
                        addRowBelow: function() {
                            this.table.addRow("after")
                        },
                        addColumnLeft: function() {
                            this.table.addColumn("before")
                        },
                        addColumnRight: function() {
                            this.table.addColumn("after")
                        },
                        addRow: function(b) {
                            var c = this.table.getTable();
                            if (c) {
                                this.buffer.set();
                                var d = a(this.selection.getCurrent()),
                                    e = d.closest("tr"),
                                    f = e.clone();
                                f.find("th").replaceWith(function() {
                                    var b = a("<td>");
                                    return b[0].attributes = this.attributes, b.append(a(this).contents())
                                }), f.find("td").html(this.opts.invisibleSpace), "after" == b ? e.after(f) : e.before(f), this.code.sync()
                            }
                        },
                        addColumn: function(b) {
                            var c = this.table.getTable();
                            if (c) {
                                var d = 0,
                                    e = a(this.selection.getCurrent());
                                this.buffer.set();
                                var f = e.closest("tr"),
                                    g = e.closest("td, th");
                                f.find("td, th").each(a.proxy(function(b, c) {
                                    a(c)[0] === g[0] && (d = b)
                                }, this)), c.find("tr").each(a.proxy(function(c, e) {
                                    var f = a(e).find("td, th").eq(d),
                                        g = f.clone();
                                    g.html(this.opts.invisibleSpace), "after" == b ? f.after(g) : f.before(g)
                                }, this)), this.code.sync()
                            }
                        }
                    }
                }
            }(jQuery), "undefined" == typeof RedactorPlugins) var RedactorPlugins = {};
        if (RedactorPlugins.undoredo = function() {
                return {
                    init: function() {
                        var a = this.button.addFirst("undo", this.lang.get("undo")),
                            b = this.button.addAfter("undo", "redo", this.lang.get("redo"));
                        this.button.setAwesome("undo", "fa-undo"), this.button.setAwesome("redo", "fa-undo fa-flip-horizontal"), this.button.addCallback(a, this.buffer.undo), this.button.addCallback(b, this.buffer.redo)
                    }
                }
            }, "undefined" == typeof RedactorPlugins) var RedactorPlugins = {};
        if (RedactorPlugins.concrete5lightbox = function() {
                return {
                    init: function() {
                        this.opts.concrete5.lightbox = !0
                    }
                }
            }, "undefined" == typeof RedactorPlugins) var RedactorPlugins = {};
        if (RedactorPlugins.underline = function() {
                return {
                    init: function() {
                        this.button.addAfter("italic", "underline", this.lang.get("underline")), $btn = this.button.get("underline"), this.button.addCallback($btn, this.underline.format), this.button.setAwesome("underline", "fa fa-underline")
                    },
                    format: function(a) {
                        var b = this.button.get("underline");
                        b.hasClass("redactor-act") ? this.inline.removeFormat("u") : this.inline.format("u")
                    }
                }
            }, "undefined" == typeof RedactorPlugins) var RedactorPlugins = {};
        if (RedactorPlugins.concrete5inline = function() {
                return {
                    init: function() {
                        var a = this;
                        this.$toolbar.addClass("ccm-inline-toolbar"), this.$toolbar.append($('<li class="ccm-inline-toolbar-button ccm-inline-toolbar-button-cancel"><button id="ccm-redactor-cancel-button" type="button" class="btn btn-mini">' + this.lang.get("cancel") + '</button></li><li class="ccm-inline-toolbar-button ccm-inline-toolbar-button-save"><button id="ccm-redactor-save-button" type="button" class="btn btn-primary btn-mini">' + this.lang.get("save") + "</button></li>"));
                        var b = this.$toolbar;
                        $("#ccm-redactor-cancel-button").unbind().on("click", function() {
                            b.hide(), $("li#ccm-redactor-actions-buttons").hide(), ConcreteEvent.fire("EditModeExitInline"), a.core.destroy()
                        }), $("#ccm-redactor-save-button").unbind().on("click", function() {
                            $("#redactor-content").val(a.code.get()), b.hide(), ConcreteEvent.fire("EditModeBlockSaveInline")
                        })
                    }
                }
            }, "undefined" == typeof RedactorPlugins) var RedactorPlugins = {};
        if (RedactorPlugins.concrete5magic = function() {
                return {
                    styles: [],
                    createButton: function(a) {
                        if (!a) var a = [];
                        var b;
                        this.concrete5magic;
                        this.button.remove("styles"), b = this.button.get("formatting").length ? this.button.addAfter("formatting", "styles", this.lang.get("customStyles"), !1, a) : this.button.add("styles", this.lang.get("customStyles"), !1, a), this.button.setAwesome("styles", "fa-magic"), this.button.addDropdown(b, a)
                    },
                    init: function() {
                        var a = this.concrete5magic,
                            b = this;
                        $.ajax({
                            type: "get",
                            dataType: "json",
                            url: CCM_DISPATCHER_FILENAME + "/ccm/system/backend/editor_data",
                            data: {
                                ccm_token: CCM_EDITOR_SECURITY_TOKEN,
                                cID: CCM_CID
                            },
                            success: function(c) {
                                var d = {};
                                a.snippetsByHandle = {}, $.each(c.snippets, function(c, e) {
                                    a.snippetsByHandle[e.scsHandle] = {
                                        scsHandle: e.scsHandle,
                                        scsName: e.scsName
                                    }, d[e.scsHandle] = {
                                        title: e.scsName,
                                        func: function(c, d, e, f) {
                                            var g = a.snippetsByHandle[c],
                                                h = String() + '<span class="ccm-content-editor-snippet" contenteditable="false" data-scsHandle="' + g.scsHandle + '">' + g.scsName + "</span>";
                                            b.insert.htmlWithoutClean(h)
                                        }
                                    }
                                });
                                b.button.get("styles");
                                b.styles = c.classes, jQuery.each(c.classes, function(b, c) {
                                    d["s" + b] = {
                                        title: c.title,
                                        className: c.menuClass,
                                        func: function() {
                                            a.setCustomFormat(c)
                                        }
                                    }
                                }), d.remove = {
                                    title: b.lang.get("remove_style"),
                                    func: function() {
                                        a.resetCustomFormat()
                                    }
                                }, a.createButton(d)
                            }
                        }), a.createButton()
                    },
                    setCustomFormat: function(a) {
                        -1 == a.forceBlock || 1 != a.forceBlock && (!a.wrap || jQuery.inArray(a.wrap, ["a", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "var", "samp", "kbd", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "span", "sub", "sup", "code"]) > -1) ? (a.wrap && this.inline.format(a.wrap), a.style && this.block.setAttr("style", a.style), a.spanClass && this.inline.toggleClass(a.spanClass)) : (this.selection.wrap(a.wrap), a.style && this.block.setAttr("style", a.style), a.spanClass && this.block.setClass(a.spanClass))
                    },
                    resetCustomFormat: function() {
                        var a = this;
                        jQuery.each(this.styles, function(b, c) {
                            c.spanClass && (a.inline.removeFormat(), a.block.removeClass(c.spanClass))
                        })
                    }
                }
            }, !RedactorPlugins) var RedactorPlugins = {};
        RedactorPlugins.specialcharacters = function() {
            return {
                entities: [
                    ["&nbsp;", "&#160;", !0, "no-break space"],
                    ["&amp;", "&#38;", !0, "ampersand"],
                    ["&quot;", "&#34;", !0, "quotation mark"],
                    ["&cent;", "&#162;", !0, "cent sign"],
                    ["&euro;", "&#8364;", !0, "euro sign"],
                    ["&pound;", "&#163;", !0, "pound sign"],
                    ["&yen;", "&#165;", !0, "yen sign"],
                    ["&copy;", "&#169;", !0, "copyright sign"],
                    ["&reg;", "&#174;", !0, "registered sign"],
                    ["&trade;", "&#8482;", !0, "trade mark sign"],
                    ["&permil;", "&#8240;", !0, "per mille sign"],
                    ["&micro;", "&#181;", !0, "micro sign"],
                    ["&middot;", "&#183;", !0, "middle dot"],
                    ["&bull;", "&#8226;", !0, "bullet"],
                    ["&hellip;", "&#8230;", !0, "three dot leader"],
                    ["&prime;", "&#8242;", !0, "minutes / feet"],
                    ["&Prime;", "&#8243;", !0, "seconds / inches"],
                    ["&sect;", "&#167;", !0, "section sign"],
                    ["&para;", "&#182;", !0, "paragraph sign"],
                    ["&szlig;", "&#223;", !0, "sharp s / ess-zed"],
                    ["&lsaquo;", "&#8249;", !0, "single left-pointing angle quotation mark"],
                    ["&rsaquo;", "&#8250;", !0, "single right-pointing angle quotation mark"],
                    ["&laquo;", "&#171;", !0, "left pointing guillemet"],
                    ["&raquo;", "&#187;", !0, "right pointing guillemet"],
                    ["&lsquo;", "&#8216;", !0, "left single quotation mark"],
                    ["&rsquo;", "&#8217;", !0, "right single quotation mark"],
                    ["&ldquo;", "&#8220;", !0, "left double quotation mark"],
                    ["&rdquo;", "&#8221;", !0, "right double quotation mark"],
                    ["&sbquo;", "&#8218;", !0, "single low-9 quotation mark"],
                    ["&bdquo;", "&#8222;", !0, "double low-9 quotation mark"],
                    ["&lt;", "&#60;", !0, "less-than sign"],
                    ["&gt;", "&#62;", !0, "greater-than sign"],
                    ["&le;", "&#8804;", !0, "less-than or equal to"],
                    ["&ge;", "&#8805;", !0, "greater-than or equal to"],
                    ["&ndash;", "&#8211;", !0, "en dash"],
                    ["&mdash;", "&#8212;", !0, "em dash"],
                    ["&macr;", "&#175;", !0, "macron"],
                    ["&oline;", "&#8254;", !0, "overline"],
                    ["&curren;", "&#164;", !0, "currency sign"],
                    ["&brvbar;", "&#166;", !0, "broken bar"],
                    ["&uml;", "&#168;", !0, "diaeresis"],
                    ["&iexcl;", "&#161;", !0, "inverted exclamation mark"],
                    ["&iquest;", "&#191;", !0, "turned question mark"],
                    ["&circ;", "&#710;", !0, "circumflex accent"],
                    ["&tilde;", "&#732;", !0, "small tilde"],
                    ["&deg;", "&#176;", !0, "degree sign"],
                    ["&minus;", "&#8722;", !0, "minus sign"],
                    ["&plusmn;", "&#177;", !0, "plus-minus sign"],
                    ["&divide;", "&#247;", !0, "division sign"],
                    ["&frasl;", "&#8260;", !0, "fraction slash"],
                    ["&times;", "&#215;", !0, "multiplication sign"],
                    ["&sup1;", "&#185;", !0, "superscript one"],
                    ["&sup2;", "&#178;", !0, "superscript two"],
                    ["&sup3;", "&#179;", !0, "superscript three"],
                    ["&frac14;", "&#188;", !0, "fraction one quarter"],
                    ["&frac12;", "&#189;", !0, "fraction one half"],
                    ["&frac34;", "&#190;", !0, "fraction three quarters"],
                    ["&fnof;", "&#402;", !0, "function / florin"],
                    ["&int;", "&#8747;", !0, "integral"],
                    ["&sum;", "&#8721;", !0, "n-ary sumation"],
                    ["&infin;", "&#8734;", !0, "infinity"],
                    ["&radic;", "&#8730;", !0, "square root"],
                    ["&sim;", "&#8764;", !1, "similar to"],
                    ["&cong;", "&#8773;", !1, "approximately equal to"],
                    ["&asymp;", "&#8776;", !0, "almost equal to"],
                    ["&ne;", "&#8800;", !0, "not equal to"],
                    ["&equiv;", "&#8801;", !0, "identical to"],
                    ["&isin;", "&#8712;", !1, "element of"],
                    ["&notin;", "&#8713;", !1, "not an element of"],
                    ["&ni;", "&#8715;", !1, "contains as member"],
                    ["&prod;", "&#8719;", !0, "n-ary product"],
                    ["&and;", "&#8743;", !1, "logical and"],
                    ["&or;", "&#8744;", !1, "logical or"],
                    ["&not;", "&#172;", !0, "not sign"],
                    ["&cap;", "&#8745;", !0, "intersection"],
                    ["&cup;", "&#8746;", !1, "union"],
                    ["&part;", "&#8706;", !0, "partial differential"],
                    ["&forall;", "&#8704;", !1, "for all"],
                    ["&exist;", "&#8707;", !1, "there exists"],
                    ["&empty;", "&#8709;", !1, "diameter"],
                    ["&nabla;", "&#8711;", !1, "backward difference"],
                    ["&lowast;", "&#8727;", !1, "asterisk operator"],
                    ["&prop;", "&#8733;", !1, "proportional to"],
                    ["&ang;", "&#8736;", !1, "angle"],
                    ["&acute;", "&#180;", !0, "acute accent"],
                    ["&cedil;", "&#184;", !0, "cedilla"],
                    ["&ordf;", "&#170;", !0, "feminine ordinal indicator"],
                    ["&ordm;", "&#186;", !0, "masculine ordinal indicator"],
                    ["&dagger;", "&#8224;", !0, "dagger"],
                    ["&Dagger;", "&#8225;", !0, "double dagger"],
                    ["&Agrave;", "&#192;", !0, "A - grave"],
                    ["&Aacute;", "&#193;", !0, "A - acute"],
                    ["&Acirc;", "&#194;", !0, "A - circumflex"],
                    ["&Atilde;", "&#195;", !0, "A - tilde"],
                    ["&Auml;", "&#196;", !0, "A - diaeresis"],
                    ["&Aring;", "&#197;", !0, "A - ring above"],
                    ["&AElig;", "&#198;", !0, "ligature AE"],
                    ["&Ccedil;", "&#199;", !0, "C - cedilla"],
                    ["&Egrave;", "&#200;", !0, "E - grave"],
                    ["&Eacute;", "&#201;", !0, "E - acute"],
                    ["&Ecirc;", "&#202;", !0, "E - circumflex"],
                    ["&Euml;", "&#203;", !0, "E - diaeresis"],
                    ["&Igrave;", "&#204;", !0, "I - grave"],
                    ["&Iacute;", "&#205;", !0, "I - acute"],
                    ["&Icirc;", "&#206;", !0, "I - circumflex"],
                    ["&Iuml;", "&#207;", !0, "I - diaeresis"],
                    ["&ETH;", "&#208;", !0, "ETH"],
                    ["&Ntilde;", "&#209;", !0, "N - tilde"],
                    ["&Ograve;", "&#210;", !0, "O - grave"],
                    ["&Oacute;", "&#211;", !0, "O - acute"],
                    ["&Ocirc;", "&#212;", !0, "O - circumflex"],
                    ["&Otilde;", "&#213;", !0, "O - tilde"],
                    ["&Ouml;", "&#214;", !0, "O - diaeresis"],
                    ["&Oslash;", "&#216;", !0, "O - slash"],
                    ["&OElig;", "&#338;", !0, "ligature OE"],
                    ["&Scaron;", "&#352;", !0, "S - caron"],
                    ["&Ugrave;", "&#217;", !0, "U - grave"],
                    ["&Uacute;", "&#218;", !0, "U - acute"],
                    ["&Ucirc;", "&#219;", !0, "U - circumflex"],
                    ["&Uuml;", "&#220;", !0, "U - diaeresis"],
                    ["&Yacute;", "&#221;", !0, "Y - acute"],
                    ["&Yuml;", "&#376;", !0, "Y - diaeresis"],
                    ["&THORN;", "&#222;", !0, "THORN"],
                    ["&agrave;", "&#224;", !0, "a - grave"],
                    ["&aacute;", "&#225;", !0, "a - acute"],
                    ["&acirc;", "&#226;", !0, "a - circumflex"],
                    ["&atilde;", "&#227;", !0, "a - tilde"],
                    ["&auml;", "&#228;", !0, "a - diaeresis"],
                    ["&aring;", "&#229;", !0, "a - ring above"],
                    ["&aelig;", "&#230;", !0, "ligature ae"],
                    ["&ccedil;", "&#231;", !0, "c - cedilla"],
                    ["&egrave;", "&#232;", !0, "e - grave"],
                    ["&eacute;", "&#233;", !0, "e - acute"],
                    ["&ecirc;", "&#234;", !0, "e - circumflex"],
                    ["&euml;", "&#235;", !0, "e - diaeresis"],
                    ["&igrave;", "&#236;", !0, "i - grave"],
                    ["&iacute;", "&#237;", !0, "i - acute"],
                    ["&icirc;", "&#238;", !0, "i - circumflex"],
                    ["&iuml;", "&#239;", !0, "i - diaeresis"],
                    ["&eth;", "&#240;", !0, "eth"],
                    ["&ntilde;", "&#241;", !0, "n - tilde"],
                    ["&ograve;", "&#242;", !0, "o - grave"],
                    ["&oacute;", "&#243;", !0, "o - acute"],
                    ["&ocirc;", "&#244;", !0, "o - circumflex"],
                    ["&otilde;", "&#245;", !0, "o - tilde"],
                    ["&ouml;", "&#246;", !0, "o - diaeresis"],
                    ["&oslash;", "&#248;", !0, "o slash"],
                    ["&oelig;", "&#339;", !0, "ligature oe"],
                    ["&scaron;", "&#353;", !0, "s - caron"],
                    ["&ugrave;", "&#249;", !0, "u - grave"],
                    ["&uacute;", "&#250;", !0, "u - acute"],
                    ["&ucirc;", "&#251;", !0, "u - circumflex"],
                    ["&uuml;", "&#252;", !0, "u - diaeresis"],
                    ["&yacute;", "&#253;", !0, "y - acute"],
                    ["&thorn;", "&#254;", !0, "thorn"],
                    ["&yuml;", "&#255;", !0, "y - diaeresis"],
                    ["&Alpha;", "&#913;", !0, "Alpha"],
                    ["&Beta;", "&#914;", !0, "Beta"],
                    ["&Gamma;", "&#915;", !0, "Gamma"],
                    ["&Delta;", "&#916;", !0, "Delta"],
                    ["&Epsilon;", "&#917;", !0, "Epsilon"],
                    ["&Zeta;", "&#918;", !0, "Zeta"],
                    ["&Eta;", "&#919;", !0, "Eta"],
                    ["&Theta;", "&#920;", !0, "Theta"],
                    ["&Iota;", "&#921;", !0, "Iota"],
                    ["&Kappa;", "&#922;", !0, "Kappa"],
                    ["&Lambda;", "&#923;", !0, "Lambda"],
                    ["&Mu;", "&#924;", !0, "Mu"],
                    ["&Nu;", "&#925;", !0, "Nu"],
                    ["&Xi;", "&#926;", !0, "Xi"],
                    ["&Omicron;", "&#927;", !0, "Omicron"],
                    ["&Pi;", "&#928;", !0, "Pi"],
                    ["&Rho;", "&#929;", !0, "Rho"],
                    ["&Sigma;", "&#931;", !0, "Sigma"],
                    ["&Tau;", "&#932;", !0, "Tau"],
                    ["&Upsilon;", "&#933;", !0, "Upsilon"],
                    ["&Phi;", "&#934;", !0, "Phi"],
                    ["&Chi;", "&#935;", !0, "Chi"],
                    ["&Psi;", "&#936;", !0, "Psi"],
                    ["&Omega;", "&#937;", !0, "Omega"],
                    ["&alpha;", "&#945;", !0, "alpha"],
                    ["&beta;", "&#946;", !0, "beta"],
                    ["&gamma;", "&#947;", !0, "gamma"],
                    ["&delta;", "&#948;", !0, "delta"],
                    ["&epsilon;", "&#949;", !0, "epsilon"],
                    ["&zeta;", "&#950;", !0, "zeta"],
                    ["&eta;", "&#951;", !0, "eta"],
                    ["&theta;", "&#952;", !0, "theta"],
                    ["&iota;", "&#953;", !0, "iota"],
                    ["&kappa;", "&#954;", !0, "kappa"],
                    ["&lambda;", "&#955;", !0, "lambda"],
                    ["&mu;", "&#956;", !0, "mu"],
                    ["&nu;", "&#957;", !0, "nu"],
                    ["&xi;", "&#958;", !0, "xi"],
                    ["&omicron;", "&#959;", !0, "omicron"],
                    ["&pi;", "&#960;", !0, "pi"],
                    ["&rho;", "&#961;", !0, "rho"],
                    ["&sigmaf;", "&#962;", !0, "final sigma"],
                    ["&sigma;", "&#963;", !0, "sigma"],
                    ["&tau;", "&#964;", !0, "tau"],
                    ["&upsilon;", "&#965;", !0, "upsilon"],
                    ["&phi;", "&#966;", !0, "phi"],
                    ["&chi;", "&#967;", !0, "chi"],
                    ["&psi;", "&#968;", !0, "psi"],
                    ["&omega;", "&#969;", !0, "omega"],
                    ["&alefsym;", "&#8501;", !1, "alef symbol"],
                    ["&piv;", "&#982;", !1, "pi symbol"],
                    ["&real;", "&#8476;", !1, "real part symbol"],
                    ["&thetasym;", "&#977;", !1, "theta symbol"],
                    ["&upsih;", "&#978;", !1, "upsilon - hook symbol"],
                    ["&weierp;", "&#8472;", !1, "Weierstrass p"],
                    ["&image;", "&#8465;", !1, "imaginary part"],
                    ["&larr;", "&#8592;", !0, "leftwards arrow"],
                    ["&uarr;", "&#8593;", !0, "upwards arrow"],
                    ["&rarr;", "&#8594;", !0, "rightwards arrow"],
                    ["&darr;", "&#8595;", !0, "downwards arrow"],
                    ["&harr;", "&#8596;", !0, "left right arrow"],
                    ["&crarr;", "&#8629;", !1, "carriage return"],
                    ["&lArr;", "&#8656;", !1, "leftwards double arrow"],
                    ["&uArr;", "&#8657;", !1, "upwards double arrow"],
                    ["&rArr;", "&#8658;", !1, "rightwards double arrow"],
                    ["&dArr;", "&#8659;", !1, "downwards double arrow"],
                    ["&hArr;", "&#8660;", !1, "left right double arrow"],
                    ["&there4;", "&#8756;", !1, "therefore"],
                    ["&sub;", "&#8834;", !1, "subset of"],
                    ["&sup;", "&#8835;", !1, "superset of"],
                    ["&nsub;", "&#8836;", !1, "not a subset of"],
                    ["&sube;", "&#8838;", !1, "subset of or equal to"],
                    ["&supe;", "&#8839;", !1, "superset of or equal to"],
                    ["&oplus;", "&#8853;", !1, "circled plus"],
                    ["&otimes;", "&#8855;", !1, "circled times"],
                    ["&perp;", "&#8869;", !1, "perpendicular"],
                    ["&sdot;", "&#8901;", !1, "dot operator"],
                    ["&lceil;", "&#8968;", !1, "left ceiling"],
                    ["&rceil;", "&#8969;", !1, "right ceiling"],
                    ["&lfloor;", "&#8970;", !1, "left floor"],
                    ["&rfloor;", "&#8971;", !1, "right floor"],
                    ["&lang;", "&#9001;", !1, "left-pointing angle bracket"],
                    ["&rang;", "&#9002;", !1, "right-pointing angle bracket"],
                    ["&loz;", "&#9674;", !0, "lozenge"],
                    ["&spades;", "&#9824;", !1, "black spade suit"],
                    ["&clubs;", "&#9827;", !0, "black club suit"],
                    ["&hearts;", "&#9829;", !0, "black heart suit"],
                    ["&diams;", "&#9830;", !0, "black diamond suit"],
                    ["&ensp;", "&#8194;", !1, "en space"],
                    ["&emsp;", "&#8195;", !1, "em space"],
                    ["&thinsp;", "&#8201;", !1, "thin space"],
                    ["&zwnj;", "&#8204;", !1, "zero width non-joiner"],
                    ["&zwj;", "&#8205;", !1, "zero width joiner"],
                    ["&lrm;", "&#8206;", !1, "left-to-right mark"],
                    ["&rlm;", "&#8207;", !1, "right-to-left mark"],
                    ["&shy;", "&#173;", !1, "soft hyphen"]
                ],
                init: function() {
                    var a = this.button.addAfter("horizontalrule", "special-character-button", this.lang.get("insert_character"));
                    this.button.setAwesome("special-character-button", "fa-copyright"), this.button.addCallback(a, this.specialcharacters.show)
                },
                getTemplate: function() {
                    var a = String() + '<section id="redactor-modal-advanced">';
                    for (i = 0; i < this.specialcharacters.entities.length; i++) this.specialcharacters.entities[i][2] && (a += '<a class="re-icon-select" href="#" title="' + this.specialcharacters.entities[i][3] + '">' + this.specialcharacters.entities[i][1] + "</a> ");
                    return a += "</section><style>.re-icon-select {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important; color: black; text-decoration: none; font-size: 1.4em;  text-align: center; border: 1px solid #EEE; display: inline-block; width: 1em; margin-bottom: 0.2em; } .re-icon-select:hover {color: white; background-color: black}</style>"
                },
                show: function() {
                    this.modal.addTemplate("specialcharacters", this.specialcharacters.getTemplate()), this.modal.load("specialcharacters", this.lang.get("insert_character"), 500), this.modal.createCancelButton(), this.selection.save(), this.modal.show();
                    var a = this.specialcharacters.insert;
                    $(".re-icon-select").on("click", function() {
                        return $(this).addClass("re-icon-selected"), a(), !1
                    })
                },
                insert: function() {
                    var a = $(".re-icon-selected").html();
                    this.modal.close(), this.selection.restore(), this.insert.text(a), this.code.sync(), this.buffer.set()
                }
            }
        };
        E) && this.buffer.set())
}, setupSelectAll: function(a, b) {
    this.keydown.ctrl && 65 === b ? this.utils.enableSelectAll() : b == this.keyCode.LEFT_WIN || this.keydown.ctrl || this.utils.disableSelectAll()
}, onArrowDown: function() {
    for (var a = [this.keydown.blockquote, this.keydown.pre, this.keydown.figcaption], b = 0; b < a.length; b++)
        if (a[b]) return this.keydown.insertAfterLastElement(a[b]), !1
}, onShiftEnter: function(a) {
    return this.buffer.set(), this.utils.isEndOfElement() ? this.keydown.insertDblBreakLine(a) : this.keydown.insertBreakLine(a)
}, onTab: function(a, b) {
    if (!this.opts.tabKey) return !0;
    if (this.utils.isEmpty(this.code.get()) && this.opts.tabAsSpaces === !1) return !0;
    a.preventDefault();
    var c;
    return this.keydown.pre && !a.shiftKey ? (c = this.opts.preSpaces ? document.createTextNode(Array(this.opts.preSpaces + 1).join(" ")) : document.createTextNode("	"), this.insert.node(c), this.code.sync()) : this.opts.tabAsSpaces !== !1 ? (c = document.createTextNode(Array(this.opts.tabAsSpaces + 1).join(" ")), this.insert.node(c), this.code.sync()) : a.metaKey && 219 === b ? this.indent.decrease() : a.metaKey && 221 === b ? this.indent.increase() : a.shiftKey ? this.indent.decrease() : this.indent.increase(), !1
}, replaceDivToBreakLine: function() {
    var b = this.selection.getBlock(),
        c = b.innerHTML.replace(/<br\s?\/?>/gi, "");
    if (("DIV" === b.tagName || "P" === b.tagName) && "" === c && !a(b).hasClass("redactor-editor")) {
        var d = document.createElement("br");
        return a(b).replaceWith(d), this.caret.setBefore(d), this.code.sync(), !1
    }
}, replaceDivToParagraph: function() {
    var b = this.selection.getBlock(),
        c = b.innerHTML.replace(/<br\s?\/?>/gi, "");
    if ("DIV" === b.tagName && this.utils.isEmpty(c) && !a(b).hasClass("redactor-editor")) {
        var d = document.createElement("p");
        return d.innerHTML = this.opts.invisibleSpace, a(b).replaceWith(d), this.caret.setStart(d), this.code.sync(), !1
    }
    this.opts.cleanStyleOnEnter && "P" == b.tagName && a(b).removeAttr("class").removeAttr("style")
}, insertParagraph: function(a) {
    a.preventDefault(), this.selection.get();
    var b = document.createElement("p");
    return b.innerHTML = this.opts.invisibleSpace, this.range.deleteContents(), this.range.insertNode(b), this.caret.setStart(b), this.code.sync(), !1
}, exitFromBlockquote: function(b) {
    if (this.utils.isEndOfElement()) {
        var c = a.trim(a(this.keydown.block).html());
        if (-1 != c.search(/(<br\s?\/?>){2}$/i)) {
            if (b.preventDefault(), this.opts.linebreaks) {
                var d = document.createElement("br");
                a(this.keydown.blockquote).after(d), this.caret.setBefore(d), a(this.keydown.block).html(c.replace(/<br\s?\/?>$/i, ""))
            } else {
                var e = a(this.opts.emptyHtml);
                a(this.keydown.blockquote).after(e), this.caret.setStart(e)
            }
            return !0
        }
    }
}, insertAfterLastElement: function(b) {
    if (this.utils.isEndOfElement())
        if (this.buffer.set(), this.opts.linebreaks) {
            var c = a("<div>").append(a.trim(this.$editor.html())).contents(),
                d = c.last()[0];
            if ("SPAN" == d.tagName && "" === d.innerHTML && (d = c.prev()[0]), this.utils.getOuterHtml(d) != this.utils.getOuterHtml(b)) return;
            var e = document.createElement("br");
            a(b).after(e), this.caret.setAfter(e)
        } else {
            if (this.$editor.contents().last()[0] !== b) return;
            var f = a(this.opts.emptyHtml);
            a(b).after(f), this.caret.setStart(f)
        }
}, insertNewLine: function(a) {
    a.preventDefault();
    var b = document.createTextNode("\n");
    return this.selection.get(), this.range.deleteContents(), this.range.insertNode(b), this.caret.setAfter(b), this.code.sync(), !1
}, insertBreakLine: function(a) {
    return this.keydown.insertBreakLineProcessing(a)
}, insertDblBreakLine: function(a) {
    return this.keydown.insertBreakLineProcessing(a, !0)
}, insertBreakLineProcessing: function(b, c) {
    b.stopPropagation(), this.selection.get();
    var d = document.createElement("br");
    this.utils.browser("msie") ? (this.range.collapse(!1), this.range.setEnd(this.range.endContainer, this.range.endOffset)) : this.range.deleteContents(), this.range.insertNode(d);
    var e = a(d).parent("a");
    if (e.length > 0 && (e.find(d).remove(), e.after(d)), c === !0) {
        var f = a(d).next();
        if (0 !== f.length && "BR" === f[0].tagName && this.utils.isEndOfEditor()) return this.caret.setAfter(d), this.code.sync(), !1;
        var g = document.createElement("br");
        this.range.insertNode(g), this.caret.setAfter(g)
    } else if (this.utils.browser("msie")) {
        var h = document.createElement("span");
        h.innerHTML = "&#x200b;", a(d).after(h), this.caret.setAfter(h), a(h).remove()
    } else {
        var i = document.createRange();
        i.setStartAfter(d), i.collapse(!0);
        var j = window.getSelection();
        j.removeAllRanges(), j.addRange(i)
    }
    return this.code.sync(), !1
}, removeInvisibleSpace: function() {
    var b = a(this.keydown.current);
    0 === b.text().search(/^\u200B$/g) && b.remove()
}, removeEmptyListInTable: function(b) {
    var c = a(this.keydown.current),
        d = a(this.keydown.parent),
        e = c.closest("td", this.$editor[0]);
    if (0 !== e.length && c.closest("li", this.$editor[0]) && 1 === d.children("li").length) {
        if (!this.utils.isEmpty(c.text())) return;
        b.preventDefault(), c.remove(), d.remove(), this.caret.setStart(e)
    }
}
}
}, keyup: function() {
        return {
            init: function(b) {
                if (!this.rtePaste) {
                    var c = b.which;
                    this.keyup.current = this.selection.getCurrent(), this.keyup.parent = this.selection.getParent();
                    var d = this.utils.isRedactorParent(a(this.keyup.parent).parent()),
                        e = this.core.setCallback("keyup", b);
                    if (e === !1) return b.preventDefault(), !1;
                    if (!this.opts.linebreaks && 3 == this.keyup.current.nodeType && this.keyup.current.length <= 1 && (this.keyup.parent === !1 || "BODY" == this.keyup.parent.tagName) && this.keyup.replaceToParagraph(), !this.opts.linebreaks && this.utils.isRedactorParent(this.keyup.current) && "DIV" === this.keyup.current.tagName && this.keyup.replaceToParagraph(!1), this.opts.linebreaks || !a(this.keyup.parent).hasClass("redactor-invisible-space") || d !== !1 && "BODY" != d[0].tagName || (a(this.keyup.parent).contents().unwrap(), this.keyup.replaceToParagraph()), this.linkify.isEnabled() && this.linkify.isKey(c) && this.linkify.format(),
                        c === this.keyCode.DELETE || c === this.keyCode.BACKSPACE) {
                        if (this.utils.browser("mozilla")) {
                            var f = a(this.keydown.current).closest("td", this.$editor[0]);
                            if (0 !== f.size() && "" !== f.text()) return b.preventDefault(), !1
                        }
                        return this.clean.clearUnverified(), this.observe.image ? (b.preventDefault(), this.image.hideResize(), this.buffer.set(), this.image.remove(this.observe.image), this.observe.image = !1, !1) : (this.$editor.find("p").each(a.proxy(function(b, c) {
                            this.utils.removeEmpty(b, a(c).html())
                        }, this)), this.opts.linebreaks && this.keyup.current && "DIV" == this.keyup.current.tagName && this.utils.isEmpty(this.keyup.current.innerHTML) && (a(this.keyup.current).after(this.selection.getMarkerAsHtml()), this.selection.restore(), a(this.keyup.current).remove()), this.keyup.formatEmpty(b))
                    }
                }
            },
            replaceToParagraph: function(b) {
                var c, d = a(this.keyup.current);
                c = b === !1 ? a("<p>").append(d.html()) : a("<p>").append(d.clone()), d.replaceWith(c);
                var e = a(c).next();
                "undefined" != typeof e[0] && "BR" == e[0].tagName && e.remove(), this.caret.setEnd(c)
            },
            formatEmpty: function(b) {
                var c = a.trim(this.$editor.html());
                if (this.utils.isEmpty(c)) return b.preventDefault(), this.opts.linebreaks ? (this.$editor.html(this.selection.getMarkerAsHtml()), this.selection.restore()) : (this.$editor.html(this.opts.emptyHtml), this.focus.setStart()), this.code.sync(), !1
            }
        }
    }, lang: function() {
        return {
            load: function() {
                this.opts.curLang = this.opts.langs[this.opts.lang]
            },
            get: function(a) {
                return "undefined" != typeof this.opts.curLang[a] ? this.opts.curLang[a] : ""
            }
        }
    }, line: function() {
        return {
            insert: function() {
                this.buffer.set();
                var a = this.selection.getBlocks();
                return a[0] !== !1 && this.line.isExceptLastOrFirst(a) ? void(this.utils.browser("msie") || this.$editor.focus()) : void(this.utils.browser("msie") ? this.line.insertInIe() : this.line.insertInOthersBrowsers())
            },
            isExceptLastOrFirst: function(b) {
                var c = ["li", "td", "th", "blockquote", "figcaption", "pre", "dl", "dt", "dd"],
                    d = b[0].tagName.toLowerCase(),
                    e = this.selection.getLastBlock();
                e = "undefined" == typeof e ? d : e.tagName.toLowerCase();
                var f = -1 != a.inArray(d, c),
                    g = -1 != a.inArray(e, c);
                return f && g || f ? !0 : void 0
            },
            insertInIe: function() {
                this.utils.saveScroll(), this.buffer.set(), this.insert.node(document.createElement("hr")), this.utils.restoreScroll(), this.code.sync()
            },
            insertInOthersBrowsers: function() {
                this.buffer.set();
                var a = '<p id="redactor-insert-line"><br /></p>';
                this.opts.linebreaks && (a = '<br id="redactor-insert-line">'), document.execCommand("insertHtml", !1, "<hr>" + a), this.line.setFocus(), this.code.sync()
            },
            setFocus: function() {
                var b = this.$editor.find("#redactor-insert-line"),
                    c = a(b).next()[0],
                    d = c;
                this.utils.browser("mozilla") && c && "" === c.innerHTML && (d = a(c).next()[0], a(c).remove()), d ? (b.remove(), this.opts.linebreaks || (this.$editor.focus(), this.line.setStart(d))) : (b.removeAttr("id"), this.line.setStart(b[0]))
            },
            setStart: function(a) {
                if ("undefined" != typeof a) {
                    var b = document.createTextNode("​");
                    this.selection.get(), this.range.setStart(a, 0), this.range.insertNode(b), this.range.collapse(!0), this.selection.addRange()
                }
            }
        }
    }, link: function() {
        return {
            show: function(b) {
                "undefined" != typeof b && b.preventDefault && b.preventDefault(), this.observe.isCurrent("a") ? this.modal.load("link", this.lang.get("link_edit"), 600) : this.modal.load("link", this.lang.get("link_insert"), 600), this.modal.createCancelButton();
                var c = this.observe.isCurrent("a") ? this.lang.get("edit") : this.lang.get("insert");
                this.link.buttonInsert = this.modal.createActionButton(c), this.selection.get(), this.link.getData(), this.link.cleanUrl(), this.link.$selectUrlOpen = a("#redactor-link-url-open"), this.opts.concrete5.lightbox || this.link.$selectUrlOpen.find("option[value=lightbox]").remove(), this.link.$selectUrlLightboxFieldGroup = a("div[data-field-group=lightbox]"), this.link.$selectUrlLightboxIframeFieldGroup = a("div[data-field-group=lightbox-iframe]"), this.link.$selectUrlLightboxFieldGroupSelect = a("div[data-field-group=lightbox] select"), this.link.$selectUrlLightboxIframeWidth = a("#redactor-link-lightbox-iframe-width"), this.link.$selectUrlLightboxIframeHeight = a("#redactor-link-lightbox-iframe-height"), this.link.$selectUrlOpen.val(this.link.linkType), this.link.$selectUrlLightboxIframeWidth.val(this.link.linkLightboxIframeWidth), this.link.$selectUrlLightboxIframeHeight.val(this.link.linkLightboxIframeHeight);
                var d = this.link;
                this.link.$selectUrlOpen.on("change", function() {
                    "lightbox" == a(this).val() ? d.$selectUrlLightboxFieldGroup.show() : (d.$selectUrlLightboxFieldGroup.hide(), d.$selectUrlLightboxFieldGroupSelect.val("image").trigger("change"))
                }).trigger("change"), this.link.$selectUrlLightboxFieldGroupSelect.val(this.link.linkLightboxType), this.link.$selectUrlLightboxFieldGroupSelect.on("change", function() {
                    "iframe" == a(this).val() ? d.$selectUrlLightboxIframeFieldGroup.show() : d.$selectUrlLightboxIframeFieldGroup.hide()
                }).trigger("change"), this.link.$inputUrl = a("#redactor-link-url"), this.link.$inputText = a("#redactor-link-url-text"), this.link.$inputText.val(this.link.text), this.link.$inputUrl.val(this.link.url), this.link.buttonInsert.on("click", a.proxy(this.link.insert, this)), a(".redactor-link-tooltip").remove(), this.opts.concrete5.filemanager ? a("a[data-action=choose-file-from-file-manager]").on("click", function(b) {
                    b.preventDefault(), ConcreteFileManager.launchDialog(function(b) {
                        jQuery.fn.dialog.showLoader(), ConcreteFileManager.getFileDetails(b.fID, function(b) {
                            jQuery.fn.dialog.hideLoader();
                            var c = b.files[0];
                            a("#redactor-link-url").val(c.urlDownload)
                        })
                    })
                }) : a("a[data-action=choose-file-from-file-manager]").remove(), this.opts.concrete5.sitemap ? a("a[data-action=choose-link-from-sitemap]").on("click", function(b) {
                    b.preventDefault(), jQuery.fn.dialog.open({
                        width: "90%",
                        height: "70%",
                        modal: !1,
                        title: ccmi18n_sitemap.choosePage,
                        href: CCM_TOOLS_PATH + "/sitemap_search_selector"
                    }), ConcreteEvent.unsubscribe("SitemapSelectPage"), ConcreteEvent.subscribe("SitemapSelectPage", function(b, c) {
                        jQuery.fn.dialog.closeTop();
                        var d = CCM_APPLICATION_URL + "/index.php?cID=" + c.cID;
                        a("#redactor-link-url").val(d), this.link.$inputUrl.val(d), this.link.$inputText.val(d)
                    })
                }) : a("a[data-action=choose-link-from-sitemap]").remove(), this.opts.concrete5.sitemap || this.opts.concrete5.filemanager || a("#redactor-link-url").parent().removeClass(), this.selection.save(), this.modal.show(), this.link.$inputUrl.focus()
            },
            cleanUrl: function() {
                var a = self.location.href.replace(/\/$/i, "");
                if ("undefined" != typeof this.link.url && (this.link.url = this.link.url.replace(a, ""), this.link.url = this.link.url.replace(/^\/#/, "#"), this.link.url = this.link.url.replace("mailto:", ""), !this.opts.linkProtocol)) {
                    var b = new RegExp("^(http|ftp|https)://" + self.location.host, "i");
                    this.link.url = this.link.url.replace(b, "")
                }
            },
            getData: function() {
                this.link.$node = !1;
                var b = a(this.selection.getCurrent()).closest("a", this.$editor[0]);
                if (0 !== b.length && "A" === b[0].tagName) {
                    this.link.$node = b, this.link.url = b.attr("href"), this.link.text = b.text(), this.link.target = b.attr("target");
                    var c = b.attr("data-concrete5-link-lightbox");
                    this.link.linkLightboxType = "image", this.link.linkLightboxIframeWidth = "600", this.link.linkLightboxIframeHeight = "400", "_blank" == this.link.target ? this.link.linkType = "blank" : "image" == c || "iframe" == c ? (this.link.linkType = "lightbox", this.link.linkLightboxType = c, this.link.linkLightboxIframeWidth = b.attr("data-concrete5-link-lightbox-width"), this.link.linkLightboxIframeHeight = b.attr("data-concrete5-link-lightbox-height")) : this.link.linkType = "same"
                } else this.link.text = this.sel.toString(), this.link.url = "", this.link.target = "", this.link.linkType = "same", this.link.linkLightboxType = "image", this.link.linkLightboxIframeWidth = "600", this.link.linkLightboxIframeHeight = "400"
            },
            insert: function() {
                this.placeholder.remove();
                var b = "",
                    c = this.link.$inputUrl.val(),
                    d = this.link.$inputText.val().replace(/(<([^>]+)>)/gi, ""),
                    e = null,
                    f = null,
                    g = null;
                if ("" === a.trim(c)) return void this.link.$inputUrl.addClass("redactor-input-error").on("keyup", function() {
                    a(this).removeClass("redactor-input-error"), a(this).off("keyup")
                });
                if (-1 != c.search("@") && /(http|ftp|https):\/\//i.test(c) === !1) c = "mailto:" + c;
                else if (0 !== c.search("#")) {
                    "blank" == a("#redactor-link-url-open").val() && (b = "_blank"), "lightbox" == a("#redactor-link-url-open").val() && (e = a("#redactor-link-lightbox-type").val(), "iframe" == e && (f = a("#redactor-link-lightbox-iframe-width").val(), g = a("#redactor-link-lightbox-iframe-height").val()));
                    var h = "((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}",
                        i = new RegExp("^(http|ftp|https)://" + h, "i"),
                        j = new RegExp("^" + h, "i"),
                        k = new RegExp(".(html|php)$", "i"); - 1 == c.search(i) && -1 == c.search(k) && 0 === c.search(j) && this.opts.linkProtocol && (c = this.opts.linkProtocol + "://" + c)
                }
                this.link.set(d, c, b, e, f, g), this.modal.close()
            },
            set: function(b, c, d, e, f, g) {
                b = a.trim(b.replace(/<|>/g, "")), this.selection.restore();
                var h = this.selection.getBlocks();
                if ("" !== b || "" !== c) {
                    if ("" === b && "" !== c && (b = c), this.link.$node) {
                        this.buffer.set();
                        var i = this.link.$node,
                            j = i.children();
                        if (j.length > 0) {
                            for (; j.length;) j = j.children();
                            j = j.end()
                        } else j = i;
                        i.attr("href", c), j.text(b), i.removeAttr("data-concrete5-link-lightbox"), i.removeAttr("data-concrete5-link-lightbox-width"), i.removeAttr("data-concrete5-link-lightbox-height"), "" !== d ? i.attr("target", d) : (i.removeAttr("target"), e && (i.attr("data-concrete5-link-lightbox", e), "iframe" == e && f && g && (i.attr("data-concrete5-link-lightbox-width", f), i.attr("data-concrete5-link-lightbox-height", g)))), this.selection.selectElement(i), this.code.sync()
                    } else {
                        if (this.utils.browser("mozilla") && "" === this.link.text) {
                            var k = a("<a />").attr("href", c).text(b);
                            "" !== d && k.attr("target", d), this.insert.node(k), this.selection.selectElement(k)
                        } else {
                            var k;
                            this.utils.browser("msie") ? (k = a('<a href="' + c + '">').text(b), "" !== d && k.attr("target", d), k = a(this.insert.node(k)), this.selection.getText().match(/\s$/) && k.after(" "), this.selection.selectElement(k)) : (document.execCommand("createLink", !1, c), k = a(this.selection.getCurrent()).closest("a", this.$editor[0]), this.utils.browser("mozilla") && (k = a('a[_moz_dirty=""]')), "" !== d && k.attr("target", d), k.removeAttr("style").removeAttr("_moz_dirty"), this.selection.getText().match(/\s$/) && k.after(" "), ("" !== this.link.text || this.link.text != b) && (!this.opts.linebreaks && h && h.length <= 1 && k.text(b), this.selection.selectElement(k)))
                        }
                        e && (k.attr("data-concrete5-link-lightbox", e), "iframe" == e && f && g && (k.attr("data-concrete5-link-lightbox-width", f), k.attr("data-concrete5-link-lightbox-height", g))), this.code.sync(), this.core.setCallback("insertedLink", k)
                    }
                    setTimeout(a.proxy(function() {
                        this.observe.links()
                    }, this), 5)
                }
            },
            unlink: function(b) {
                "undefined" != typeof b && b.preventDefault && b.preventDefault();
                var c = this.selection.getNodes();
                if (c) {
                    this.buffer.set();
                    for (var d = c.length, e = [], f = 0; d > f; f++) {
                        "A" === c[f].tagName && e.push(c[f]);
                        var g = a(c[f]).closest("a", this.$editor[0]);
                        g.replaceWith(g.contents())
                    }
                    this.core.setCallback("deletedLink", e), a(".redactor-link-tooltip").remove(), this.code.sync()
                }
            },
            toggleClass: function(a) {
                this.link.setClass(a, "toggleClass")
            },
            addClass: function(a) {
                this.link.setClass(a, "addClass")
            },
            removeClass: function(a) {
                this.link.setClass(a, "removeClass")
            },
            setClass: function(b, c) {
                var d = this.selection.getInlinesTags(["a"]);
                d !== !1 && a.each(d, function() {
                    a(this)[c](b)
                })
            }
        }
    }, linkify: function() {
        return {
            isKey: function(a) {
                return a == this.keyCode.ENTER || a == this.keyCode.SPACE
            },
            isEnabled: function() {
                return this.opts.convertLinks && (this.opts.convertUrlLinks || this.opts.convertImageLinks || this.opts.convertVideoLinks) && !this.utils.isCurrentOrParent("PRE")
            },
            format: function() {
                var b = this.linkify,
                    c = this.opts;
                this.$editor.find(":not(iframe,img,a,pre)").addBack().contents().filter(function() {
                    return 3 === this.nodeType && "" != a.trim(this.nodeValue) && !a(this).parent().is("pre") && (this.nodeValue.match(c.linkify.regexps.youtube) || this.nodeValue.match(c.linkify.regexps.vimeo) || this.nodeValue.match(c.linkify.regexps.image) || this.nodeValue.match(c.linkify.regexps.url))
                }).each(function() {
                    var d = a(this).text(),
                        e = d;
                    c.convertVideoLinks && (e.match(c.linkify.regexps.youtube) || e.match(c.linkify.regexps.vimeo)) ? e = b.convertVideoLinks(e) : c.convertImageLinks && e.match(c.linkify.regexps.image) ? e = b.convertImages(e) : c.convertUrlLinks && (e = b.convertLinks(e)), a(this).before(d.replace(d, e)).remove()
                });
                var d = this.$editor.find(".redactor-linkify-object").each(function() {
                    var b = a(this);
                    return b.removeClass("redactor-linkify-object"), "" === b.attr("class") && b.removeAttr("class"), b[0]
                });
                this.core.setCallback("linkify", d), this.code.sync()
            },
            convertVideoLinks: function(a) {
                var b = '<iframe class="redactor-linkify-object" width="500" height="281" src="',
                    c = '" frameborder="0" allowfullscreen></iframe>';
                return a.match(this.opts.linkify.regexps.youtube) && (a = a.replace(this.opts.linkify.regexps.youtube, b + "//www.youtube.com/embed/$1" + c)), a.match(this.opts.linkify.regexps.vimeo) && (a = a.replace(this.opts.linkify.regexps.vimeo, b + "//player.vimeo.com/video/$2" + c)), a
            },
            convertImages: function(a) {
                var b = a.match(this.opts.linkify.regexps.image);
                return b && (a = a.replace(a, '<img src="' + b + '" class="redactor-linkify-object" />'), this.opts.linebreaks && (this.utils.isEmpty(this.code.get()) || (a = "<br>" + a)), a += "<br>"), a
            },
            convertLinks: function(b) {
                var c = b.match(this.opts.linkify.regexps.url);
                if (c) {
                    c = a.grep(c, function(b, d) {
                        return a.inArray(b, c) === d
                    });
                    for (var d = c.length, e = 0; d > e; e++) {
                        var f = c[e],
                            g = f,
                            h = this.opts.linkProtocol + "://";
                        null !== f.match(/(https?|ftp):\/\//i) && (h = ""), g.length > this.opts.linkSize && (g = g.substring(0, this.opts.linkSize) + "..."), g = decodeURIComponent(g);
                        var i = "\\b"; - 1 != a.inArray(f.slice(-1), ["/", "&", "="]) && (i = "");
                        var j = new RegExp("(" + f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + i + ")", "g");
                        b = b.replace(j, '<a href="' + h + a.trim(f) + '" class="redactor-linkify-object">' + a.trim(g) + "</a>")
                    }
                }
                return b
            }
        }
    }, list: function() {
        return {
            toggle: function(b) {
                this.placeholder.remove(), this.utils.browser("msie") || this.$editor.focus(), this.buffer.set(), this.selection.save();
                var c = this.selection.getParent(),
                    d = a(c).closest("ol, ul", this.$editor[0]);
                this.utils.isRedactorParent(d) || 0 === d.length || (d = !1);
                var e, f, g = !1;
                if (d && d.length) {
                    g = !0;
                    var h = d[0].tagName;
                    e = "orderedlist" === b && "UL" === h, f = "unorderedlist" === b && "OL" === h
                }
                e ? this.utils.replaceToTag(d, "ol") : f ? this.utils.replaceToTag(d, "ul") : g ? this.list.remove(b, d) : this.list.insert(b), this.selection.restore(), this.code.sync()
            },
            insert: function(b) {
                var c = this.selection.getCurrent(),
                    d = a(c).closest("td, th", this.$editor[0]);
                this.utils.browser("msie") && this.opts.linebreaks ? this.list.insertInIe(b) : document.execCommand("insert" + b);
                var e = this.selection.getParent(),
                    f = a(e).closest("ol, ul", this.$editor[0]);
                if (0 !== d.length) {
                    var g = d.clone();
                    d.after(g).remove("")
                }
                if (this.utils.isEmpty(f.find("li").text())) {
                    var h = f.children("li");
                    h.find("br").remove(), h.append(this.selection.getMarkerAsHtml()), this.opts.linebreaks && this.utils.browser("mozilla") && 2 == h.size() && this.utils.isEmpty(h.eq(1).text()) && h.eq(1).remove()
                }
                if (f.length) {
                    var i = f.parent();
                    this.utils.isRedactorParent(i) && "LI" != i[0].tagName && this.utils.isBlock(i[0]) && i.replaceWith(i.contents())
                }
                this.utils.browser("msie") || this.$editor.focus(), this.clean.clearUnverified()
            },
            insertInIe: function(b) {
                var c = this.selection.wrap("div"),
                    d = a(c).html(),
                    e = a("orderedlist" == b ? "<ol>" : "<ul>"),
                    f = a("<li>");
                if ("" === a.trim(d)) f.append(this.selection.getMarkerAsHtml()), e.append(f), this.$editor.find("#selection-marker-1").replaceWith(e);
                else {
                    var g = d.split(/<br\s?\/?>/gi);
                    if (g)
                        for (var h = 0; h < g.length; h++) "" !== a.trim(g[h]) && e.append(a("<li>").html(g[h]));
                    else f.append(d), e.append(f);
                    a(c).replaceWith(e)
                }
            },
            remove: function(b, c) {
                a.inArray("ul", this.selection.getBlocks()) && (b = "unorderedlist"), document.execCommand("insert" + b);
                var d = a(this.selection.getCurrent());
                this.indent.fixEmptyIndent(), this.opts.linebreaks || 0 !== d.closest("li, th, td", this.$editor[0]).length || (document.execCommand("formatblock", !1, "p"), this.$editor.find("ul, ol, blockquote").each(a.proxy(this.utils.removeEmpty, this)));
                var e = a(this.selection.getCurrent()).closest("table", this.$editor[0]),
                    f = e.prev();
                this.opts.linebreaks || 0 === e.length || 0 === f.length || "BR" != f[0].tagName || f.remove(), this.clean.clearUnverified()
            }
        }
    }, modal: function() {
        return {
            callbacks: {},
            getLinkFields: function() {
                var a = String() + '<div class="form-group"><label class="control-label">' + this.lang.get("open_link") + '</label><select class="form-control" id="redactor-link-url-open"><option value="same">' + this.lang.get("link_same_window") + '</option><option value="blank">' + this.lang.get("link_new_tab") + '</option><option value="lightbox">' + this.lang.get("in_lightbox") + '</option></select></div><div data-field-group="lightbox" style="display: none" class="form-group"><label class="control-label">' + this.lang.get("lightbox_link_type") + '</label><select class="form-control" id="redactor-link-lightbox-type"><option value="image">' + this.lang.get("lightbox_link_type_image") + '</option><option value="iframe">' + this.lang.get("lightbox_link_type_iframe") + '</option></select></div><div data-field-group="lightbox-iframe" style="display: none"><div class="form-group"><label class="control-label">' + this.lang.get("lightbox_link_type_iframe_width") + '</label><input class="form-control" type="text" id="redactor-link-lightbox-iframe-width" /></div><div class="form-group"><label class="control-label">' + this.lang.get("lightbox_link_type_iframe_height") + '</label><input class="form-control" type="text" id="redactor-link-lightbox-iframe-height" /></div></div>';
                return a
            },
            loadTemplates: function() {
                this.opts.modal = {
                    imageEdit: String() + '<section id="redactor-modal-image-edit"><div class="form-group"><label class="control-label">' + this.lang.get("title") + '</label><input type="text" class="form-control" id="redactor-image-title" /></div><div class="form-group"><label class="control-label redactor-image-link-option">' + this.lang.get("link") + '</label><div class="input-group"><input type="text" class="form-control" id="redactor-image-link" /><a href="#" data-action="choose-link-from-sitemap" class="btn btn-default input-group-addon"><i class="fa fa-sitemap"></i></a><a href="#" data-action="choose-file-from-file-manager" class="btn btn-default input-group-addon"><i class="fa fa-file"></i></a></div></div>' + this.modal.getLinkFields() + '<div class="form-group"><label class="control-label redactor-image-position-option">' + this.lang.get("image_position") + '</label><select class="form-control redactor-image-position-option" id="redactor-image-align"><option value="none">' + this.lang.get("none") + '</option><option value="left">' + this.lang.get("left") + '</option><option value="center">' + this.lang.get("center") + '</option><option value="right">' + this.lang.get("right") + "</option></select></div></section>",
                    image: String() + '<section id="redactor-modal-image-insert"><div class="form-group"><label class="control-label">' + this.lang.get("image_web_link") + '</label><div class="input-group"><input type="text" name="redactor-image-link" id="redactor-image-link" class="form-control"  /><a href="#" data-action="choose-image-from-file-manager" class="btn btn-default input-group-addon"><i class="fa fa-search"></i></a></div></div></section>',
                    file: String() + '<section id="redactor-modal-file-insert"><div class="form-group"><label class="control-label">' + this.lang.get("file") + '</label><div class="input-group"><input type="text" name="redactor-file-link" id="redactor-file-link" class="form-control"  /><a href="#" data-action="choose-image-from-file-manager" class="btn btn-default input-group-addon"><i class="fa fa-search"></i></a></div></div><div class="form-group"><label class="control-label">' + this.lang.get("text") + '</label><input class="form-control" type="text" id="redactor-filename" /></div></section>',
                    link: String() + '<section id="redactor-modal-link-insert"><div class="form-group"><label class="control-label">' + this.lang.get("web") + '</label><div class="input-group"><input type="text" class="form-control" id="redactor-link-url" /><a href="#" data-action="choose-link-from-sitemap" class="btn btn-default input-group-addon"><i class="fa fa-sitemap"></i></a><a href="#" data-action="choose-file-from-file-manager" class="btn btn-default input-group-addon"><i class="fa fa-file"></i></a></div></div><div class="form-group"><label class="control-label">' + this.lang.get("text") + '</label><input class="form-control" type="text" id="redactor-link-url-text" /></div>' + this.modal.getLinkFields() + "</section>"
                }, a.extend(this.opts, this.opts.modal)
            },
            addCallback: function(a, b) {
                this.modal.callbacks[a] = b
            },
            createTabber: function(b) {
                this.modal.$tabber = a("<div>").attr("id", "redactor-modal-tabber"), b.prepend(this.modal.$tabber)
            },
            addTab: function(b, c, d) {
                var e = a('<a href="#" rel="tab' + b + '">').text(c);
                d && e.addClass("active");
                var f = this;
                e.on("click", function(b) {
                    b.preventDefault(), a(".redactor-tab").hide(), a(".redactor-" + a(this).attr("rel")).show(), f.modal.$tabber.find("a").removeClass("active"), a(this).addClass("active")
                }), this.modal.$tabber.append(e)
            },
            addTemplate: function(a, b) {
                this.opts.modal[a] = b
            },
            getTemplate: function(a) {
                return this.opts.modal[a]
            },
            getModal: function() {
                return this.$modalBody.find("section")
            },
            load: function(a, b, c) {
                this.modal.templateName = a, this.modal.width = c, this.modal.build(), this.modal.enableEvents(), this.modal.setTitle(b), this.modal.setDraggable(), this.modal.setContent(), "undefined" != typeof this.modal.callbacks[a] && this.modal.callbacks[a].call(this)
            },
            show: function() {
                this.utils.disableBodyScroll(), this.utils.isMobile() ? this.modal.showOnMobile() : this.modal.showOnDesktop(), this.opts.highContrast && this.$modalBox.addClass("redactor-modal-contrast"), this.$modalOverlay.show(), this.$modalBox.show(), this.$modal.attr("tabindex", "-1"), this.$modal.focus(), this.modal.setButtonsWidth(), this.utils.saveScroll(), this.utils.isMobile() || (setTimeout(a.proxy(this.modal.showOnDesktop, this), 0), a(window).on("resize.redactor-modal", a.proxy(this.modal.resize, this))), this.core.setCallback("modalOpened", this.modal.templateName, this.$modal), a(document).off("focusin.modal"), this.$modal.find("input[type=text],input[type=url],input[type=email]").on("keydown.redactor-modal", a.proxy(this.modal.setEnter, this))
            },
            showOnDesktop: function() {
                var b = this.$modal.outerHeight(),
                    c = a(window).height(),
                    d = a(window).width();
                return this.modal.width > d ? void this.$modal.css({
                    width: "96%",
                    marginTop: c / 2 - b / 2 + "px"
                }) : void(b > c ? this.$modal.css({
                    width: this.modal.width + "px",
                    marginTop: "20px"
                }) : this.$modal.css({
                    width: this.modal.width + "px",
                    marginTop: c / 2 - b / 2 + "px"
                }))
            },
            showOnMobile: function() {
                this.$modal.css({
                    width: "96%",
                    marginTop: "2%"
                })
            },
            resize: function() {
                this.utils.isMobile() ? this.modal.showOnMobile() : this.modal.showOnDesktop()
            },
            setTitle: function(a) {
                this.$modalHeader.html(a)
            },
            setContent: function() {
                this.$modalBody.html(this.modal.getTemplate(this.modal.templateName))
            },
            setDraggable: function() {
                "undefined" != typeof a.fn.draggable && (this.$modal.draggable({
                    handle: this.$modalHeader
                }), this.$modalHeader.css("cursor", "move"))
            },
            setEnter: function(a) {
                13 == a.which && (a.preventDefault(), this.$modal.find("button.redactor-modal-action-btn").click())
            },
            createCancelButton: function() {
                var b = a("<button>").addClass("btn btn-default redactor-modal-close-btn").html(this.lang.get("cancel"));
                b.on("click", a.proxy(this.modal.close, this)), this.$modalFooter.append(b)
            },
            createDeleteButton: function(a) {
                return this.modal.createButton(a, "danger")
            },
            createActionButton: function(a) {
                return this.modal.createButton(a, "primary")
            },
            createButton: function(b, c) {
                var d = a("<button>").addClass("btn pull-right").addClass("btn-" + c).html(b);
                return this.$modalFooter.append(d), d
            },
            setButtonsWidth: function() {
                var a = this.$modalFooter.find("button"),
                    b = a.length;
                0 !== b && 0 === b && this.$modalFooter.remove()
            },
            build: function() {
                this.modal.buildOverlay(), this.$modalBox = a('<div id="redactor-modal-box" />').hide(), this.$modal = a('<div id="redactor-modal" />'), this.$modalHeader = a("<header />"), this.$modalBox.addClass("ccm-ui"), this.$modalClose = a('<span class="ui-button-icon-primary ui-icon ui-icon-closethick" />'), this.$modalCloseWrapper = a('<span id="redactor-modal-close"><button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close" role="button"><span class="ui-button-text">close</span></button></span>'), this.$modalClose.appendTo(this.$modalCloseWrapper.find("button.ui-button")), this.$modalBody = a('<div id="redactor-modal-body" />'), this.$modalFooter = a("<footer />"), this.$modal.addClass("ccm-interaction-dialog"), this.$modal.append(this.$modalHeader), this.$modal.append(this.$modalCloseWrapper), this.$modal.append(this.$modalBody), this.$modal.append(this.$modalFooter), this.$modalBox.append(this.$modal), this.$modalBox.appendTo(document.body)
            },
            buildOverlay: function() {
                this.$modalOverlay = a('<div id="redactor-modal-overlay">').hide(), a("body").prepend(this.$modalOverlay)
            },
            enableEvents: function() {
                this.$modalClose.find("button").on("click.redactor-modal", a.proxy(this.modal.close, this)), a(document).on("keyup.redactor-modal", a.proxy(this.modal.closeHandler, this)), this.$editor.on("keyup.redactor-modal", a.proxy(this.modal.closeHandler, this)), this.$modalBox.on("click.redactor-modal", a.proxy(this.modal.close, this))
            },
            disableEvents: function() {
                this.$modalClose.find("button").off("click.redactor-modal"), a(document).off("keyup.redactor-modal"), this.$editor.off("keyup.redactor-modal"), this.$modalBox.off("click.redactor-modal"), a(window).off("resize.redactor-modal")
            },
            closeHandler: function(a) {
                a.which == this.keyCode.ESC && this.modal.close(!1)
            },
            close: function(b) {
                if (b) {
                    if (!a(b.target).hasClass("redactor-modal-close-btn") && b.target != this.$modalClose[0] && b.target != this.$modalBox[0]) return;
                    b.preventDefault()
                }
                this.$modalBox && (this.modal.disableEvents(), this.utils.enableBodyScroll(), this.$modalOverlay.remove(), this.$modalBox.fadeOut("fast", a.proxy(function() {
                    this.$modalBox.remove(), setTimeout(a.proxy(this.utils.restoreScroll, this), 0), void 0 !== b && this.selection.restore(), a(document.body).css("overflow", this.modal.bodyOveflow), this.core.setCallback("modalClosed", this.modal.templateName)
                }, this)))
            }
        }
    }, observe: function() {
        return {
            load: function() {
                if ("undefined" == typeof this.opts.destroyed) {
                    if (this.utils.browser("msie")) {
                        var b = this;
                        this.$editor.find("pre, code").on("mouseover", function() {
                            b.$editor.attr("contenteditable", !1), a(this).attr("contenteditable", !0)
                        }).on("mouseout", function() {
                            b.$editor.attr("contenteditable", !0), a(this).removeAttr("contenteditable")
                        })
                    }
                    this.observe.images(), this.observe.links()
                }
            },
            toolbar: function(a, b) {
                this.observe.buttons(a, b), this.observe.dropdowns()
            },
            isCurrent: function(b, c) {
                if ("undefined" == typeof c) var c = a(this.selection.getCurrent());
                return c.is(b) || c.parents(b).length > 0
            },
            dropdowns: function() {
                var b = a(this.selection.getCurrent());
                a.each(this.opts.observe.dropdowns, a.proxy(function(a, c) {
                    var d = c.observe,
                        e = d.element,
                        f = c.item,
                        g = "undefined" != typeof d["in"] ? d["in"] : !1,
                        h = "undefined" != typeof d.out ? d.out : !1;
                    b.closest(e).size() > 0 ? this.observe.setDropdownProperties(f, g, h) : this.observe.setDropdownProperties(f, h, g)
                }, this))
            },
            setDropdownProperties: function(a, b, c) {
                if (c && "undefined" != typeof c.attr && this.observe.setDropdownAttr(a, c.attr, !0), "undefined" != typeof b.attr && this.observe.setDropdownAttr(a, b.attr), "undefined" != typeof b.title) {
                    for (var d = a; d.children().length;) d = d.children().first();
                    d.text(b.title)
                }
            },
            setDropdownAttr: function(b, c, d) {
                a.each(c, function(a, c) {
                    "class" == a ? d ? b.removeClass(c) : b.addClass(c) : d ? b.removeAttr(a) : b.attr(a, c)
                })
            },
            addDropdown: function(a, b, c) {
                "undefined" != typeof c.observe && (c.item = a, this.opts.observe.dropdowns.push(c))
            },
            buttons: function(b, c) {
                var d = this.selection.getCurrent(),
                    e = this.selection.getParent();
                if (b !== !1 ? this.button.setInactiveAll() : this.button.setInactiveAll(c), b === !1 && "html" !== c) return void(-1 != a.inArray(c, this.opts.activeButtons) && this.button.toggleActive(c));
                a.each(this.opts.activeButtonsStates, a.proxy(function(b, c) {
                    var f = a(e).closest(b, this.$editor[0]),
                        g = a(d).closest(b, this.$editor[0]);
                    (0 === f.length || this.utils.isRedactorParent(f)) && this.utils.isRedactorParent(g) && (0 !== f.length || 0 !== g.closest(b, this.$editor[0]).length) && this.button.setActive(c)
                }, this));
                var f = a(e).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
                if (this.utils.isRedactorParent(e) && f.length) {
                    var g = "" === f.css("text-align") ? "left" : f.css("text-align");
                    this.button.setActive("align" + g)
                }
            },
            addButton: function(a, b) {
                this.opts.activeButtons.push(b), this.opts.activeButtonsStates[a] = b
            },
            images: function() {
                this.$editor.find("img").each(a.proxy(function(b, c) {
                    var d = a(c);
                    d.closest("a", this.$editor[0]).on("click", function(a) {
                        a.preventDefault()
                    }), this.utils.browser("msie") && d.attr("unselectable", "on"), this.image.setEditable(d)
                }, this)), a(document).on("click.redactor-image-delete." + this.uuid, a.proxy(function(a) {
                    this.observe.image = !1, "IMG" == a.target.tagName && this.utils.isRedactorParent(a.target) && (this.observe.image = this.observe.image && this.observe.image == a.target ? !1 : a.target)
                }, this))
            },
            links: function() {
                this.opts.linkTooltip && (this.$editor.find("a").on("touchstart.redactor." + this.uuid + " click.redactor." + this.uuid, a.proxy(this.observe.showTooltip, this)), this.$editor.on("touchstart.redactor." + this.uuid + " click.redactor." + this.uuid, a.proxy(this.observe.closeTooltip, this)), a(document).on("touchstart.redactor." + this.uuid + " click.redactor." + this.uuid, a.proxy(this.observe.closeTooltip, this)))
            },
            getTooltipPosition: function(a) {
                return a.offset()
            },
            showTooltip: function(b) {
                var c = a(b.target);
                if ("IMG" != c[0].tagName && ("A" !== c[0].tagName && (c = c.closest("a", this.$editor[0])), "A" === c[0].tagName)) {
                    var d = c,
                        e = this.observe.getTooltipPosition(d),
                        f = a('<span class="redactor-link-tooltip"></span>'),
                        g = d.attr("href");
                    void 0 === g && (g = ""), g.length > 24 && (g = g.substring(0, 24) + "...");
                    var h = a('<a href="' + d.attr("href") + '" target="_blank" />').html(g).addClass("redactor-link-tooltip-action"),
                        i = a('<a href="#" />').html(this.lang.get("edit")).on("click", a.proxy(this.link.show, this)).addClass("redactor-link-tooltip-action"),
                        j = a('<a href="#" />').html(this.lang.get("unlink")).on("click", a.proxy(this.link.unlink, this)).addClass("redactor-link-tooltip-action");
                    f.append(h).append(" | ").append(i).append(" | ").append(j), f.css({
                        top: e.top + parseInt(d.css("line-height"), 10) + "px",
                        left: e.left + "px"
                    }), a(".redactor-link-tooltip").remove(), a("body").append(f)
                }
            },
            closeTooltip: function(b) {
                b = b.originalEvent || b;
                var c = b.target,
                    d = a(c).closest("a", this.$editor[0]);
                (0 === d.length || "A" !== d[0].tagName || "A" === c.tagName) && ("A" === c.tagName && this.utils.isRedactorParent(c) || a(c).hasClass("redactor-link-tooltip-action") || a(".redactor-link-tooltip").remove())
            }
        }
    }, paragraphize: function() {
        return {
            load: function(b) {
                return this.opts.linebreaks ? b : "" === b || "<p></p>" === b ? this.opts.emptyHtml : (b += "\n", this.paragraphize.safes = [], this.paragraphize.z = 0, b = b.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi, "</blockquote>"), b = this.paragraphize.getSafes(b), b = this.paragraphize.getSafesComments(b), b = this.paragraphize.replaceBreaksToNewLines(b), b = this.paragraphize.replaceBreaksToParagraphs(b), b = this.paragraphize.clear(b), b = this.paragraphize.restoreSafes(b), b = b.replace(new RegExp("<br\\s?/?>\n?<(" + this.opts.paragraphizeBlocks.join("|") + ")(.*?[^>])>", "gi"), "<p><br /></p>\n<$1$2>"), a.trim(b))
            },
            getSafes: function(b) {
                var c = a("<div />").append(b);
                return c.find("blockquote p").replaceWith(function() {
                    return a(this).append("<br />").contents()
                }), b = c.html(), c.find(this.opts.paragraphizeBlocks.join(", ")).each(a.proxy(function(a, c) {
                    this.paragraphize.z++, this.paragraphize.safes[this.paragraphize.z] = c.outerHTML, b = b.replace(c.outerHTML, "\n{replace" + this.paragraphize.z + "}")
                }, this)), b
            },
            getSafesComments: function(b) {
                var c = b.match(/<!--([\w\W]*?)-->/gi);
                return c ? (a.each(c, a.proxy(function(a, c) {
                    this.paragraphize.z++, this.paragraphize.safes[this.paragraphize.z] = c, b = b.replace(c, "\n{replace" + this.paragraphize.z + "}")
                }, this)), b) : b
            },
            restoreSafes: function(b) {
                return a.each(this.paragraphize.safes, function(a, c) {
                    c = "undefined" != typeof c ? c.replace(/\$/g, "&#36;") : c, b = b.replace("{replace" + a + "}", c)
                }), b
            },
            replaceBreaksToParagraphs: function(a) {
                var b = a.split(new RegExp("\n", "g"), -1);
                if (a = "", b)
                    for (var c = b.length, d = 0; c > d; d++) {
                        if (!b.hasOwnProperty(d)) return; - 1 == b[d].search("{replace") ? (b[d] = b[d].replace(/<p>\n\t?<\/p>/gi, ""), b[d] = b[d].replace(/<p><\/p>/gi, ""), "" !== b[d] && (a += "<p>" + b[d].replace(/^\n+|\n+$/g, "") + "</p>")) : a += b[d]
                    }
                return a
            },
            replaceBreaksToNewLines: function(a) {
                return a = a.replace(/<br \/>\s*<br \/>/gi, "\n\n"), a = a.replace(/<br\s?\/?>\n?<br\s?\/?>/gi, "\n<br /><br />"), a = a.replace(new RegExp("\r\n", "g"), "\n"),
                    a = a.replace(new RegExp("\r", "g"), "\n"), a = a.replace(new RegExp("/\n\n+/"), "g", "\n\n")
            },
            clear: function(a) {
                return a = a.replace(new RegExp("</blockquote></p>", "gi"), "</blockquote>"), a = a.replace(new RegExp("<p></blockquote>", "gi"), "</blockquote>"), a = a.replace(new RegExp("<p><blockquote>", "gi"), "<blockquote>"), a = a.replace(new RegExp("<blockquote></p>", "gi"), "<blockquote>"), a = a.replace(new RegExp("<p><p ", "gi"), "<p "), a = a.replace(new RegExp("<p><p>", "gi"), "<p>"), a = a.replace(new RegExp("</p></p>", "gi"), "</p>"), a = a.replace(new RegExp("<p>\\s?</p>", "gi"), ""), a = a.replace(new RegExp("\n</p>", "gi"), "</p>"), a = a.replace(new RegExp("<p>	?	?\n?<p>", "gi"), "<p>"), a = a.replace(new RegExp("<p>	*</p>", "gi"), "")
            }
        }
    }, paste: function() {
        return {
            init: function(b) {
                return this.opts.cleanOnPaste ? (this.rtePaste = !0, this.buffer.set(), this.selection.save(), this.utils.saveScroll(), this.paste.createPasteBox(), a(window).on("scroll.redactor-freeze", a.proxy(function() {
                    a(window).scrollTop(this.saveBodyScroll)
                }, this)), void setTimeout(a.proxy(function() {
                    var b = this.$pasteBox.html();
                    this.$pasteBox.remove(), this.selection.restore(), this.utils.restoreScroll(), this.paste.insert(b), a(window).off("scroll.redactor-freeze"), this.linkify.isEnabled() && this.linkify.format()
                }, this), 1)) : void setTimeout(a.proxy(this.code.sync, this), 1)
            },
            createPasteBox: function() {
                this.$pasteBox = a("<div>").html("").attr("contenteditable", "true").css({
                    position: "fixed",
                    width: 0,
                    top: 0,
                    left: "-9999px"
                }), this.utils.browser("msie") ? this.$box.append(this.$pasteBox) : a(".modal-body").length > 0 ? a(".modal-body").append(this.$pasteBox) : a("body").append(this.$pasteBox), this.$pasteBox.focus()
            },
            insert: function(b) {
                b = this.core.setCallback("pasteBefore", b), b = this.utils.isSelectAll() ? this.clean.onPaste(b, !1) : this.clean.onPaste(b), b = this.core.setCallback("paste", b), this.utils.isSelectAll() ? this.insert.set(b, !1) : this.insert.html(b, !1), this.utils.disableSelectAll(), this.rtePaste = !1, setTimeout(a.proxy(this.clean.clearUnverified, this), 10), setTimeout(a.proxy(function() {
                    var b = this.$editor.find("span");
                    a.each(b, function(b, c) {
                        var d = c.innerHTML.replace(/\u200B/, "");
                        "" === d && 0 === c.attributes.length && a(c).remove()
                    })
                }, this), 10)
            }
        }
    }, placeholder: function() {
        return {
            enable: function() {
                this.placeholder.is() && (this.$editor.attr("placeholder", this.$element.attr("placeholder")), this.placeholder.toggle(), this.$editor.on("keydown.redactor-placeholder", a.proxy(this.placeholder.toggle, this)))
            },
            toggle: function() {
                setTimeout(a.proxy(function() {
                    var a = this.utils.isEmpty(this.$editor.html(), !1) ? "addClass" : "removeClass";
                    this.$editor[a]("redactor-placeholder")
                }, this), 5)
            },
            remove: function() {
                this.$editor.removeClass("redactor-placeholder")
            },
            is: function() {
                return this.opts.placeholder ? this.$element.attr("placeholder", this.opts.placeholder) : !("undefined" == typeof this.$element.attr("placeholder") || "" === this.$element.attr("placeholder"))
            }
        }
    }, progress: function() {
        return {
            show: function() {
                a(document.body).append(a('<div id="redactor-progress"><span></span></div>')), a("#redactor-progress").fadeIn()
            },
            hide: function() {
                a("#redactor-progress").fadeOut(1500, function() {
                    a(this).remove()
                })
            }
        }
    }, selection: function() {
        return {
            get: function() {
                this.sel = document.getSelection(), document.getSelection && this.sel.getRangeAt && this.sel.rangeCount ? this.range = this.sel.getRangeAt(0) : this.range = document.createRange()
            },
            addRange: function() {
                try {
                    this.sel.removeAllRanges()
                } catch (a) {}
                this.sel.addRange(this.range)
            },
            getCurrent: function() {
                var a = !1;
                return this.selection.get(), this.sel && this.sel.rangeCount > 0 && (a = this.sel.getRangeAt(0).startContainer), this.utils.isRedactorParent(a)
            },
            getParent: function(b) {
                return b = b || this.selection.getCurrent(), b ? this.utils.isRedactorParent(a(b).parent()[0]) : !1
            },
            getPrev: function() {
                return window.getSelection().anchorNode.previousSibling
            },
            getNext: function() {
                return window.getSelection().anchorNode.nextSibling
            },
            getBlock: function(b) {
                for (b = b || this.selection.getCurrent(); b;) {
                    if (this.utils.isBlockTag(b.tagName)) return a(b).hasClass("redactor-editor") ? !1 : b;
                    b = b.parentNode
                }
                return !1
            },
            getInlines: function(b, c) {
                if (this.selection.get(), this.range && this.range.collapsed) return !1;
                var d = [];
                b = "undefined" == typeof b || b === !1 ? this.selection.getNodes() : b;
                var e = this.opts.inlineTags;
                if (e.push("span"), "undefined" != typeof c)
                    for (var f = 0; f < c.length; f++) e.push(c[f]);
                return a.each(b, a.proxy(function(b, c) {
                    -1 != a.inArray(c.tagName.toLowerCase(), e) && d.push(c)
                }, this)), 0 === d.length ? !1 : d
            },
            getInlinesTags: function(b) {
                if (this.selection.get(), this.range && this.range.collapsed) return !1;
                var c = [],
                    d = this.selection.getNodes();
                return a.each(d, a.proxy(function(d, e) {
                    -1 != a.inArray(e.tagName.toLowerCase(), b) && c.push(e)
                }, this)), 0 === c.length ? !1 : c
            },
            getBlocks: function(b) {
                if (this.selection.get(), this.range && this.range.collapsed) return [this.selection.getBlock()];
                var c = [];
                return b = "undefined" == typeof b ? this.selection.getNodes() : b, a.each(b, a.proxy(function(a, b) {
                    this.utils.isBlock(b) && (this.selection.lastBlock = b, c.push(b))
                }, this)), 0 === c.length ? [this.selection.getBlock()] : c
            },
            getLastBlock: function() {
                return this.selection.lastBlock
            },
            getNodes: function() {
                this.selection.get();
                var b = this.selection.getNodesMarker(1),
                    c = this.selection.getNodesMarker(2);
                if (this.range.collapsed === !1) {
                    if (window.getSelection) {
                        var d = window.getSelection();
                        if (d.rangeCount > 0) {
                            var e = d.getRangeAt(0),
                                f = e.startContainer,
                                g = e.startOffset,
                                h = e.cloneRange();
                            h.collapse(!1), h.insertNode(c), h.setStart(f, g), h.collapse(!0), h.insertNode(b), e.setStartAfter(b), e.setEndBefore(c), d.removeAllRanges(), d.addRange(e)
                        }
                    }
                } else this.selection.setNodesMarker(this.range, b, !0), c = b;
                var i = [],
                    j = 0,
                    k = this;
                this.$editor.find("*").each(function() {
                    if (this == b) {
                        var d = a(this).parent();
                        0 !== d.length && "BODY" != d[0].tagName && k.utils.isRedactorParent(d[0]) && i.push(d[0]), i.push(this), j = 1
                    } else j > 0 && (i.push(this), j += 1);
                    return this == c ? !1 : void 0
                });
                for (var l = [], m = i.length, n = 0; m > n; n++) "nodes-marker-1" != i[n].id && "nodes-marker-2" != i[n].id && l.push(i[n]);
                return this.selection.removeNodesMarkers(), l
            },
            getNodesMarker: function(b) {
                return a('<span id="nodes-marker-' + b + '" class="redactor-nodes-marker" data-verified="redactor">' + this.opts.invisibleSpace + "</span>")[0]
            },
            setNodesMarker: function(a, b, c) {
                var a = a.cloneRange();
                try {
                    a.collapse(c), a.insertNode(b)
                } catch (d) {}
            },
            removeNodesMarkers: function() {
                a(document).find("span.redactor-nodes-marker").remove(), this.$editor.find("span.redactor-nodes-marker").remove()
            },
            fromPoint: function(a, b) {
                this.caret.setOffset(a, b)
            },
            wrap: function(a) {
                if (this.selection.get(), this.range.collapsed) return !1;
                var b = document.createElement(a);
                return b.appendChild(this.range.extractContents()), this.range.insertNode(b), b
            },
            selectElement: function(a) {
                if (this.utils.browser("mozilla")) {
                    a = a[0] || a;
                    var b = document.createRange();
                    b.selectNodeContents(a)
                } else this.caret.set(a, 0, a, 1)
            },
            selectAll: function() {
                this.selection.get(), this.range.selectNodeContents(this.$editor[0]), this.selection.addRange()
            },
            remove: function() {
                this.selection.get(), this.sel.removeAllRanges()
            },
            save: function() {
                this.selection.createMarkers()
            },
            createMarkers: function() {
                this.selection.get();
                var a = this.selection.getMarker(1);
                if (this.selection.setMarker(this.range, a, !0), this.range.collapsed === !1) {
                    var b = this.selection.getMarker(2);
                    this.selection.setMarker(this.range, b, !1)
                }
                this.savedSel = this.$editor.html()
            },
            getMarker: function(b) {
                return "undefined" == typeof b && (b = 1), a('<span id="selection-marker-' + b + '" class="redactor-selection-marker"  data-verified="redactor">' + this.opts.invisibleSpace + "</span>")[0]
            },
            getMarkerAsHtml: function(a) {
                return this.utils.getOuterHtml(this.selection.getMarker(a))
            },
            setMarker: function(a, b, c) {
                a = a.cloneRange();
                try {
                    a.collapse(c), a.insertNode(b)
                } catch (d) {
                    this.focus.setStart()
                }
            },
            restore: function() {
                var a = this.$editor.find("span#selection-marker-1"),
                    b = this.$editor.find("span#selection-marker-2");
                this.utils.browser("mozilla") && this.$editor.focus(), 0 !== a.length && 0 !== b.length ? this.caret.set(a, 0, b, 0) : 0 !== a.length ? this.caret.set(a, 0, a, 0) : this.$editor.focus(), this.selection.removeMarkers(), this.savedSel = !1
            },
            removeMarkers: function() {
                this.$editor.find("span.redactor-selection-marker").each(function(b, c) {
                    var d = a(c).text().replace(/\u200B/g, "");
                    "" === d ? a(c).remove() : a(c).replaceWith(function() {
                        return a(this).contents()
                    })
                })
            },
            getText: function() {
                return this.selection.get(), this.sel.toString()
            },
            getHtml: function() {
                var a = "";
                if (this.selection.get(), this.sel.rangeCount) {
                    for (var b = document.createElement("div"), c = this.sel.rangeCount, d = 0; c > d; ++d) b.appendChild(this.sel.getRangeAt(d).cloneContents());
                    a = b.innerHTML
                }
                return this.clean.onSync(a)
            },
            replaceSelection: function(a) {
                this.selection.get(), this.range.deleteContents();
                var b = document.createElement("div");
                b.innerHTML = a;
                for (var c, d = document.createDocumentFragment(); c = b.firstChild;) d.appendChild(c);
                this.range.insertNode(d)
            },
            replaceWithHtml: function(a) {
                a = this.selection.getMarkerAsHtml(1) + a + this.selection.getMarkerAsHtml(2), this.selection.get(), window.getSelection && window.getSelection().getRangeAt ? this.selection.replaceSelection(a) : document.selection && document.selection.createRange && this.range.pasteHTML(a), this.selection.restore(), this.code.sync()
            }
        }
    }, shortcuts: function() {
        return {
            init: function(b, c) {
                return this.opts.shortcuts ? void a.each(this.opts.shortcuts, a.proxy(function(c, d) {
                    for (var e = c.split(","), f = e.length, g = 0; f > g; g++) "string" == typeof e[g] && this.shortcuts.handler(b, a.trim(e[g]), a.proxy(function() {
                        var a;
                        "-1" != d.func.search(/\./) ? (a = d.func.split("."), "undefined" != typeof this[a[0]] && this[a[0]][a[1]].apply(this, d.params)) : this[d.func].apply(this, d.params)
                    }, this))
                }, this)) : (!b.ctrlKey && !b.metaKey || 66 !== c && 73 !== c || b.preventDefault(), !1)
            },
            handler: function(b, c, d) {
                var e = {
                        8: "backspace",
                        9: "tab",
                        10: "return",
                        13: "return",
                        16: "shift",
                        17: "ctrl",
                        18: "alt",
                        19: "pause",
                        20: "capslock",
                        27: "esc",
                        32: "space",
                        33: "pageup",
                        34: "pagedown",
                        35: "end",
                        36: "home",
                        37: "left",
                        38: "up",
                        39: "right",
                        40: "down",
                        45: "insert",
                        46: "del",
                        59: ";",
                        61: "=",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9",
                        106: "*",
                        107: "+",
                        109: "-",
                        110: ".",
                        111: "/",
                        112: "f1",
                        113: "f2",
                        114: "f3",
                        115: "f4",
                        116: "f5",
                        117: "f6",
                        118: "f7",
                        119: "f8",
                        120: "f9",
                        121: "f10",
                        122: "f11",
                        123: "f12",
                        144: "numlock",
                        145: "scroll",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'"
                    },
                    f = {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ": ",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    };
                c = c.toLowerCase().split(" ");
                var g = e[b.keyCode],
                    h = String.fromCharCode(b.which).toLowerCase(),
                    i = "",
                    j = {};
                a.each(["alt", "ctrl", "meta", "shift"], function(a, c) {
                    b[c + "Key"] && g !== c && (i += c + "+")
                }), g && (j[i + g] = !0), h && (j[i + h] = !0, j[i + f[h]] = !0, "shift+" === i && (j[f[h]] = !0));
                for (var k = 0, l = c.length; l > k; k++)
                    if (j[c[k]]) return b.preventDefault(), d.apply(this, arguments)
            }
        }
    }, tabifier: function() {
        return {
            get: function(a) {
                if (!this.opts.tabifier) return a;
                var b = ["area", "body", "head", "hr", "i?frame", "link", "meta", "noscript", "style", "script", "table", "tbody", "thead", "tfoot"],
                    c = ["li", "dt", "dt", "h[1-6]", "option", "script"],
                    d = ["p", "blockquote", "div", "dl", "fieldset", "form", "frameset", "map", "ol", "pre", "select", "td", "th", "tr", "ul"];
                this.tabifier.lineBefore = new RegExp("^<(/?" + b.join("|/?") + "|" + c.join("|") + ")[ >]"), this.tabifier.lineAfter = new RegExp("^<(br|/?" + b.join("|/?") + "|/" + c.join("|/") + ")[ >]"), this.tabifier.newLevel = new RegExp("^</?(" + d.join("|") + ")[ >]");
                var e = 0,
                    f = a.length,
                    g = 0,
                    h = null,
                    i = null,
                    j = "",
                    k = "",
                    l = "";
                for (this.tabifier.cleanlevel = 0; f > e; e++) {
                    if (g = e, -1 == a.substr(e).indexOf("<")) return k += a.substr(e), this.tabifier.finish(k);
                    for (; f > g && "<" != a.charAt(g);) g++;
                    for (e != g && (l = a.substr(e, g - e), l.match(/^\s{2,}$/g) || ("\n" == k.charAt(k.length - 1) ? k += this.tabifier.getTabs() : "\n" == l.charAt(0) && (k += "\n" + this.tabifier.getTabs(), l = l.replace(/^\s+/, "")), k += l), l.match(/\n/) && (k += "\n" + this.tabifier.getTabs())), h = g; f > g && ">" != a.charAt(g);) g++;
                    j = a.substr(h, g - h), e = g;
                    var m;
                    if ("!--" == j.substr(1, 3)) {
                        if (!j.match(/--$/)) {
                            for (;
                                "-->" != a.substr(g, 3);) g++;
                            g += 2, j = a.substr(h, g - h), e = g
                        }
                        "\n" != k.charAt(k.length - 1) && (k += "\n"), k += this.tabifier.getTabs(), k += j + ">\n"
                    } else "!" == j[1] ? k = this.tabifier.placeTag(j + ">", k) : "?" == j[1] ? k += j + ">\n" : (m = j.match(/^<(script|style|pre)/i)) ? (m[1] = m[1].toLowerCase(), j = this.tabifier.cleanTag(j), k = this.tabifier.placeTag(j, k), i = String(a.substr(e + 1)).toLowerCase().indexOf("</" + m[1]), i && (l = a.substr(e + 1, i), e += i, k += l)) : (j = this.tabifier.cleanTag(j), k = this.tabifier.placeTag(j, k))
                }
                return this.tabifier.finish(k)
            },
            getTabs: function() {
                for (var a = "", b = 0; b < this.tabifier.cleanlevel; b++) a += "	";
                return a
            },
            finish: function(a) {
                return a = a.replace(/\n\s*\n/g, "\n"), a = a.replace(/^[\s\n]*/, ""), a = a.replace(/[\s\n]*$/, ""), a = a.replace(/<script(.*?)>\n<\/script>/gi, "<script$1></script>"), this.tabifier.cleanlevel = 0, a
            },
            cleanTag: function(a) {
                var b = "";
                a = a.replace(/\n/g, " "), a = a.replace(/\s{2,}/g, " "), a = a.replace(/^\s+|\s+$/g, " ");
                var c = "";
                a.match(/\/$/) && (c = "/", a = a.replace(/\/+$/, ""));
                for (var d; d = /\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(a);) d[2] ? b += d[1].toLowerCase() + "=" + d[2] : d[1] && (b += d[1].toLowerCase()), b += " ", a = a.substr(d[0].length);
                return b.replace(/\s*$/, "") + c + ">"
            },
            placeTag: function(a, b) {
                var c = a.match(this.tabifier.newLevel);
                return (a.match(this.tabifier.lineBefore) || c) && (b = b.replace(/\s*$/, ""), b += "\n"), c && "/" == a.charAt(1) && this.tabifier.cleanlevel--, "\n" == b.charAt(b.length - 1) && (b += this.tabifier.getTabs()), c && "/" != a.charAt(1) && this.tabifier.cleanlevel++, b += a, (a.match(this.tabifier.lineAfter) || a.match(this.tabifier.newLevel)) && (b = b.replace(/ *$/, "")), b
            }
        }
    }, tidy: function() {
        return {
            setupAllowed: function() {
                if (this.opts.allowedTags && (this.opts.deniedTags = !1), this.opts.allowedAttr && (this.opts.removeAttr = !1), !this.opts.linebreaks) {
                    var a = ["p", "section"];
                    this.opts.allowedTags && this.tidy.addToAllowed(a), this.opts.deniedTags && this.tidy.removeFromDenied(a)
                }
            },
            addToAllowed: function(b) {
                for (var c = b.length, d = 0; c > d; d++) - 1 == a.inArray(b[d], this.opts.allowedTags) && this.opts.allowedTags.push(b[d])
            },
            removeFromDenied: function(b) {
                for (var c = b.length, d = 0; c > d; d++) {
                    var e = a.inArray(b[d], this.opts.deniedTags); - 1 != e && this.opts.deniedTags.splice(e, 1)
                }
            },
            load: function(b, c) {
                return this.tidy.settings = {
                    deniedTags: this.opts.deniedTags,
                    allowedTags: this.opts.allowedTags,
                    removeComments: this.opts.removeComments,
                    replaceTags: this.opts.replaceTags,
                    replaceStyles: this.opts.replaceStyles,
                    removeDataAttr: this.opts.removeDataAttr,
                    removeAttr: this.opts.removeAttr,
                    allowedAttr: this.opts.allowedAttr,
                    removeWithoutAttr: this.opts.removeWithoutAttr,
                    removeEmpty: this.opts.removeEmpty
                }, a.extend(this.tidy.settings, c), b = this.tidy.removeComments(b), this.tidy.$div = a("<div />").append(b), this.tidy.replaceTags(), this.tidy.replaceStyles(), this.tidy.removeTags(), this.tidy.removeAttr(), this.tidy.removeEmpty(), this.tidy.removeParagraphsInLists(), this.tidy.removeDataAttr(), this.tidy.removeWithoutAttr(), b = this.tidy.$div.html(), this.tidy.$div.remove(), b
            },
            removeComments: function(a) {
                return this.tidy.settings.removeComments ? a.replace(/<!--[\s\S]*?-->/gi, "") : a
            },
            replaceTags: function(b) {
                if (!this.tidy.settings.replaceTags) return b;
                for (var c = this.tidy.settings.replaceTags.length, d = [], e = [], f = 0; c > f; f++) e.push(this.tidy.settings.replaceTags[f][1]), d.push(this.tidy.settings.replaceTags[f][0]);
                a.each(d, a.proxy(function(b, c) {
                    this.tidy.$div.find(c).replaceWith(function() {
                        return a("<" + e[b] + " />", {
                            html: a(this).html()
                        })
                    })
                }, this))
            },
            replaceStyles: function() {
                if (this.tidy.settings.replaceStyles) {
                    var b = this.tidy.settings.replaceStyles.length;
                    this.tidy.$div.find("span").each(a.proxy(function(c, d) {
                        for (var e = a(d), f = e.attr("style"), g = 0; b > g; g++)
                            if (f && f.match(new RegExp("^" + this.tidy.settings.replaceStyles[g][0], "i"))) {
                                var h = this.tidy.settings.replaceStyles[g][1];
                                e.replaceWith(function() {
                                    var b = document.createElement(h);
                                    return a(b).append(a(this).contents())
                                })
                            }
                    }, this))
                }
            },
            removeTags: function() {
                !this.tidy.settings.deniedTags && this.tidy.settings.allowedTags && this.tidy.$div.find("*").not(this.tidy.settings.allowedTags.join(",")).each(function(b, c) {
                    "" === c.innerHTML ? a(c).remove() : a(c).contents().unwrap()
                }), this.tidy.settings.deniedTags && this.tidy.$div.find(this.tidy.settings.deniedTags.join(",")).each(function(b, c) {
                    a(c).hasClass("redactor-script-tag") || a(c).hasClass("redactor-selection-marker") || ("" === c.innerHTML ? a(c).remove() : a(c).contents().unwrap())
                })
            },
            removeAttr: function() {
                var b;
                if (!this.tidy.settings.removeAttr && this.tidy.settings.allowedAttr) {
                    var c = [],
                        d = [];
                    b = this.tidy.settings.allowedAttr.length;
                    for (var e = 0; b > e; e++) c.push(this.tidy.settings.allowedAttr[e][0]), d.push(this.tidy.settings.allowedAttr[e][1]);
                    this.tidy.$div.find("*").each(a.proxy(function(b, e) {
                        var f = a(e),
                            g = a.inArray(f[0].tagName.toLowerCase(), c),
                            h = this.tidy.removeAttrGetRemoves(g, d, f);
                        h && a.each(h, function(a, b) {
                            f.removeAttr(b)
                        })
                    }, this))
                }
                if (this.tidy.settings.removeAttr) {
                    b = this.tidy.settings.removeAttr.length;
                    for (var e = 0; b > e; e++) {
                        var f = this.tidy.settings.removeAttr[e][1];
                        a.isArray(f) && (f = f.join(" ")), this.tidy.$div.find(this.tidy.settings.removeAttr[e][0]).removeAttr(f)
                    }
                }
            },
            removeAttrGetRemoves: function(b, c, d) {
                var e = [];
                return -1 == b ? a.each(d[0].attributes, function(a, b) {
                    e.push(b.name)
                }) : "*" == c[b] ? e = [] : a.each(d[0].attributes, function(d, f) {
                    a.isArray(c[b]) ? -1 == a.inArray(f.name, c[b]) && e.push(f.name) : c[b] != f.name && e.push(f.name)
                }), e
            },
            removeAttrs: function(b, c) {
                return c = new RegExp(c, "g"), b.each(function() {
                    for (var b = a(this), d = this.attributes.length - 1, e = d; e >= 0; e--) {
                        var f = this.attributes[e];
                        f && f.specified && f.name.search(c) >= 0 && b.removeAttr(f.name)
                    }
                })
            },
            removeEmpty: function() {
                this.tidy.settings.removeEmpty && this.tidy.$div.find(this.tidy.settings.removeEmpty.join(",")).each(function() {
                    var b = a(this),
                        c = b.text();
                    c = c.replace(/\u200B/g, ""), c = c.replace(/&nbsp;/gi, ""), c = c.replace(/\s/g, ""), "" === c && 0 === b.children().length && b.remove()
                })
            },
            removeParagraphsInLists: function() {
                this.tidy.$div.find("li p").contents().unwrap()
            },
            removeDataAttr: function() {
                if (this.tidy.settings.removeDataAttr) {
                    var b = this.tidy.settings.removeDataAttr;
                    a.isArray(this.tidy.settings.removeDataAttr) && (b = this.tidy.settings.removeDataAttr.join(",")), this.tidy.removeAttrs(this.tidy.$div.find(b), "^(data-)")
                }
            },
            removeWithoutAttr: function() {
                this.tidy.settings.removeWithoutAttr && this.tidy.$div.find(this.tidy.settings.removeWithoutAttr.join(",")).each(function() {
                    0 === this.attributes.length && a(this).contents().unwrap()
                })
            }
        }
    }, toolbar: function() {
        return {
            init: function() {
                return {
                    html: {
                        title: this.lang.get("html"),
                        func: "code.toggle"
                    },
                    formatting: {
                        title: this.lang.get("formatting"),
                        dropdown: {
                            p: {
                                title: this.lang.get("paragraph"),
                                func: "block.format"
                            },
                            blockquote: {
                                title: this.lang.get("quote"),
                                func: "block.format"
                            },
                            pre: {
                                title: this.lang.get("code"),
                                func: "block.format"
                            },
                            h1: {
                                title: this.lang.get("header1"),
                                func: "block.format"
                            },
                            h2: {
                                title: this.lang.get("header2"),
                                func: "block.format"
                            },
                            h3: {
                                title: this.lang.get("header3"),
                                func: "block.format"
                            },
                            h4: {
                                title: this.lang.get("header4"),
                                func: "block.format"
                            },
                            h5: {
                                title: this.lang.get("header5"),
                                func: "block.format"
                            },
                            h6: {
                                title: this.lang.get("header6"),
                                func: "block.format"
                            }
                        }
                    },
                    bold: {
                        title: this.lang.get("bold"),
                        func: "inline.format"
                    },
                    italic: {
                        title: this.lang.get("italic"),
                        func: "inline.format"
                    },
                    deleted: {
                        title: this.lang.get("deleted"),
                        func: "inline.format"
                    },
                    underline: {
                        title: this.lang.get("underline"),
                        func: "inline.format"
                    },
                    unorderedlist: {
                        title: "&bull; " + this.lang.get("unorderedlist"),
                        func: "list.toggle"
                    },
                    orderedlist: {
                        title: "1. " + this.lang.get("orderedlist"),
                        func: "list.toggle"
                    },
                    outdent: {
                        title: "< " + this.lang.get("outdent"),
                        func: "indent.decrease"
                    },
                    indent: {
                        title: "> " + this.lang.get("indent"),
                        func: "indent.increase"
                    },
                    image: {
                        title: this.lang.get("image"),
                        func: "image.show"
                    },
                    file: {
                        title: this.lang.get("file"),
                        func: "file.show"
                    },
                    link: {
                        title: this.lang.get("link"),
                        dropdown: {
                            link: {
                                title: this.lang.get("link_insert"),
                                func: "link.show",
                                observe: {
                                    element: "a",
                                    "in": {
                                        title: this.lang.get("link_edit")
                                    },
                                    out: {
                                        title: this.lang.get("link_insert")
                                    }
                                }
                            },
                            unlink: {
                                title: this.lang.get("unlink"),
                                func: "link.unlink",
                                observe: {
                                    element: "a",
                                    out: {
                                        attr: {
                                            "class": "redactor-dropdown-link-inactive",
                                            "aria-disabled": !0
                                        }
                                    }
                                }
                            }
                        }
                    },
                    alignment: {
                        title: this.lang.get("alignment"),
                        dropdown: {
                            left: {
                                title: this.lang.get("align_left"),
                                func: "alignment.left"
                            },
                            center: {
                                title: this.lang.get("align_center"),
                                func: "alignment.center"
                            },
                            right: {
                                title: this.lang.get("align_right"),
                                func: "alignment.right"
                            },
                            justify: {
                                title: this.lang.get("align_justify"),
                                func: "alignment.justify"
                            }
                        }
                    },
                    horizontalrule: {
                        title: this.lang.get("horizontalrule"),
                        func: "line.insert"
                    }
                }
            },
            build: function() {
                this.toolbar.hideButtons(), this.toolbar.hideButtonsOnMobile(), this.toolbar.isButtonSourceNeeded(), 0 !== this.opts.buttons.length && (this.$toolbar = this.toolbar.createContainer(), this.toolbar.setOverflow(), this.toolbar.append(), this.toolbar.setFormattingTags(), this.toolbar.loadButtons(), this.toolbar.setFixed(), this.opts.activeButtons && this.$editor.on("mouseup.redactor keyup.redactor focus.redactor", a.proxy(this.observe.toolbar, this)))
            },
            createContainer: function() {
                return a("<ul>").addClass("redactor-toolbar").attr({
                    id: "redactor-toolbar-" + this.uuid,
                    role: "toolbar"
                })
            },
            setFormattingTags: function() {
                a.each(this.opts.toolbar.formatting.dropdown, a.proxy(function(b, c) {
                    -1 == a.inArray(b, this.opts.formatting) && delete this.opts.toolbar.formatting.dropdown[b]
                }, this))
            },
            loadButtons: function() {
                a.each(this.opts.buttons, a.proxy(function(b, c) {
                    if (this.opts.toolbar[c]) {
                        var d = this.opts.toolbar[c];
                        this.$toolbar.append(a("<li>").append(this.button.build(c, d)))
                    }
                }, this))
            },
            append: function() {
                this.opts.toolbarExternal ? (this.$toolbar.addClass("redactor-toolbar-external"), a(this.opts.toolbarExternal).html(this.$toolbar)) : this.$box.prepend(this.$toolbar)
            },
            setFixed: function() {
                this.utils.isDesktop() && (this.opts.toolbarExternal || this.opts.toolbarFixed && (this.toolbar.observeScroll(), a(this.opts.toolbarFixedTarget).on("scroll.redactor." + this.uuid, a.proxy(this.toolbar.observeScroll, this))))
            },
            setOverflow: function() {
                this.utils.isMobile() && this.opts.toolbarOverflow && this.$toolbar.addClass("redactor-toolbar-overflow")
            },
            isButtonSourceNeeded: function() {
                if (!this.opts.source) {
                    var a = this.opts.buttons.indexOf("html"); - 1 !== a && this.opts.buttons.splice(a, 1)
                }
            },
            hideButtons: function() {
                0 !== this.opts.buttonsHide.length && a.each(this.opts.buttonsHide, a.proxy(function(a, b) {
                    var c = this.opts.buttons.indexOf(b);
                    this.opts.buttons.splice(c, 1)
                }, this))
            },
            hideButtonsOnMobile: function() {
                this.utils.isMobile() && 0 !== this.opts.buttonsHideOnMobile.length && a.each(this.opts.buttonsHideOnMobile, a.proxy(function(a, b) {
                    var c = this.opts.buttons.indexOf(b);
                    this.opts.buttons.splice(c, 1)
                }, this))
            },
            observeScroll: function() {
                var b = a(this.opts.toolbarFixedTarget).scrollTop(),
                    c = 1;
                this.opts.toolbarFixedTarget === document && (c = this.$box.offset().top), b + this.opts.toolbarFixedTopOffset > c ? this.toolbar.observeScrollEnable(b, c) : this.toolbar.observeScrollDisable()
            },
            observeScrollEnable: function(b, c) {
                var d = this.opts.toolbarFixedTopOffset + b - c,
                    e = 0,
                    f = c + this.$box.height() - 32,
                    g = this.$box.innerWidth();
                this.$toolbar.addClass("toolbar-fixed-box"), this.$toolbar.css({
                    position: "absolute",
                    width: g,
                    top: d + "px",
                    left: e
                }), b > f && a(".redactor-dropdown-" + this.uuid + ":visible").hide(), this.toolbar.setDropdownsFixed(), this.$toolbar.css("visibility", f > b ? "visible" : "hidden")
            },
            observeScrollDisable: function() {
                this.$toolbar.css({
                    position: "relative",
                    width: "auto",
                    top: 0,
                    left: 0,
                    visibility: "visible"
                }), this.toolbar.unsetDropdownsFixed(), this.$toolbar.removeClass("toolbar-fixed-box")
            },
            setDropdownsFixed: function() {
                var b = this.$toolbar.innerHeight() + this.opts.toolbarFixedTopOffset,
                    c = "fixed";
                this.opts.toolbarFixedTarget !== document && (b = this.$toolbar.innerHeight() + this.$toolbar.offset().top + this.opts.toolbarFixedTopOffset, c = "absolute"), a(".redactor-dropdown-" + this.uuid).each(function() {
                    a(this).css({
                        position: c,
                        top: b + "px"
                    })
                })
            },
            unsetDropdownsFixed: function() {
                var b = this.$toolbar.innerHeight() + this.$toolbar.offset().top;
                a(".redactor-dropdown-" + this.uuid).each(function() {
                    a(this).css({
                        position: "absolute",
                        top: b + "px"
                    })
                })
            }
        }
    }, upload: function() {
        return {
            init: function(b, c, d) {
                this.upload.direct = !1, this.upload.callback = d, this.upload.url = c, this.upload.$el = a(b), this.upload.$droparea = a('<div id="redactor-droparea" />'), this.upload.$placeholdler = a('<div id="redactor-droparea-placeholder" />').text(this.lang.get("upload_label")), this.upload.$input = a('<input type="file" name="file" />'), this.upload.$placeholdler.append(this.upload.$input), this.upload.$droparea.append(this.upload.$placeholdler), this.upload.$el.append(this.upload.$droparea), this.upload.$droparea.off("redactor.upload"), this.upload.$input.off("redactor.upload"), this.upload.$droparea.on("dragover.redactor.upload", a.proxy(this.upload.onDrag, this)), this.upload.$droparea.on("dragleave.redactor.upload", a.proxy(this.upload.onDragLeave, this)), this.upload.$input.on("change.redactor.upload", a.proxy(function(a) {
                    a = a.originalEvent || a, this.upload.traverseFile(this.upload.$input[0].files[0], a)
                }, this)), this.upload.$droparea.on("drop.redactor.upload", a.proxy(function(a) {
                    a.preventDefault(), this.upload.$droparea.removeClass("drag-hover").addClass("drag-drop"), this.upload.onDrop(a)
                }, this))
            },
            directUpload: function(a, b) {
                this.upload.direct = !0, this.upload.traverseFile(a, b)
            },
            onDrop: function(a) {
                a = a.originalEvent || a;
                var b = a.dataTransfer.files;
                this.upload.traverseFile(b[0], a)
            },
            traverseFile: function(a, b) {
                if (this.opts.s3) return this.upload.setConfig(a), void this.upload.s3uploadFile(a);
                var c = window.FormData ? new FormData : null;
                if (window.FormData) {
                    this.upload.setConfig(a);
                    var d = "image" == this.upload.type ? this.opts.imageUploadParam : this.opts.fileUploadParam;
                    c.append(d, a)
                }
                this.progress.show(), this.core.setCallback("uploadStart", b, c), this.upload.sendData(c, b)
            },
            setConfig: function(a) {
                this.upload.getType(a), this.upload.direct && (this.upload.url = "image" == this.upload.type ? this.opts.imageUpload : this.opts.fileUpload, this.upload.callback = "image" == this.upload.type ? this.image.insert : this.file.insert)
            },
            getType: function(a) {
                this.upload.type = "image", -1 == this.opts.imageTypes.indexOf(a.type) && (this.upload.type = "file")
            },
            getHiddenFields: function(b, c) {
                return b === !1 || "object" != typeof b ? c : (a.each(b, a.proxy(function(b, d) {
                    null !== d && 0 === d.toString().indexOf("#") && (d = a(d).val()), c.append(b, d)
                }, this)), c)
            },
            sendData: function(b, c) {
                "image" == this.upload.type ? (b = this.upload.getHiddenFields(this.opts.uploadImageFields, b), b = this.upload.getHiddenFields(this.upload.imageFields, b)) : (b = this.upload.getHiddenFields(this.opts.uploadFileFields, b), b = this.upload.getHiddenFields(this.upload.fileFields, b));
                var d = new XMLHttpRequest;
                d.open("POST", this.upload.url), d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.onreadystatechange = a.proxy(function() {
                    if (4 == d.readyState) {
                        var b = d.responseText;
                        b = b.replace(/^\[/, ""), b = b.replace(/\]$/, "");
                        var e;
                        try {
                            e = "string" == typeof b ? a.parseJSON(b) : b
                        } catch (f) {
                            e = {
                                error: !0
                            }
                        }
                        this.progress.hide(), this.upload.direct || this.upload.$droparea.removeClass("drag-drop"), this.upload.callback(e, this.upload.direct, c)
                    }
                }, this), d.send(b)
            },
            onDrag: function(a) {
                a.preventDefault(), this.upload.$droparea.addClass("drag-hover")
            },
            onDragLeave: function(a) {
                a.preventDefault(), this.upload.$droparea.removeClass("drag-hover")
            },
            clearImageFields: function() {
                this.upload.imageFields = {}
            },
            addImageFields: function(a, b) {
                this.upload.imageFields[a] = b
            },
            removeImageFields: function(a) {
                delete this.upload.imageFields[a]
            },
            clearFileFields: function() {
                this.upload.fileFields = {}
            },
            addFileFields: function(a, b) {
                this.upload.fileFields[a] = b
            },
            removeFileFields: function(a) {
                delete this.upload.fileFields[a]
            },
            s3uploadFile: function(b) {
                this.upload.s3executeOnSignedUrl(b, a.proxy(function(a) {
                    this.upload.s3uploadToS3(b, a)
                }, this))
            },
            s3executeOnSignedUrl: function(a, b) {
                var c = new XMLHttpRequest,
                    d = "?";
                "-1" != this.opts.s3.search(/\?/) && (d = "&"), c.open("GET", this.opts.s3 + d + "name=" + a.name + "&type=" + a.type, !0), c.overrideMimeType && c.overrideMimeType("text/plain; charset=x-user-defined");
                var e = this;
                c.onreadystatechange = function(a) {
                    4 == this.readyState && 200 == this.status ? (e.progress.show(), b(decodeURIComponent(this.responseText))) : 4 == this.readyState && 200 != this.status
                }, c.send()
            },
            s3createCORSRequest: function(a, b) {
                var c = new XMLHttpRequest;
                return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c
            },
            s3uploadToS3: function(b, c) {
                var d = this.upload.s3createCORSRequest("PUT", c);
                d && (d.onload = a.proxy(function() {
                    if (200 == d.status) {
                        this.progress.hide();
                        var a = c.split("?");
                        if (!a[0]) return !1;
                        this.upload.direct || this.upload.$droparea.removeClass("drag-drop");
                        var b = {
                            filelink: a[0]
                        };
                        if ("file" == this.upload.type) {
                            var e = a[0].split("/");
                            b.filename = e[e.length - 1]
                        }
                        this.upload.callback(b, this.upload.direct, !1)
                    }
                }, this), d.onerror = function() {}, d.upload.onprogress = function(a) {}, d.setRequestHeader("Content-Type", b.type), d.setRequestHeader("x-amz-acl", "public-read"), d.send(b))
            }
        }
    }, utils: function() {
        return {
            isMobile: function() {
                return /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent)
            },
            isDesktop: function() {
                return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
            },
            isString: function(a) {
                return "[object String]" == Object.prototype.toString.call(a)
            },
            isEmpty: function(b, c) {
                return b = b.replace(/[\u200B-\u200D\uFEFF]/g, ""), b = b.replace(/&nbsp;/gi, ""), b = b.replace(/<\/?br\s?\/?>/g, ""), b = b.replace(/\s/g, ""), b = b.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, ""), b = b.replace(/<iframe(.*?[^>])>$/i, "iframe"), b = b.replace(/<source(.*?[^>])>$/i, "source"), c !== !1 && (b = b.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ""), b = b.replace(/<[^\/>][^>]*><\/[^>]+>/gi, "")), b = a.trim(b), "" === b
            },
            normalize: function(a) {
                return "undefined" == typeof a ? 0 : parseInt(a.replace("px", ""), 10)
            },
            hexToRgb: function(a) {
                if ("undefined" != typeof a) {
                    if (-1 == a.search(/^#/)) return a;
                    var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    a = a.replace(b, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    });
                    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                    return "rgb(" + parseInt(c[1], 16) + ", " + parseInt(c[2], 16) + ", " + parseInt(c[3], 16) + ")"
                }
            },
            getOuterHtml: function(b) {
                return a("<div>").append(a(b).eq(0).clone()).html()
            },
            getAlignmentElement: function(b) {
                return -1 !== a.inArray(b.tagName, this.opts.alignmentTags) ? a(b) : a(b).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0])
            },
            removeEmptyAttr: function(b, c) {
                var d = a(b);
                return "undefined" == typeof d.attr(c) ? !0 : "" === d.attr(c) ? (d.removeAttr(c), !0) : !1
            },
            removeEmpty: function(b, c) {
                var d = a(a.parseHTML(c));
                if (d.find(".redactor-invisible-space").removeAttr("style").removeAttr("class"), 0 === d.find("hr, br, img, iframe, source").length) {
                    var e = a.trim(d.text());
                    this.utils.isEmpty(e, !1) && d.remove()
                }
            },
            saveScroll: function() {
                this.saveEditorScroll = this.$editor.scrollTop(), this.saveBodyScroll = a(window).scrollTop(), this.opts.scrollTarget && (this.saveTargetScroll = a(this.opts.scrollTarget).scrollTop())
            },
            restoreScroll: function() {
                ("undefined" != typeof this.saveScroll || "undefined" != typeof this.saveBodyScroll) && (a(window).scrollTop(this.saveBodyScroll), this.$editor.scrollTop(this.saveEditorScroll), this.opts.scrollTarget && a(this.opts.scrollTarget).scrollTop(this.saveTargetScroll))
            },
            createSpaceElement: function() {
                var a = document.createElement("span");
                return a.className = "redactor-invisible-space", a.innerHTML = this.opts.invisibleSpace, a
            },
            removeInlineTags: function(b) {
                var c = this.opts.inlineTags;
                c.push("span"), "PRE" == b.tagName && c.push("a"), a(b).find(c.join(",")).not("span.redactor-selection-marker").contents().unwrap()
            },
            replaceWithContents: function(b, c) {
                var d = this;
                return a(b).replaceWith(function() {
                    return c === !0 && d.utils.removeInlineTags(this), a(this).contents()
                }), a(b)
            },
            replaceToTag: function(b, c, d) {
                var e, f = this;
                return a(b).replaceWith(function() {
                    e = a("<" + c + " />").append(a(this).contents());
                    for (var b = 0; b < this.attributes.length; b++) e.attr(this.attributes[b].name, this.attributes[b].value);
                    return d === !0 && f.utils.removeInlineTags(e), e
                }), e
            },
            isStartOfElement: function() {
                var a = this.selection.getBlock();
                if (!a) return !1;
                var b = this.caret.getOffsetOfElement(a);
                return 0 === b ? !0 : !1
            },
            isEndOfElement: function(b) {
                if ("undefined" == typeof b) {
                    var b = this.selection.getBlock();
                    if (!b) return !1
                }
                var c = this.caret.getOffsetOfElement(b),
                    d = a.trim(a(b).text()).replace(/\n\r\n/g, "");
                return c == d.length ? !0 : !1
            },
            isEndOfEditor: function() {
                var b = this.$editor[0],
                    c = this.caret.getOffsetOfElement(b),
                    d = a.trim(a(b).html().replace(/(<([^>]+)>)/gi, ""));
                return c == d.length ? !0 : !1
            },
            isBlock: function(a) {
                return a = a[0] || a, a && this.utils.isBlockTag(a.tagName)
            },
            isBlockTag: function(a) {
                return "undefined" == typeof a ? !1 : this.reIsBlock.test(a)
            },
            isTag: function(b, c) {
                var d = a(b).closest(c, this.$editor[0]);
                return 1 == d.length ? d[0] : !1
            },
            isSelectAll: function() {