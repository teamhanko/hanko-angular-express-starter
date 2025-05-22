import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@teamhanko/hanko-elements/dist/elements.js
var e = {
  7: function(e3, t2, n2) {
    !function(e4, t3, n3) {
      var o2 = function() {
        return o2 = Object.assign || function(e5) {
          for (var t4, n4 = 1, o3 = arguments.length; n4 < o3; n4++) for (var a3 in t4 = arguments[n4]) Object.prototype.hasOwnProperty.call(t4, a3) && (e5[a3] = t4[a3]);
          return e5;
        }, o2.apply(this, arguments);
      };
      function a2(e5, t4) {
        var n4 = "function" == typeof Symbol && e5[Symbol.iterator];
        if (!n4) return e5;
        var o3, a3, i3 = n4.call(e5), r3 = [];
        try {
          for (; (void 0 === t4 || t4-- > 0) && !(o3 = i3.next()).done; ) r3.push(o3.value);
        } catch (e6) {
          a3 = {
            error: e6
          };
        } finally {
          try {
            o3 && !o3.done && (n4 = i3.return) && n4.call(i3);
          } finally {
            if (a3) throw a3.error;
          }
        }
        return r3;
      }
      function i2(e5, t4) {
        return [e5, !e5 || e5.endsWith("/") ? "" : "/", t4, ".json"].join("");
      }
      function r2(e5, t4) {
        var n4 = e5;
        return t4 && Object.keys(t4).forEach(function(e6) {
          var o3 = t4[e6], a3 = new RegExp("{".concat(e6, "}"), "gm");
          n4 = n4.replace(a3, o3.toString());
        }), n4;
      }
      function s2(e5, t4, n4) {
        var o3 = e5[t4];
        if (!o3) return n4;
        var a3 = n4.split("."), i3 = "";
        do {
          var r3 = o3[i3 += a3.shift()];
          void 0 === r3 || "object" != typeof r3 && a3.length ? a3.length ? i3 += "." : o3 = n4 : (o3 = r3, i3 = "");
        } while (a3.length);
        return o3;
      }
      var c2 = {}, l2 = {
        root: "",
        lang: "en",
        fallbackLang: "en"
      }, d2 = t3.createContext(null);
      e4.TranslateContext = d2, e4.TranslateProvider = function(e5) {
        var u2 = function(e6, t4) {
          e6 = Object.assign({}, l2, e6), c2 = t4 || c2;
          var d3 = a2(n3.useState(e6.lang), 2), u3 = d3[0], h3 = d3[1], p3 = a2(n3.useState(c2), 2), f3 = p3[0], _3 = p3[1], v2 = a2(n3.useState(false), 2), m2 = v2[0], g2 = v2[1], b2 = function(t5) {
            if (!f3.hasOwnProperty(t5)) {
              g2(false);
              var n4 = i2(e6.root, t5);
              fetch(n4).then(function(e7) {
                return e7.json();
              }).then(function(e7) {
                c2[t5] = e7, _3(o2({}, c2)), g2(true);
              }).catch(function(e7) {
                console.log("Aww, snap.", e7), _3(o2({}, c2)), g2(true);
              });
            }
          };
          return n3.useEffect(function() {
            b2(e6.fallbackLang), b2(u3);
          }, [u3]), {
            lang: u3,
            setLang: h3,
            t: function(t5, n4) {
              if (!f3.hasOwnProperty(u3)) return t5;
              var o3 = s2(f3, u3, t5);
              return o3 === t5 && u3 !== e6.fallbackLang && (o3 = s2(f3, e6.fallbackLang, t5)), r2(o3, n4);
            },
            isReady: m2
          };
        }({
          root: e5.root || "assets",
          lang: e5.lang || "en",
          fallbackLang: e5.fallbackLang || "en"
        }, e5.translations), h2 = u2.t, p2 = u2.setLang, f2 = u2.lang, _2 = u2.isReady;
        return t3.h(d2.Provider, {
          value: {
            t: h2,
            setLang: p2,
            lang: f2,
            isReady: _2
          }
        }, e5.children);
      }, e4.format = r2, e4.getResourceUrl = i2, e4.getValue = s2, Object.defineProperty(e4, "__esModule", {
        value: true
      });
    }(t2, n2(616), n2(78));
  },
  633: (e3, t2) => {
    var n2;
    !function() {
      var o2 = {}.hasOwnProperty;
      function a2() {
        for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          if (n3) {
            var i2 = typeof n3;
            if ("string" === i2 || "number" === i2) e4.push(n3);
            else if (Array.isArray(n3)) {
              if (n3.length) {
                var r2 = a2.apply(null, n3);
                r2 && e4.push(r2);
              }
            } else if ("object" === i2) {
              if (n3.toString !== Object.prototype.toString && !n3.toString.toString().includes("[native code]")) {
                e4.push(n3.toString());
                continue;
              }
              for (var s2 in n3) o2.call(n3, s2) && n3[s2] && e4.push(s2);
            }
          }
        }
        return e4.join(" ");
      }
      e3.exports ? (a2.default = a2, e3.exports = a2) : void 0 === (n2 = function() {
        return a2;
      }.apply(t2, [])) || (e3.exports = n2);
    }();
  },
  21: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, '.hanko_accordion{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);width:100%;overflow:hidden}.hanko_accordion .hanko_accordionItem{color:var(--color, #333333);margin:.25rem 0;overflow:hidden}.hanko_accordion .hanko_accordionItem.hanko_dropdown{margin:0}.hanko_accordion .hanko_accordionItem .hanko_label{border-radius:var(--border-radius, 8px);border-style:none;height:var(--item-height, 42px);background:var(--background-color, white);box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;margin:0;cursor:pointer;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText .hanko_description{color:var(--color-shade-1, #8f9095)}.hanko_accordion .hanko_accordionItem .hanko_label.hanko_dropdown{margin:0;color:var(--link-color, #506cf0);justify-content:flex-start}.hanko_accordion .hanko_accordionItem .hanko_label:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb)}.hanko_accordion .hanko_accordionItem .hanko_label:hover .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_label:hover.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_label:not(.hanko_dropdown)::after{content:"❯";width:1rem;text-align:center;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionInput{position:absolute;opacity:0;z-index:-1}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label:not(.hanko_dropdown)::after{transform:rotate(90deg)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label~.hanko_accordionContent{margin:.25rem 1rem;opacity:1;max-height:100vh}.hanko_accordion .hanko_accordionItem .hanko_accordionContent{max-height:0;margin:0 1rem;opacity:0;overflow:hidden;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionContent.hanko_dropdownContent{border-style:none}', ""]), r2.locals = {
      accordion: "hanko_accordion",
      accordionItem: "hanko_accordionItem",
      dropdown: "hanko_dropdown",
      label: "hanko_label",
      labelText: "hanko_labelText",
      description: "hanko_description",
      accordionInput: "hanko_accordionInput",
      accordionContent: "hanko_accordionContent",
      dropdownContent: "hanko_dropdownContent"
    };
    const s2 = r2;
  },
  905: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_errorBox{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);color:var(--error-color, #e82020);background:var(--background-color, white);margin:var(--item-margin, 0.5rem 0);display:flex;align-items:start;box-sizing:border-box;line-height:1.5rem;padding:.25em;gap:.2em}.hanko_errorBox>span{display:inline-flex}.hanko_errorBox>span:first-child{padding:.25em 0 .25em .19em}.hanko_errorBox[hidden]{display:none}.hanko_errorMessage{color:var(--error-color, #e82020)}", ""]), r2.locals = {
      errorBox: "hanko_errorBox",
      errorMessage: "hanko_errorMessage"
    };
    const s2 = r2;
  },
  577: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, '.hanko_form{display:flex;flex-grow:1}.hanko_form .hanko_ul{flex-grow:1;margin:var(--item-margin, 0.5rem 0);padding-inline-start:0;list-style-type:none;display:flex;flex-wrap:wrap;gap:1em}.hanko_form .hanko_li{display:flex;max-width:100%;flex-grow:1;flex-basis:min-content}.hanko_form .hanko_li.hanko_maxWidth{min-width:100%}.hanko_button{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);white-space:nowrap;width:100%;min-width:var(--button-min-width, 7em);min-height:var(--item-height, 42px);outline:none;cursor:pointer;transition:.1s ease-out;flex-grow:1;flex-shrink:1;display:inline-flex}.hanko_button:disabled{cursor:default}.hanko_button.hanko_primary{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--brand-color, #506cf0);justify-content:center}.hanko_button.hanko_primary:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_primary:focus{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--color, #333333)}.hanko_button.hanko_primary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-2, #e5e6ef)}.hanko_button.hanko_secondary{color:var(--color, #333333);background:var(--background-color, white);border-color:var(--color, #333333);justify-content:flex-start}.hanko_button.hanko_secondary:hover{color:var(--color, #333333);background:var(--color-shade-2, #e5e6ef);border-color:var(--color, #333333)}.hanko_button.hanko_secondary:focus{color:var(--color, #333333);background:var(--background-color, white);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_secondary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_button.hanko_dangerous{color:var(--error-color, #e82020);background:var(--background-color, white);border-color:var(--error-color, #e82020);flex-grow:0;width:auto}.hanko_caption{flex-grow:1;flex-wrap:wrap;display:flex;justify-content:space-between;align-items:baseline}.hanko_lastUsed{color:var(--color-shade-1, #8f9095);font-size:smaller}.hanko_inputWrapper{flex-grow:1;position:relative;display:flex;min-width:var(--input-min-width, 14em);max-width:100%}.hanko_input{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);height:var(--item-height, 42px);color:var(--color, #333333);border-color:var(--color-shade-1, #8f9095);background:var(--background-color, white);padding:0 .5rem;outline:none;width:100%;box-sizing:border-box;transition:.1s ease-out}.hanko_input.hanko_error{border-color:var(--error-color, #e82020)}.hanko_input:-webkit-autofill,.hanko_input:-webkit-autofill:hover,.hanko_input:-webkit-autofill:focus{-webkit-text-fill-color:var(--color, #333333);-webkit-box-shadow:0 0 0 50px var(--background-color, white) inset}.hanko_input::-ms-reveal,.hanko_input::-ms-clear{display:none}.hanko_input::placeholder{color:var(--color-shade-1, #8f9095)}.hanko_input:focus{color:var(--color, #333333);border-color:var(--color, #333333)}.hanko_input:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_passcodeInputWrapper{flex-grow:1;min-width:var(--input-min-width, 14em);max-width:fit-content;position:relative;display:flex;justify-content:space-between}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper{flex-grow:1;margin:0 .5rem 0 0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper:last-child{margin:0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper .hanko_input{text-align:center}.hanko_checkboxWrapper{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);align-items:center;display:flex}.hanko_checkboxWrapper .hanko_label{color:inherit;padding-left:.5rem;cursor:pointer}.hanko_checkboxWrapper .hanko_label.hanko_disabled{cursor:default;color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox{border:currentColor solid 1px;border-radius:.15em;appearance:none;-webkit-appearance:none;width:1.1rem;height:1.1rem;margin:0;color:currentColor;background-color:var(--background-color, white);font:inherit;box-shadow:none;display:inline-flex;place-content:center;cursor:pointer}.hanko_checkboxWrapper .hanko_checkbox:checked{background-color:var(--color, #333333)}.hanko_checkboxWrapper .hanko_checkbox:disabled{cursor:default;background-color:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox:checked:after{content:"✓";color:var(--background-color, white);position:absolute;line-height:1.1rem}.hanko_checkboxWrapper .hanko_checkbox:disabled:after{color:var(--color-shade-1, #8f9095)}', ""]), r2.locals = {
      form: "hanko_form",
      ul: "hanko_ul",
      li: "hanko_li",
      maxWidth: "hanko_maxWidth",
      button: "hanko_button",
      primary: "hanko_primary",
      secondary: "hanko_secondary",
      dangerous: "hanko_dangerous",
      caption: "hanko_caption",
      lastUsed: "hanko_lastUsed",
      inputWrapper: "hanko_inputWrapper",
      input: "hanko_input",
      error: "hanko_error",
      passcodeInputWrapper: "hanko_passcodeInputWrapper",
      passcodeDigitWrapper: "hanko_passcodeDigitWrapper",
      checkboxWrapper: "hanko_checkboxWrapper",
      label: "hanko_label",
      disabled: "hanko_disabled",
      checkbox: "hanko_checkbox"
    };
    const s2 = r2;
  },
  619: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_headline{color:var(--color, #333333);font-family:var(--font-family, sans-serif);text-align:left;letter-spacing:0;font-style:normal;line-height:1.1}.hanko_headline.hanko_grade1{font-size:var(--headline1-font-size, 24px);font-weight:var(--headline1-font-weight, 600);margin:var(--headline1-margin, 0 0 0.5rem)}.hanko_headline.hanko_grade2{font-size:var(--headline2-font-size, 16px);font-weight:var(--headline2-font-weight, 600);margin:var(--headline2-margin, 1rem 0 0.5rem)}", ""]), r2.locals = {
      headline: "hanko_headline",
      grade1: "hanko_grade1",
      grade2: "hanko_grade2"
    };
    const s2 = r2;
  },
  697: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_icon,.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner,.hanko_exclamationMark,.hanko_checkmark{display:inline-block;fill:var(--brand-contrast-color, white);width:18px}.hanko_icon.hanko_secondary,.hanko_loadingSpinnerWrapper .hanko_secondary.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_secondary.hanko_loadingSpinner,.hanko_secondary.hanko_exclamationMark,.hanko_secondary.hanko_checkmark{fill:var(--color, #333333)}.hanko_icon.hanko_disabled,.hanko_loadingSpinnerWrapper .hanko_disabled.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_disabled.hanko_loadingSpinner,.hanko_disabled.hanko_exclamationMark,.hanko_disabled.hanko_checkmark{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark{fill:var(--brand-color, #506cf0)}.hanko_checkmark.hanko_secondary{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark.hanko_fadeOut{animation:hanko_fadeOut ease-out 1.5s forwards !important}@keyframes hanko_fadeOut{0%{opacity:1}100%{opacity:0}}.hanko_exclamationMark{fill:var(--error-color, #e82020)}.hanko_loadingSpinnerWrapperIcon{width:100%;column-gap:10px;margin-left:10px}.hanko_loadingSpinnerWrapper,.hanko_loadingSpinnerWrapperIcon{display:inline-flex;align-items:center;height:100%;margin:0 5px;justify-content:inherit;flex-wrap:inherit}.hanko_loadingSpinnerWrapper.hanko_centerContent,.hanko_centerContent.hanko_loadingSpinnerWrapperIcon{justify-content:center}.hanko_loadingSpinnerWrapper.hanko_maxWidth,.hanko_maxWidth.hanko_loadingSpinnerWrapperIcon{width:100%}.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner{fill:var(--brand-color, #506cf0);animation:hanko_spin 500ms ease-in-out infinite}.hanko_loadingSpinnerWrapper.hanko_secondary,.hanko_secondary.hanko_loadingSpinnerWrapperIcon{fill:var(--color-shade-1, #8f9095)}@keyframes hanko_spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.hanko_googleIcon.hanko_disabled{fill:var(--color-shade-1, #8f9095)}.hanko_googleIcon.hanko_blue{fill:#4285f4}.hanko_googleIcon.hanko_green{fill:#34a853}.hanko_googleIcon.hanko_yellow{fill:#fbbc05}.hanko_googleIcon.hanko_red{fill:#ea4335}.hanko_microsoftIcon.hanko_disabled{fill:var(--color-shade-1, #8f9095)}.hanko_microsoftIcon.hanko_blue{fill:#00a4ef}.hanko_microsoftIcon.hanko_green{fill:#7fba00}.hanko_microsoftIcon.hanko_yellow{fill:#ffb900}.hanko_microsoftIcon.hanko_red{fill:#f25022}.hanko_facebookIcon.hanko_outline{fill:#0866ff}.hanko_facebookIcon.hanko_disabledOutline{fill:var(--color-shade-1, #8f9095)}.hanko_facebookIcon.hanko_letter{fill:#fff}.hanko_facebookIcon.hanko_disabledLetter{fill:var(--color-shade-2, #e5e6ef)}", ""]), r2.locals = {
      icon: "hanko_icon",
      loadingSpinnerWrapper: "hanko_loadingSpinnerWrapper",
      loadingSpinner: "hanko_loadingSpinner",
      loadingSpinnerWrapperIcon: "hanko_loadingSpinnerWrapperIcon",
      exclamationMark: "hanko_exclamationMark",
      checkmark: "hanko_checkmark",
      secondary: "hanko_secondary",
      disabled: "hanko_disabled",
      fadeOut: "hanko_fadeOut",
      centerContent: "hanko_centerContent",
      maxWidth: "hanko_maxWidth",
      spin: "hanko_spin",
      googleIcon: "hanko_googleIcon",
      blue: "hanko_blue",
      green: "hanko_green",
      yellow: "hanko_yellow",
      red: "hanko_red",
      microsoftIcon: "hanko_microsoftIcon",
      facebookIcon: "hanko_facebookIcon",
      outline: "hanko_outline",
      disabledOutline: "hanko_disabledOutline",
      letter: "hanko_letter",
      disabledLetter: "hanko_disabledLetter"
    };
    const s2 = r2;
  },
  995: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_link{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--link-color, #506cf0);text-decoration:var(--link-text-decoration, none);cursor:pointer;background:none !important;border:none;padding:0 !important;transition:all .1s}.hanko_link:hover{text-decoration:var(--link-text-decoration-hover, underline)}.hanko_link:disabled{color:var(--color, #333333) !important;pointer-events:none;cursor:default}.hanko_link.hanko_danger{color:var(--error-color, #e82020)}.hanko_linkWrapper{display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;overflow:hidden}.hanko_linkWrapper.hanko_reverse{flex-direction:row-reverse}", ""]), r2.locals = {
      link: "hanko_link",
      danger: "hanko_danger",
      linkWrapper: "hanko_linkWrapper",
      reverse: "hanko_reverse"
    };
    const s2 = r2;
  },
  560: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_otpCreationDetails{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);margin:var(--item-margin, 0.5rem 0);display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:smaller}", ""]), r2.locals = {
      otpCreationDetails: "hanko_otpCreationDetails"
    };
    const s2 = r2;
  },
  489: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_paragraph{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);margin:var(--item-margin, 0.5rem 0);text-align:left;word-break:break-word}", ""]), r2.locals = {
      paragraph: "hanko_paragraph"
    };
    const s2 = r2;
  },
  111: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_spacer{height:1em}.hanko_divider{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);display:flex;visibility:var(--divider-visibility, visible);color:var(--color-shade-1, #8f9095);margin:var(--item-margin, 0.5rem 0);padding:.5em 0}.hanko_divider .hanko_line{border-bottom-style:var(--border-style, solid);border-bottom-width:var(--border-width, 1px);color:inherit;font:inherit;width:100%}.hanko_divider .hanko_text{font:inherit;color:inherit;background:var(--background-color, white);padding:var(--divider-padding, 0 42px);line-height:.1em}", ""]), r2.locals = {
      spacer: "hanko_spacer",
      divider: "hanko_divider",
      line: "hanko_line",
      text: "hanko_text"
    };
    const s2 = r2;
  },
  914: (e3, t2, n2) => {
    n2.d(t2, {
      A: () => s2
    });
    var o2 = n2(645), a2 = n2.n(o2), i2 = n2(278), r2 = n2.n(i2)()(a2());
    r2.push([e3.id, ".hanko_container{background-color:var(--background-color, white);padding:var(--container-padding, 30px);max-width:var(--container-max-width, 410px);display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:flex-start;box-sizing:border-box}.hanko_content{box-sizing:border-box;flex:0 1 auto;width:100%;height:100%}.hanko_footer{padding:.5rem 0 0;box-sizing:border-box;width:100%}.hanko_footer :nth-child(1){float:left}.hanko_footer :nth-child(2){float:right}.hanko_clipboardContainer{display:flex}.hanko_clipboardIcon{display:flex;margin:auto;cursor:pointer}", ""]), r2.locals = {
      container: "hanko_container",
      content: "hanko_content",
      footer: "hanko_footer",
      clipboardContainer: "hanko_clipboardContainer",
      clipboardIcon: "hanko_clipboardIcon"
    };
    const s2 = r2;
  },
  278: (e3) => {
    e3.exports = function(e4) {
      var t2 = [];
      return t2.toString = function() {
        return this.map(function(t3) {
          var n2 = "", o2 = void 0 !== t3[5];
          return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), o2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e4(t3), o2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
        }).join("");
      }, t2.i = function(e5, n2, o2, a2, i2) {
        "string" == typeof e5 && (e5 = [[null, e5, void 0]]);
        var r2 = {};
        if (o2) for (var s2 = 0; s2 < this.length; s2++) {
          var c2 = this[s2][0];
          null != c2 && (r2[c2] = true);
        }
        for (var l2 = 0; l2 < e5.length; l2++) {
          var d2 = [].concat(e5[l2]);
          o2 && r2[d2[0]] || (void 0 !== i2 && (void 0 === d2[5] || (d2[1] = "@layer".concat(d2[5].length > 0 ? " ".concat(d2[5]) : "", " {").concat(d2[1], "}")), d2[5] = i2), n2 && (d2[2] ? (d2[1] = "@media ".concat(d2[2], " {").concat(d2[1], "}"), d2[2] = n2) : d2[2] = n2), a2 && (d2[4] ? (d2[1] = "@supports (".concat(d2[4], ") {").concat(d2[1], "}"), d2[4] = a2) : d2[4] = "".concat(a2)), t2.push(d2));
        }
      }, t2;
    };
  },
  645: (e3) => {
    e3.exports = function(e4) {
      return e4[1];
    };
  },
  616: (e3, t2, n2) => {
    n2.r(t2), n2.d(t2, {
      Component: () => k2,
      Fragment: () => y2,
      cloneElement: () => z2,
      createContext: () => K2,
      createElement: () => m2,
      createRef: () => b2,
      h: () => m2,
      hydrate: () => R2,
      isValidElement: () => r2,
      options: () => a2,
      render: () => q2,
      toChildArray: () => I2
    });
    var o2, a2, i2, r2, s2, c2, l2, d2, u2, h2 = {}, p2 = [], f2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function _2(e4, t3) {
      for (var n3 in t3) e4[n3] = t3[n3];
      return e4;
    }
    function v2(e4) {
      var t3 = e4.parentNode;
      t3 && t3.removeChild(e4);
    }
    function m2(e4, t3, n3) {
      var a3, i3, r3, s3 = {};
      for (r3 in t3) "key" == r3 ? a3 = t3[r3] : "ref" == r3 ? i3 = t3[r3] : s3[r3] = t3[r3];
      if (arguments.length > 2 && (s3.children = arguments.length > 3 ? o2.call(arguments, 2) : n3), "function" == typeof e4 && null != e4.defaultProps) for (r3 in e4.defaultProps) void 0 === s3[r3] && (s3[r3] = e4.defaultProps[r3]);
      return g2(e4, s3, a3, i3, null);
    }
    function g2(e4, t3, n3, o3, r3) {
      var s3 = {
        type: e4,
        props: t3,
        key: n3,
        ref: o3,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r3 ? ++i2 : r3
      };
      return null == r3 && null != a2.vnode && a2.vnode(s3), s3;
    }
    function b2() {
      return {
        current: null
      };
    }
    function y2(e4) {
      return e4.children;
    }
    function k2(e4, t3) {
      this.props = e4, this.context = t3;
    }
    function w2(e4, t3) {
      if (null == t3) return e4.__ ? w2(e4.__, e4.__.__k.indexOf(e4) + 1) : null;
      for (var n3; t3 < e4.__k.length; t3++) if (null != (n3 = e4.__k[t3]) && null != n3.__e) return n3.__e;
      return "function" == typeof e4.type ? w2(e4) : null;
    }
    function S2(e4) {
      var t3, n3;
      if (null != (e4 = e4.__) && null != e4.__c) {
        for (e4.__e = e4.__c.base = null, t3 = 0; t3 < e4.__k.length; t3++) if (null != (n3 = e4.__k[t3]) && null != n3.__e) {
          e4.__e = e4.__c.base = n3.__e;
          break;
        }
        return S2(e4);
      }
    }
    function x2(e4) {
      (!e4.__d && (e4.__d = true) && s2.push(e4) && !C2.__r++ || c2 !== a2.debounceRendering) && ((c2 = a2.debounceRendering) || l2)(C2);
    }
    function C2() {
      var e4, t3, n3, o3, a3, i3, r3, c3;
      for (s2.sort(d2); e4 = s2.shift(); ) e4.__d && (t3 = s2.length, o3 = void 0, a3 = void 0, r3 = (i3 = (n3 = e4).__v).__e, (c3 = n3.__P) && (o3 = [], (a3 = _2({}, i3)).__v = i3.__v + 1, L2(c3, i3, a3, n3.__n, void 0 !== c3.ownerSVGElement, null != i3.__h ? [r3] : null, o3, null == r3 ? w2(i3) : r3, i3.__h), M2(o3, i3), i3.__e != r3 && S2(i3)), s2.length > t3 && s2.sort(d2));
      C2.__r = 0;
    }
    function A2(e4, t3, n3, o3, a3, i3, r3, s3, c3, l3) {
      var d3, u3, f3, _3, v3, m3, b3, k3 = o3 && o3.__k || p2, S3 = k3.length;
      for (n3.__k = [], d3 = 0; d3 < t3.length; d3++) if (null != (_3 = n3.__k[d3] = null == (_3 = t3[d3]) || "boolean" == typeof _3 || "function" == typeof _3 ? null : "string" == typeof _3 || "number" == typeof _3 || "bigint" == typeof _3 ? g2(null, _3, null, null, _3) : Array.isArray(_3) ? g2(y2, {
        children: _3
      }, null, null, null) : _3.__b > 0 ? g2(_3.type, _3.props, _3.key, _3.ref ? _3.ref : null, _3.__v) : _3)) {
        if (_3.__ = n3, _3.__b = n3.__b + 1, null === (f3 = k3[d3]) || f3 && _3.key == f3.key && _3.type === f3.type) k3[d3] = void 0;
        else for (u3 = 0; u3 < S3; u3++) {
          if ((f3 = k3[u3]) && _3.key == f3.key && _3.type === f3.type) {
            k3[u3] = void 0;
            break;
          }
          f3 = null;
        }
        L2(e4, _3, f3 = f3 || h2, a3, i3, r3, s3, c3, l3), v3 = _3.__e, (u3 = _3.ref) && f3.ref != u3 && (b3 || (b3 = []), f3.ref && b3.push(f3.ref, null, _3), b3.push(u3, _3.__c || v3, _3)), null != v3 ? (null == m3 && (m3 = v3), "function" == typeof _3.type && _3.__k === f3.__k ? _3.__d = c3 = O2(_3, c3, e4) : c3 = j2(e4, _3, f3, k3, v3, c3), "function" == typeof n3.type && (n3.__d = c3)) : c3 && f3.__e == c3 && c3.parentNode != e4 && (c3 = w2(f3));
      }
      for (n3.__e = m3, d3 = S3; d3--; ) null != k3[d3] && ("function" == typeof n3.type && null != k3[d3].__e && k3[d3].__e == n3.__d && (n3.__d = E2(o3).nextSibling), F2(k3[d3], k3[d3]));
      if (b3) for (d3 = 0; d3 < b3.length; d3++) W2(b3[d3], b3[++d3], b3[++d3]);
    }
    function O2(e4, t3, n3) {
      for (var o3, a3 = e4.__k, i3 = 0; a3 && i3 < a3.length; i3++) (o3 = a3[i3]) && (o3.__ = e4, t3 = "function" == typeof o3.type ? O2(o3, t3, n3) : j2(n3, o3, o3, a3, o3.__e, t3));
      return t3;
    }
    function I2(e4, t3) {
      return t3 = t3 || [], null == e4 || "boolean" == typeof e4 || (Array.isArray(e4) ? e4.some(function(e5) {
        I2(e5, t3);
      }) : t3.push(e4)), t3;
    }
    function j2(e4, t3, n3, o3, a3, i3) {
      var r3, s3, c3;
      if (void 0 !== t3.__d) r3 = t3.__d, t3.__d = void 0;
      else if (null == n3 || a3 != i3 || null == a3.parentNode) e: if (null == i3 || i3.parentNode !== e4) e4.appendChild(a3), r3 = null;
      else {
        for (s3 = i3, c3 = 0; (s3 = s3.nextSibling) && c3 < o3.length; c3 += 1) if (s3 == a3) break e;
        e4.insertBefore(a3, i3), r3 = i3;
      }
      return void 0 !== r3 ? r3 : a3.nextSibling;
    }
    function E2(e4) {
      var t3, n3, o3;
      if (null == e4.type || "string" == typeof e4.type) return e4.__e;
      if (e4.__k) {
        for (t3 = e4.__k.length - 1; t3 >= 0; t3--) if ((n3 = e4.__k[t3]) && (o3 = E2(n3))) return o3;
      }
      return null;
    }
    function P2(e4, t3, n3) {
      "-" === t3[0] ? e4.setProperty(t3, null == n3 ? "" : n3) : e4[t3] = null == n3 ? "" : "number" != typeof n3 || f2.test(t3) ? n3 : n3 + "px";
    }
    function D2(e4, t3, n3, o3, a3) {
      var i3;
      e: if ("style" === t3) {
        if ("string" == typeof n3) e4.style.cssText = n3;
        else {
          if ("string" == typeof o3 && (e4.style.cssText = o3 = ""), o3) for (t3 in o3) n3 && t3 in n3 || P2(e4.style, t3, "");
          if (n3) for (t3 in n3) o3 && n3[t3] === o3[t3] || P2(e4.style, t3, n3[t3]);
        }
      } else if ("o" === t3[0] && "n" === t3[1]) i3 = t3 !== (t3 = t3.replace(/Capture$/, "")), t3 = t3.toLowerCase() in e4 ? t3.toLowerCase().slice(2) : t3.slice(2), e4.l || (e4.l = {}), e4.l[t3 + i3] = n3, n3 ? o3 || e4.addEventListener(t3, i3 ? N2 : T2, i3) : e4.removeEventListener(t3, i3 ? N2 : T2, i3);
      else if ("dangerouslySetInnerHTML" !== t3) {
        if (a3) t3 = t3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== t3 && "height" !== t3 && "href" !== t3 && "list" !== t3 && "form" !== t3 && "tabIndex" !== t3 && "download" !== t3 && t3 in e4) try {
          e4[t3] = null == n3 ? "" : n3;
          break e;
        } catch (e5) {
        }
        "function" == typeof n3 || (null == n3 || false === n3 && -1 == t3.indexOf("-") ? e4.removeAttribute(t3) : e4.setAttribute(t3, n3));
      }
    }
    function T2(e4) {
      return this.l[e4.type + false](a2.event ? a2.event(e4) : e4);
    }
    function N2(e4) {
      return this.l[e4.type + true](a2.event ? a2.event(e4) : e4);
    }
    function L2(e4, t3, n3, o3, i3, r3, s3, c3, l3) {
      var d3, u3, h3, p3, f3, v3, m3, g3, b3, w3, S3, x3, C3, O3, I3, j3 = t3.type;
      if (void 0 !== t3.constructor) return null;
      null != n3.__h && (l3 = n3.__h, c3 = t3.__e = n3.__e, t3.__h = null, r3 = [c3]), (d3 = a2.__b) && d3(t3);
      try {
        e: if ("function" == typeof j3) {
          if (g3 = t3.props, b3 = (d3 = j3.contextType) && o3[d3.__c], w3 = d3 ? b3 ? b3.props.value : d3.__ : o3, n3.__c ? m3 = (u3 = t3.__c = n3.__c).__ = u3.__E : ("prototype" in j3 && j3.prototype.render ? t3.__c = u3 = new j3(g3, w3) : (t3.__c = u3 = new k2(g3, w3), u3.constructor = j3, u3.render = H2), b3 && b3.sub(u3), u3.props = g3, u3.state || (u3.state = {}), u3.context = w3, u3.__n = o3, h3 = u3.__d = true, u3.__h = [], u3._sb = []), null == u3.__s && (u3.__s = u3.state), null != j3.getDerivedStateFromProps && (u3.__s == u3.state && (u3.__s = _2({}, u3.__s)), _2(u3.__s, j3.getDerivedStateFromProps(g3, u3.__s))), p3 = u3.props, f3 = u3.state, u3.__v = t3, h3) null == j3.getDerivedStateFromProps && null != u3.componentWillMount && u3.componentWillMount(), null != u3.componentDidMount && u3.__h.push(u3.componentDidMount);
          else {
            if (null == j3.getDerivedStateFromProps && g3 !== p3 && null != u3.componentWillReceiveProps && u3.componentWillReceiveProps(g3, w3), !u3.__e && null != u3.shouldComponentUpdate && false === u3.shouldComponentUpdate(g3, u3.__s, w3) || t3.__v === n3.__v) {
              for (t3.__v !== n3.__v && (u3.props = g3, u3.state = u3.__s, u3.__d = false), u3.__e = false, t3.__e = n3.__e, t3.__k = n3.__k, t3.__k.forEach(function(e5) {
                e5 && (e5.__ = t3);
              }), S3 = 0; S3 < u3._sb.length; S3++) u3.__h.push(u3._sb[S3]);
              u3._sb = [], u3.__h.length && s3.push(u3);
              break e;
            }
            null != u3.componentWillUpdate && u3.componentWillUpdate(g3, u3.__s, w3), null != u3.componentDidUpdate && u3.__h.push(function() {
              u3.componentDidUpdate(p3, f3, v3);
            });
          }
          if (u3.context = w3, u3.props = g3, u3.__P = e4, x3 = a2.__r, C3 = 0, "prototype" in j3 && j3.prototype.render) {
            for (u3.state = u3.__s, u3.__d = false, x3 && x3(t3), d3 = u3.render(u3.props, u3.state, u3.context), O3 = 0; O3 < u3._sb.length; O3++) u3.__h.push(u3._sb[O3]);
            u3._sb = [];
          } else do {
            u3.__d = false, x3 && x3(t3), d3 = u3.render(u3.props, u3.state, u3.context), u3.state = u3.__s;
          } while (u3.__d && ++C3 < 25);
          u3.state = u3.__s, null != u3.getChildContext && (o3 = _2(_2({}, o3), u3.getChildContext())), h3 || null == u3.getSnapshotBeforeUpdate || (v3 = u3.getSnapshotBeforeUpdate(p3, f3)), I3 = null != d3 && d3.type === y2 && null == d3.key ? d3.props.children : d3, A2(e4, Array.isArray(I3) ? I3 : [I3], t3, n3, o3, i3, r3, s3, c3, l3), u3.base = t3.__e, t3.__h = null, u3.__h.length && s3.push(u3), m3 && (u3.__E = u3.__ = null), u3.__e = false;
        } else null == r3 && t3.__v === n3.__v ? (t3.__k = n3.__k, t3.__e = n3.__e) : t3.__e = U2(n3.__e, t3, n3, o3, i3, r3, s3, l3);
        (d3 = a2.diffed) && d3(t3);
      } catch (e5) {
        t3.__v = null, (l3 || null != r3) && (t3.__e = c3, t3.__h = !!l3, r3[r3.indexOf(c3)] = null), a2.__e(e5, t3, n3);
      }
    }
    function M2(e4, t3) {
      a2.__c && a2.__c(t3, e4), e4.some(function(t4) {
        try {
          e4 = t4.__h, t4.__h = [], e4.some(function(e5) {
            e5.call(t4);
          });
        } catch (e5) {
          a2.__e(e5, t4.__v);
        }
      });
    }
    function U2(e4, t3, n3, a3, i3, r3, s3, c3) {
      var l3, d3, u3, p3 = n3.props, f3 = t3.props, _3 = t3.type, m3 = 0;
      if ("svg" === _3 && (i3 = true), null != r3) {
        for (; m3 < r3.length; m3++) if ((l3 = r3[m3]) && "setAttribute" in l3 == !!_3 && (_3 ? l3.localName === _3 : 3 === l3.nodeType)) {
          e4 = l3, r3[m3] = null;
          break;
        }
      }
      if (null == e4) {
        if (null === _3) return document.createTextNode(f3);
        e4 = i3 ? document.createElementNS("http://www.w3.org/2000/svg", _3) : document.createElement(_3, f3.is && f3), r3 = null, c3 = false;
      }
      if (null === _3) p3 === f3 || c3 && e4.data === f3 || (e4.data = f3);
      else {
        if (r3 = r3 && o2.call(e4.childNodes), d3 = (p3 = n3.props || h2).dangerouslySetInnerHTML, u3 = f3.dangerouslySetInnerHTML, !c3) {
          if (null != r3) for (p3 = {}, m3 = 0; m3 < e4.attributes.length; m3++) p3[e4.attributes[m3].name] = e4.attributes[m3].value;
          (u3 || d3) && (u3 && (d3 && u3.__html == d3.__html || u3.__html === e4.innerHTML) || (e4.innerHTML = u3 && u3.__html || ""));
        }
        if (function(e5, t4, n4, o3, a4) {
          var i4;
          for (i4 in n4) "children" === i4 || "key" === i4 || i4 in t4 || D2(e5, i4, null, n4[i4], o3);
          for (i4 in t4) a4 && "function" != typeof t4[i4] || "children" === i4 || "key" === i4 || "value" === i4 || "checked" === i4 || n4[i4] === t4[i4] || D2(e5, i4, t4[i4], n4[i4], o3);
        }(e4, f3, p3, i3, c3), u3) t3.__k = [];
        else if (m3 = t3.props.children, A2(e4, Array.isArray(m3) ? m3 : [m3], t3, n3, a3, i3 && "foreignObject" !== _3, r3, s3, r3 ? r3[0] : n3.__k && w2(n3, 0), c3), null != r3) for (m3 = r3.length; m3--; ) null != r3[m3] && v2(r3[m3]);
        c3 || ("value" in f3 && void 0 !== (m3 = f3.value) && (m3 !== e4.value || "progress" === _3 && !m3 || "option" === _3 && m3 !== p3.value) && D2(e4, "value", m3, p3.value, false), "checked" in f3 && void 0 !== (m3 = f3.checked) && m3 !== e4.checked && D2(e4, "checked", m3, p3.checked, false));
      }
      return e4;
    }
    function W2(e4, t3, n3) {
      try {
        "function" == typeof e4 ? e4(t3) : e4.current = t3;
      } catch (e5) {
        a2.__e(e5, n3);
      }
    }
    function F2(e4, t3, n3) {
      var o3, i3;
      if (a2.unmount && a2.unmount(e4), (o3 = e4.ref) && (o3.current && o3.current !== e4.__e || W2(o3, null, t3)), null != (o3 = e4.__c)) {
        if (o3.componentWillUnmount) try {
          o3.componentWillUnmount();
        } catch (e5) {
          a2.__e(e5, t3);
        }
        o3.base = o3.__P = null, e4.__c = void 0;
      }
      if (o3 = e4.__k) for (i3 = 0; i3 < o3.length; i3++) o3[i3] && F2(o3[i3], t3, n3 || "function" != typeof e4.type);
      n3 || null == e4.__e || v2(e4.__e), e4.__ = e4.__e = e4.__d = void 0;
    }
    function H2(e4, t3, n3) {
      return this.constructor(e4, n3);
    }
    function q2(e4, t3, n3) {
      var i3, r3, s3;
      a2.__ && a2.__(e4, t3), r3 = (i3 = "function" == typeof n3) ? null : n3 && n3.__k || t3.__k, s3 = [], L2(t3, e4 = (!i3 && n3 || t3).__k = m2(y2, null, [e4]), r3 || h2, h2, void 0 !== t3.ownerSVGElement, !i3 && n3 ? [n3] : r3 ? null : t3.firstChild ? o2.call(t3.childNodes) : null, s3, !i3 && n3 ? n3 : r3 ? r3.__e : t3.firstChild, i3), M2(s3, e4);
    }
    function R2(e4, t3) {
      q2(e4, t3, R2);
    }
    function z2(e4, t3, n3) {
      var a3, i3, r3, s3 = _2({}, e4.props);
      for (r3 in t3) "key" == r3 ? a3 = t3[r3] : "ref" == r3 ? i3 = t3[r3] : s3[r3] = t3[r3];
      return arguments.length > 2 && (s3.children = arguments.length > 3 ? o2.call(arguments, 2) : n3), g2(e4.type, s3, a3 || e4.key, i3 || e4.ref, null);
    }
    function K2(e4, t3) {
      var n3 = {
        __c: t3 = "__cC" + u2++,
        __: e4,
        Consumer: function(e5, t4) {
          return e5.children(t4);
        },
        Provider: function(e5) {
          var n4, o3;
          return this.getChildContext || (n4 = [], (o3 = {})[t3] = this, this.getChildContext = function() {
            return o3;
          }, this.shouldComponentUpdate = function(e6) {
            this.props.value !== e6.value && n4.some(function(e7) {
              e7.__e = true, x2(e7);
            });
          }, this.sub = function(e6) {
            n4.push(e6);
            var t4 = e6.componentWillUnmount;
            e6.componentWillUnmount = function() {
              n4.splice(n4.indexOf(e6), 1), t4 && t4.call(e6);
            };
          }), e5.children;
        }
      };
      return n3.Provider.__ = n3.Consumer.contextType = n3;
    }
    o2 = p2.slice, a2 = {
      __e: function(e4, t3, n3, o3) {
        for (var a3, i3, r3; t3 = t3.__; ) if ((a3 = t3.__c) && !a3.__) try {
          if ((i3 = a3.constructor) && null != i3.getDerivedStateFromError && (a3.setState(i3.getDerivedStateFromError(e4)), r3 = a3.__d), null != a3.componentDidCatch && (a3.componentDidCatch(e4, o3 || {}), r3 = a3.__d), r3) return a3.__E = a3;
        } catch (t4) {
          e4 = t4;
        }
        throw e4;
      }
    }, i2 = 0, r2 = function(e4) {
      return null != e4 && void 0 === e4.constructor;
    }, k2.prototype.setState = function(e4, t3) {
      var n3;
      n3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _2({}, this.state), "function" == typeof e4 && (e4 = e4(_2({}, n3), this.props)), e4 && _2(n3, e4), null != e4 && this.__v && (t3 && this._sb.push(t3), x2(this));
    }, k2.prototype.forceUpdate = function(e4) {
      this.__v && (this.__e = true, e4 && this.__h.push(e4), x2(this));
    }, k2.prototype.render = y2, s2 = [], l2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, d2 = function(e4, t3) {
      return e4.__v.__b - t3.__v.__b;
    }, C2.__r = 0, u2 = 0;
  },
  78: (e3, t2, n2) => {
    n2.r(t2), n2.d(t2, {
      useCallback: () => x2,
      useContext: () => C2,
      useDebugValue: () => A2,
      useEffect: () => b2,
      useErrorBoundary: () => O2,
      useId: () => I2,
      useImperativeHandle: () => w2,
      useLayoutEffect: () => y2,
      useMemo: () => S2,
      useReducer: () => g2,
      useRef: () => k2,
      useState: () => m2
    });
    var o2, a2, i2, r2, s2 = n2(616), c2 = 0, l2 = [], d2 = [], u2 = s2.options.__b, h2 = s2.options.__r, p2 = s2.options.diffed, f2 = s2.options.__c, _2 = s2.options.unmount;
    function v2(e4, t3) {
      s2.options.__h && s2.options.__h(a2, e4, c2 || t3), c2 = 0;
      var n3 = a2.__H || (a2.__H = {
        __: [],
        __h: []
      });
      return e4 >= n3.__.length && n3.__.push({
        __V: d2
      }), n3.__[e4];
    }
    function m2(e4) {
      return c2 = 1, g2(L2, e4);
    }
    function g2(e4, t3, n3) {
      var i3 = v2(o2++, 2);
      if (i3.t = e4, !i3.__c && (i3.__ = [n3 ? n3(t3) : L2(void 0, t3), function(e5) {
        var t4 = i3.__N ? i3.__N[0] : i3.__[0], n4 = i3.t(t4, e5);
        t4 !== n4 && (i3.__N = [n4, i3.__[1]], i3.__c.setState({}));
      }], i3.__c = a2, !a2.u)) {
        var r3 = function(e5, t4, n4) {
          if (!i3.__c.__H) return true;
          var o3 = i3.__c.__H.__.filter(function(e6) {
            return e6.__c;
          });
          if (o3.every(function(e6) {
            return !e6.__N;
          })) return !s3 || s3.call(this, e5, t4, n4);
          var a3 = false;
          return o3.forEach(function(e6) {
            if (e6.__N) {
              var t5 = e6.__[0];
              e6.__ = e6.__N, e6.__N = void 0, t5 !== e6.__[0] && (a3 = true);
            }
          }), !(!a3 && i3.__c.props === e5) && (!s3 || s3.call(this, e5, t4, n4));
        };
        a2.u = true;
        var s3 = a2.shouldComponentUpdate, c3 = a2.componentWillUpdate;
        a2.componentWillUpdate = function(e5, t4, n4) {
          if (this.__e) {
            var o3 = s3;
            s3 = void 0, r3(e5, t4, n4), s3 = o3;
          }
          c3 && c3.call(this, e5, t4, n4);
        }, a2.shouldComponentUpdate = r3;
      }
      return i3.__N || i3.__;
    }
    function b2(e4, t3) {
      var n3 = v2(o2++, 3);
      !s2.options.__s && N2(n3.__H, t3) && (n3.__ = e4, n3.i = t3, a2.__H.__h.push(n3));
    }
    function y2(e4, t3) {
      var n3 = v2(o2++, 4);
      !s2.options.__s && N2(n3.__H, t3) && (n3.__ = e4, n3.i = t3, a2.__h.push(n3));
    }
    function k2(e4) {
      return c2 = 5, S2(function() {
        return {
          current: e4
        };
      }, []);
    }
    function w2(e4, t3, n3) {
      c2 = 6, y2(function() {
        return "function" == typeof e4 ? (e4(t3()), function() {
          return e4(null);
        }) : e4 ? (e4.current = t3(), function() {
          return e4.current = null;
        }) : void 0;
      }, null == n3 ? n3 : n3.concat(e4));
    }
    function S2(e4, t3) {
      var n3 = v2(o2++, 7);
      return N2(n3.__H, t3) ? (n3.__V = e4(), n3.i = t3, n3.__h = e4, n3.__V) : n3.__;
    }
    function x2(e4, t3) {
      return c2 = 8, S2(function() {
        return e4;
      }, t3);
    }
    function C2(e4) {
      var t3 = a2.context[e4.__c], n3 = v2(o2++, 9);
      return n3.c = e4, t3 ? (null == n3.__ && (n3.__ = true, t3.sub(a2)), t3.props.value) : e4.__;
    }
    function A2(e4, t3) {
      s2.options.useDebugValue && s2.options.useDebugValue(t3 ? t3(e4) : e4);
    }
    function O2(e4) {
      var t3 = v2(o2++, 10), n3 = m2();
      return t3.__ = e4, a2.componentDidCatch || (a2.componentDidCatch = function(e5, o3) {
        t3.__ && t3.__(e5, o3), n3[1](e5);
      }), [n3[0], function() {
        n3[1](void 0);
      }];
    }
    function I2() {
      var e4 = v2(o2++, 11);
      if (!e4.__) {
        for (var t3 = a2.__v; null !== t3 && !t3.__m && null !== t3.__; ) t3 = t3.__;
        var n3 = t3.__m || (t3.__m = [0, 0]);
        e4.__ = "P" + n3[0] + "-" + n3[1]++;
      }
      return e4.__;
    }
    function j2() {
      for (var e4; e4 = l2.shift(); ) if (e4.__P && e4.__H) try {
        e4.__H.__h.forEach(D2), e4.__H.__h.forEach(T2), e4.__H.__h = [];
      } catch (t3) {
        e4.__H.__h = [], s2.options.__e(t3, e4.__v);
      }
    }
    s2.options.__b = function(e4) {
      a2 = null, u2 && u2(e4);
    }, s2.options.__r = function(e4) {
      h2 && h2(e4), o2 = 0;
      var t3 = (a2 = e4.__c).__H;
      t3 && (i2 === a2 ? (t3.__h = [], a2.__h = [], t3.__.forEach(function(e5) {
        e5.__N && (e5.__ = e5.__N), e5.__V = d2, e5.__N = e5.i = void 0;
      })) : (t3.__h.forEach(D2), t3.__h.forEach(T2), t3.__h = [])), i2 = a2;
    }, s2.options.diffed = function(e4) {
      p2 && p2(e4);
      var t3 = e4.__c;
      t3 && t3.__H && (t3.__H.__h.length && (1 !== l2.push(t3) && r2 === s2.options.requestAnimationFrame || ((r2 = s2.options.requestAnimationFrame) || P2)(j2)), t3.__H.__.forEach(function(e5) {
        e5.i && (e5.__H = e5.i), e5.__V !== d2 && (e5.__ = e5.__V), e5.i = void 0, e5.__V = d2;
      })), i2 = a2 = null;
    }, s2.options.__c = function(e4, t3) {
      t3.some(function(e5) {
        try {
          e5.__h.forEach(D2), e5.__h = e5.__h.filter(function(e6) {
            return !e6.__ || T2(e6);
          });
        } catch (n3) {
          t3.some(function(e6) {
            e6.__h && (e6.__h = []);
          }), t3 = [], s2.options.__e(n3, e5.__v);
        }
      }), f2 && f2(e4, t3);
    }, s2.options.unmount = function(e4) {
      _2 && _2(e4);
      var t3, n3 = e4.__c;
      n3 && n3.__H && (n3.__H.__.forEach(function(e5) {
        try {
          D2(e5);
        } catch (e6) {
          t3 = e6;
        }
      }), n3.__H = void 0, t3 && s2.options.__e(t3, n3.__v));
    };
    var E2 = "function" == typeof requestAnimationFrame;
    function P2(e4) {
      var t3, n3 = function() {
        clearTimeout(o3), E2 && cancelAnimationFrame(t3), setTimeout(e4);
      }, o3 = setTimeout(n3, 100);
      E2 && (t3 = requestAnimationFrame(n3));
    }
    function D2(e4) {
      var t3 = a2, n3 = e4.__c;
      "function" == typeof n3 && (e4.__c = void 0, n3()), a2 = t3;
    }
    function T2(e4) {
      var t3 = a2;
      e4.__c = e4.__(), a2 = t3;
    }
    function N2(e4, t3) {
      return !e4 || e4.length !== t3.length || t3.some(function(t4, n3) {
        return t4 !== e4[n3];
      });
    }
    function L2(e4, t3) {
      return "function" == typeof t3 ? t3(e4) : t3;
    }
  },
  292: (e3) => {
    var t2 = [];
    function n2(e4) {
      for (var n3 = -1, o3 = 0; o3 < t2.length; o3++) if (t2[o3].identifier === e4) {
        n3 = o3;
        break;
      }
      return n3;
    }
    function o2(e4, o3) {
      for (var i2 = {}, r2 = [], s2 = 0; s2 < e4.length; s2++) {
        var c2 = e4[s2], l2 = o3.base ? c2[0] + o3.base : c2[0], d2 = i2[l2] || 0, u2 = "".concat(l2, " ").concat(d2);
        i2[l2] = d2 + 1;
        var h2 = n2(u2), p2 = {
          css: c2[1],
          media: c2[2],
          sourceMap: c2[3],
          supports: c2[4],
          layer: c2[5]
        };
        if (-1 !== h2) t2[h2].references++, t2[h2].updater(p2);
        else {
          var f2 = a2(p2, o3);
          o3.byIndex = s2, t2.splice(s2, 0, {
            identifier: u2,
            updater: f2,
            references: 1
          });
        }
        r2.push(u2);
      }
      return r2;
    }
    function a2(e4, t3) {
      var n3 = t3.domAPI(t3);
      return n3.update(e4), function(t4) {
        if (t4) {
          if (t4.css === e4.css && t4.media === e4.media && t4.sourceMap === e4.sourceMap && t4.supports === e4.supports && t4.layer === e4.layer) return;
          n3.update(e4 = t4);
        } else n3.remove();
      };
    }
    e3.exports = function(e4, a3) {
      var i2 = o2(e4 = e4 || [], a3 = a3 || {});
      return function(e5) {
        e5 = e5 || [];
        for (var r2 = 0; r2 < i2.length; r2++) {
          var s2 = n2(i2[r2]);
          t2[s2].references--;
        }
        for (var c2 = o2(e5, a3), l2 = 0; l2 < i2.length; l2++) {
          var d2 = n2(i2[l2]);
          0 === t2[d2].references && (t2[d2].updater(), t2.splice(d2, 1));
        }
        i2 = c2;
      };
    };
  },
  88: (e3) => {
    e3.exports = function(e4) {
      var t2 = document.createElement("style");
      return e4.setAttributes(t2, e4.attributes), e4.insert(t2, e4.options), t2;
    };
  },
  884: (e3, t2, n2) => {
    e3.exports = function(e4) {
      var t3 = n2.nc;
      t3 && e4.setAttribute("nonce", t3);
    };
  },
  360: (e3) => {
    var t2, n2 = (t2 = [], function(e4, n3) {
      return t2[e4] = n3, t2.filter(Boolean).join("\n");
    });
    function o2(e4, t3, o3, a3) {
      var i2;
      if (o3) i2 = "";
      else {
        i2 = "", a3.supports && (i2 += "@supports (".concat(a3.supports, ") {")), a3.media && (i2 += "@media ".concat(a3.media, " {"));
        var r2 = void 0 !== a3.layer;
        r2 && (i2 += "@layer".concat(a3.layer.length > 0 ? " ".concat(a3.layer) : "", " {")), i2 += a3.css, r2 && (i2 += "}"), a3.media && (i2 += "}"), a3.supports && (i2 += "}");
      }
      if (e4.styleSheet) e4.styleSheet.cssText = n2(t3, i2);
      else {
        var s2 = document.createTextNode(i2), c2 = e4.childNodes;
        c2[t3] && e4.removeChild(c2[t3]), c2.length ? e4.insertBefore(s2, c2[t3]) : e4.appendChild(s2);
      }
    }
    var a2 = {
      singleton: null,
      singletonCounter: 0
    };
    e3.exports = function(e4) {
      if ("undefined" == typeof document) return {
        update: function() {
        },
        remove: function() {
        }
      };
      var t3 = a2.singletonCounter++, n3 = a2.singleton || (a2.singleton = e4.insertStyleElement(e4));
      return {
        update: function(e5) {
          o2(n3, t3, false, e5);
        },
        remove: function(e5) {
          o2(n3, t3, true, e5);
        }
      };
    };
  },
  6: (e3, t2, n2) => {
    n2.d(t2, {
      en: () => o2
    });
    const o2 = {
      headlines: {
        error: "An error has occurred",
        loginEmail: "Sign in or create account",
        loginEmailNoSignup: "Sign in",
        loginFinished: "Login successful",
        loginPasscode: "Enter passcode",
        loginPassword: "Enter password",
        registerAuthenticator: "Create a passkey",
        registerConfirm: "Create account?",
        registerPassword: "Set new password",
        otpSetUp: "Set up authenticator app",
        profileEmails: "Emails",
        profilePassword: "Password",
        profilePasskeys: "Passkeys",
        isPrimaryEmail: "Primary email address",
        setPrimaryEmail: "Set primary email address",
        createEmail: "Enter a new email",
        createUsername: "Enter a new username",
        emailVerified: "Verified",
        emailUnverified: "Unverified",
        emailDelete: "Delete",
        renamePasskey: "Rename passkey",
        deletePasskey: "Delete passkey",
        lastUsedAt: "Last used at",
        createdAt: "Created at",
        connectedAccounts: "Connected accounts",
        deleteAccount: "Delete account",
        accountNotFound: "Account not found",
        signIn: "Sign in",
        signUp: "Create account",
        selectLoginMethod: "Select login method",
        setupLoginMethod: "Set up login method",
        lastUsed: "Last seen",
        ipAddress: "IP address",
        revokeSession: "Revoke session",
        profileSessions: "Sessions",
        mfaSetUp: "Set up MFA",
        securityKeySetUp: "Add security key",
        securityKeyLogin: "Security key",
        otpLogin: "Authentication code",
        renameSecurityKey: "Rename security key",
        deleteSecurityKey: "Delete security key",
        securityKeys: "Security keys",
        authenticatorApp: "Authenticator app",
        authenticatorAppAlreadySetUp: "Authenticator app is set up",
        authenticatorAppNotSetUp: "Set up authenticator app",
        trustDevice: "Trust this browser?"
      },
      texts: {
        enterPasscode: 'Enter the passcode that was sent to "{emailAddress}".',
        enterPasscodeNoEmail: "Enter the passcode that was sent to your primary email address.",
        setupPasskey: "Sign in to your account easily and securely with a passkey. Note: Your biometric data is only stored on your devices and will never be shared with anyone.",
        createAccount: 'No account exists for "{emailAddress}". Do you want to create a new account?',
        otpEnterVerificationCode: "Enter the one-time password (OTP) obtained from your authenticator app below:",
        otpScanQRCode: "Scan the QR code using your authenticator app (such as Google Authenticator or any other TOTP app). Alternatively, you can manually enter the OTP secret key into the app.",
        otpSecretKey: "OTP secret key",
        passwordFormatHint: "Must be between {minLength} and {maxLength} characters long.",
        securityKeySetUp: "Use a dedicated security key via USB, Bluetooth, or NFC, or your mobile phone. Connect or activate your security key, then click the button below and follow the prompts to complete the registration.",
        setPrimaryEmail: "Set this email address to be used for contacting you.",
        isPrimaryEmail: "This email address will be used to contact you if necessary.",
        emailVerified: "This email address has been verified.",
        emailUnverified: "This email address has not been verified.",
        emailDelete: "If you delete this email address, it can no longer be used to sign in.",
        renamePasskey: "Set a name for the passkey.",
        deletePasskey: "Delete this passkey from your account.",
        deleteAccount: "Are you sure you want to delete this account? All data will be deleted immediately and cannot be recovered.",
        noAccountExists: 'No account exists for "{emailAddress}".',
        selectLoginMethodForFutureLogins: "Select one of the following login methods to use for future logins.",
        howDoYouWantToLogin: "How do you want to login?",
        mfaSetUp: "Protect your account with Multi-Factor Authentication (MFA). MFA adds an additional step to your login process, ensuring that even if your password or email account is compromised, your account stays secure.",
        securityKeyLogin: "Connect or activate your security key, then click the button below. Once ready, use it via USB, NFC, your mobile phone. Follow the prompts to complete the login process.",
        otpLogin: "Open your authenticator app to obtain the one-time password (OTP). Enter the code in the field below to complete your login.",
        renameSecurityKey: "Set a name for the security key.",
        deleteSecurityKey: "Delete this security key from your account.",
        authenticatorAppAlreadySetUp: "Your account is secured with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",
        authenticatorAppNotSetUp: "Secure your account with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",
        trustDevice: "If you trust this browser, you won’t need to enter your OTP (One-Time-Password) or use your security key for multi-factor authentication (MFA) the next time you log in."
      },
      labels: {
        or: "or",
        no: "no",
        yes: "yes",
        email: "Email",
        continue: "Continue",
        copied: "copied",
        skip: "Skip",
        save: "Save",
        password: "Password",
        passkey: "Passkey",
        passcode: "Passcode",
        signInPassword: "Sign in with a password",
        signInPasscode: "Sign in with a passcode",
        forgotYourPassword: "Forgot your password?",
        back: "Back",
        signInPasskey: "Sign in with a passkey",
        registerAuthenticator: "Create a passkey",
        signIn: "Sign in",
        signUp: "Create account",
        sendNewPasscode: "Send new code",
        passwordRetryAfter: "Retry in {passwordRetryAfter}",
        passcodeResendAfter: "Request a new code in {passcodeResendAfter}",
        unverifiedEmail: "unverified",
        primaryEmail: "primary",
        setAsPrimaryEmail: "Set as primary",
        verify: "Verify",
        delete: "Delete",
        newEmailAddress: "New email address",
        newPassword: "New password",
        rename: "Rename",
        newPasskeyName: "New passkey name",
        addEmail: "Add email",
        createPasskey: "Create a passkey",
        webauthnUnsupported: "Passkeys are not supported by your browser",
        signInWith: "Sign in with {provider}",
        deleteAccount: "Yes, delete this account.",
        emailOrUsername: "Email or username",
        username: "Username",
        optional: "optional",
        dontHaveAnAccount: "Don't have an account?",
        alreadyHaveAnAccount: "Already have an account?",
        changeUsername: "Change username",
        setUsername: "Set username",
        changePassword: "Change password",
        setPassword: "Set password",
        revoke: "Revoke",
        currentSession: "Current session",
        authenticatorApp: "Authenticator app",
        securityKey: "Security key",
        securityKeyUse: "Use security key",
        newSecurityKeyName: "New security key name",
        createSecurityKey: "Add a security key",
        authenticatorAppManage: "Manage authenticator app",
        authenticatorAppAdd: "Set up",
        configured: "configured",
        useAnotherMethod: "Use another method",
        lastUsed: "Last used",
        trustDevice: "Trust this browser",
        staySignedIn: "Stay signed in"
      },
      errors: {
        somethingWentWrong: "A technical error has occurred. Please try again later.",
        requestTimeout: "The request timed out.",
        invalidPassword: "Wrong email or password.",
        invalidPasscode: "The passcode provided was not correct.",
        passcodeAttemptsReached: "The passcode was entered incorrectly too many times. Please request a new code.",
        tooManyRequests: "Too many requests have been made. Please wait to repeat the requested operation.",
        unauthorized: "Your session has expired. Please log in again.",
        invalidWebauthnCredential: "This passkey cannot be used anymore.",
        passcodeExpired: "The passcode has expired. Please request a new one.",
        userVerification: "User verification required. Please ensure your authenticator device is protected with a PIN or biometric.",
        emailAddressAlreadyExistsError: "The email address already exists.",
        maxNumOfEmailAddressesReached: "No further email addresses can be added.",
        thirdPartyAccessDenied: "Access denied. The request was cancelled by the user or the provider has denied access for other reasons.",
        thirdPartyMultipleAccounts: "Cannot identify account. The email address is used by multiple accounts.",
        thirdPartyUnverifiedEmail: "Email verification required. Please verify the used email address with your provider.",
        signupDisabled: "Account registration is disabled.",
        handlerNotFoundError: "The current step in your process is not supported by this application version. Please try again later or contact support if the issue persists."
      },
      flowErrors: {
        technical_error: "A technical error has occurred. Please try again later.",
        flow_expired_error: "The session has expired, please click the button to restart.",
        value_invalid_error: "The entered value is invalid.",
        passcode_invalid: "The passcode provided was not correct.",
        passkey_invalid: "This passkey cannot be used anymore",
        passcode_max_attempts_reached: "The passcode was entered incorrectly too many times. Please request a new code.",
        rate_limit_exceeded: "Too many requests have been made. Please wait to repeat the requested operation.",
        unknown_username_error: "The username is unknown.",
        unknown_email_error: "The email address is unknown.",
        username_already_exists: "The username is already taken.",
        invalid_username_error: "The username must contain only letters, numbers, and underscores.",
        email_already_exists: "The email is already taken.",
        not_found: "The requested resource was not found.",
        operation_not_permitted_error: "The operation is not permitted.",
        flow_discontinuity_error: "The process cannot be continued due to user settings or the provider's configuration.",
        form_data_invalid_error: "The submitted form data contains errors.",
        unauthorized: "Your session has expired. Please log in again.",
        value_missing_error: "The value is missing.",
        value_too_long_error: "Value is too long.",
        value_too_short_error: "The value is too short.",
        webauthn_credential_invalid_mfa_only: "This credential can be used as a second factor security key only.",
        webauthn_credential_already_exists: "The request either timed out, was canceled or the device is already registered. Please try again or try using another device.",
        platform_authenticator_required: "Your account is configured to use platform authenticators, but your current device or browser does not support this feature. Please try again with a compatible device or browser.",
        third_party_access_denied: "Access denied. The request was cancelled by the user or the provider has denied access for other reasons."
      }
    };
  }
};
var t = {};
function n(o2) {
  var a2 = t[o2];
  if (void 0 !== a2) return a2.exports;
  var i2 = t[o2] = {
    id: o2,
    exports: {}
  };
  return e[o2].call(i2.exports, i2, i2.exports, n), i2.exports;
}
n.n = (e3) => {
  var t2 = e3 && e3.__esModule ? () => e3.default : () => e3;
  return n.d(t2, {
    a: t2
  }), t2;
}, n.d = (e3, t2) => {
  for (var o2 in t2) n.o(t2, o2) && !n.o(e3, o2) && Object.defineProperty(e3, o2, {
    enumerable: true,
    get: t2[o2]
  });
}, n.o = (e3, t2) => Object.prototype.hasOwnProperty.call(e3, t2), n.r = (e3) => {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, {
    value: "Module"
  }), Object.defineProperty(e3, "__esModule", {
    value: true
  });
}, n.nc = void 0;
var o = {};
n.d(o, {
  rc: () => ot,
  Kj: () => Ie,
  fK: () => ie,
  tJ: () => ee,
  Z7: () => be,
  qQ: () => ve,
  I4: () => it,
  O8: () => oe,
  Qq: () => Oe,
  ku: () => le,
  ls: () => ce,
  bO: () => de,
  yv: () => ge,
  AT: () => he,
  m_: () => pe,
  KG: () => ue,
  Wj: () => Ne,
  DH: () => re,
  kf: () => je,
  Uw: () => nt,
  oY: () => ae,
  Wg: () => ye,
  AC: () => fe,
  D_: () => _e,
  jx: () => at,
  nX: () => me,
  Nx: () => se,
  Sd: () => Le,
  kz: () => Zo,
  fX: () => $,
  qA: () => J,
  tz: () => Y,
  gN: () => Q
});
var a = {};
n.r(a), n.d(a, {
  apple: () => St,
  checkmark: () => xt,
  copy: () => Ct,
  customProvider: () => At,
  discord: () => Ot,
  exclamation: () => It,
  facebook: () => jt,
  github: () => Et,
  google: () => Pt,
  linkedin: () => Dt,
  mail: () => Tt,
  microsoft: () => Nt,
  passkey: () => Lt,
  password: () => Mt,
  qrCodeScanner: () => Ut,
  securityKey: () => Wt,
  spinner: () => Ft
});
var i = n(616);
var r = 0;
function s(e3, t2, n2, o2, a2, s2) {
  var c2, l2, d2 = {};
  for (l2 in t2) "ref" == l2 ? c2 = t2[l2] : d2[l2] = t2[l2];
  var u2 = {
    type: e3,
    props: d2,
    key: n2,
    ref: c2,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --r,
    __source: a2,
    __self: s2
  };
  if ("function" == typeof e3 && (c2 = e3.defaultProps)) for (l2 in c2) void 0 === d2[l2] && (d2[l2] = c2[l2]);
  return i.options.vnode && i.options.vnode(u2), u2;
}
function c() {
  return c = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e3[o2] = n2[o2]);
    }
    return e3;
  }, c.apply(this, arguments);
}
var l = ["context", "children"];
function d(e3) {
  this.getChildContext = function() {
    return e3.context;
  };
  var t2 = e3.children, n2 = function(e4, t3) {
    if (null == e4) return {};
    var n3, o2, a2 = {}, i2 = Object.keys(e4);
    for (o2 = 0; o2 < i2.length; o2++) t3.indexOf(n3 = i2[o2]) >= 0 || (a2[n3] = e4[n3]);
    return a2;
  }(e3, l);
  return (0, i.cloneElement)(t2, n2);
}
function u() {
  var e3 = new CustomEvent("_preact", {
    detail: {},
    bubbles: true,
    cancelable: true
  });
  this.dispatchEvent(e3), this._vdom = (0, i.h)(d, c({}, this._props, {
    context: e3.detail.context
  }), v(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? i.hydrate : i.render)(this._vdom, this._root);
}
function h(e3) {
  return e3.replace(/-(\w)/g, function(e4, t2) {
    return t2 ? t2.toUpperCase() : "";
  });
}
function p(e3, t2, n2) {
  if (this._vdom) {
    var o2 = {};
    o2[e3] = n2 = null == n2 ? void 0 : n2, o2[h(e3)] = n2, this._vdom = (0, i.cloneElement)(this._vdom, o2), (0, i.render)(this._vdom, this._root);
  }
}
function f() {
  (0, i.render)(this._vdom = null, this._root);
}
function _(e3, t2) {
  var n2 = this;
  return (0, i.h)("slot", c({}, e3, {
    ref: function(e4) {
      e4 ? (n2.ref = e4, n2._listener || (n2._listener = function(e5) {
        e5.stopPropagation(), e5.detail.context = t2;
      }, e4.addEventListener("_preact", n2._listener))) : n2.ref.removeEventListener("_preact", n2._listener);
    }
  }));
}
function v(e3, t2) {
  if (3 === e3.nodeType) return e3.data;
  if (1 !== e3.nodeType) return null;
  var n2 = [], o2 = {}, a2 = 0, r2 = e3.attributes, s2 = e3.childNodes;
  for (a2 = r2.length; a2--; ) "slot" !== r2[a2].name && (o2[r2[a2].name] = r2[a2].value, o2[h(r2[a2].name)] = r2[a2].value);
  for (a2 = s2.length; a2--; ) {
    var c2 = v(s2[a2], null), l2 = s2[a2].slot;
    l2 ? o2[l2] = (0, i.h)(_, {
      name: l2
    }, c2) : n2[a2] = c2;
  }
  var d2 = t2 ? (0, i.h)(_, null, n2) : n2;
  return (0, i.h)(t2 || e3.nodeName.toLowerCase(), o2, d2);
}
var m = n(7);
var g = n(78);
function b(e3, t2) {
  for (var n2 in t2) e3[n2] = t2[n2];
  return e3;
}
function y(e3, t2) {
  for (var n2 in e3) if ("__source" !== n2 && !(n2 in t2)) return true;
  for (var o2 in t2) if ("__source" !== o2 && e3[o2] !== t2[o2]) return true;
  return false;
}
function k(e3) {
  this.props = e3;
}
(k.prototype = new i.Component()).isPureReactComponent = true, k.prototype.shouldComponentUpdate = function(e3, t2) {
  return y(this.props, e3) || y(this.state, t2);
};
var w = i.options.__b;
i.options.__b = function(e3) {
  e3.type && e3.type.__f && e3.ref && (e3.props.ref = e3.ref, e3.ref = null), w && w(e3);
};
var S = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var x = (i.toChildArray, i.options.__e);
i.options.__e = function(e3, t2, n2, o2) {
  if (e3.then) {
    for (var a2, i2 = t2; i2 = i2.__; ) if ((a2 = i2.__c) && a2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), a2.__c(e3, t2);
  }
  x(e3, t2, n2, o2);
};
var C = i.options.unmount;
function A(e3, t2, n2) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(e4) {
    "function" == typeof e4.__c && e4.__c();
  }), e3.__c.__H = null), null != (e3 = b({}, e3)).__c && (e3.__c.__P === n2 && (e3.__c.__P = t2), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(e4) {
    return A(e4, t2, n2);
  })), e3;
}
function O(e3, t2, n2) {
  return e3 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(e4) {
    return O(e4, t2, n2);
  }), e3.__c && e3.__c.__P === t2 && (e3.__e && n2.insertBefore(e3.__e, e3.__d), e3.__c.__e = true, e3.__c.__P = n2)), e3;
}
function I() {
  this.__u = 0, this.t = null, this.__b = null;
}
function j(e3) {
  var t2 = e3.__.__c;
  return t2 && t2.__a && t2.__a(e3);
}
function E() {
  this.u = null, this.o = null;
}
i.options.unmount = function(e3) {
  var t2 = e3.__c;
  t2 && t2.__R && t2.__R(), t2 && true === e3.__h && (e3.type = null), C && C(e3);
}, (I.prototype = new i.Component()).__c = function(e3, t2) {
  var n2 = t2.__c, o2 = this;
  null == o2.t && (o2.t = []), o2.t.push(n2);
  var a2 = j(o2.__v), i2 = false, r2 = function() {
    i2 || (i2 = true, n2.__R = null, a2 ? a2(s2) : s2());
  };
  n2.__R = r2;
  var s2 = function() {
    if (!--o2.__u) {
      if (o2.state.__a) {
        var e4 = o2.state.__a;
        o2.__v.__k[0] = O(e4, e4.__c.__P, e4.__c.__O);
      }
      var t3;
      for (o2.setState({
        __a: o2.__b = null
      }); t3 = o2.t.pop(); ) t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  o2.__u++ || c2 || o2.setState({
    __a: o2.__b = o2.__v.__k[0]
  }), e3.then(r2, r2);
}, I.prototype.componentWillUnmount = function() {
  this.t = [];
}, I.prototype.render = function(e3, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = A(this.__b, n2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var a2 = t2.__a && (0, i.createElement)(i.Fragment, null, e3.fallback);
  return a2 && (a2.__h = null), [(0, i.createElement)(i.Fragment, null, t2.__a ? null : e3.children), a2];
};
var P = function(e3, t2, n2) {
  if (++n2[1] === n2[0] && e3.o.delete(t2), e3.props.revealOrder && ("t" !== e3.props.revealOrder[0] || !e3.o.size)) for (n2 = e3.u; n2; ) {
    for (; n2.length > 3; ) n2.pop()();
    if (n2[1] < n2[0]) break;
    e3.u = n2 = n2[2];
  }
};
(E.prototype = new i.Component()).__a = function(e3) {
  var t2 = this, n2 = j(t2.__v), o2 = t2.o.get(e3);
  return o2[0]++, function(a2) {
    var i2 = function() {
      t2.props.revealOrder ? (o2.push(a2), P(t2, e3, o2)) : a2();
    };
    n2 ? n2(i2) : i2();
  };
}, E.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = (0, i.toChildArray)(e3.children);
  e3.revealOrder && "b" === e3.revealOrder[0] && t2.reverse();
  for (var n2 = t2.length; n2--; ) this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e3.children;
}, E.prototype.componentDidUpdate = E.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t2, n2) {
    P(e3, n2, t2);
  });
};
var D = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var T = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var N = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var L = /[A-Z0-9]/g;
var M = "undefined" != typeof document;
var U = function(e3) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e3);
};
i.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e3) {
  Object.defineProperty(i.Component.prototype, e3, {
    configurable: true,
    get: function() {
      return this["UNSAFE_" + e3];
    },
    set: function(t2) {
      Object.defineProperty(this, e3, {
        configurable: true,
        writable: true,
        value: t2
      });
    }
  });
});
var W = i.options.event;
function F() {
}
function H() {
  return this.cancelBubble;
}
function q() {
  return this.defaultPrevented;
}
i.options.event = function(e3) {
  return W && (e3 = W(e3)), e3.persist = F, e3.isPropagationStopped = H, e3.isDefaultPrevented = q, e3.nativeEvent = e3;
};
var R = {
  configurable: true,
  get: function() {
    return this.class;
  }
};
var z = i.options.vnode;
i.options.vnode = function(e3) {
  var t2 = e3.type, n2 = e3.props, o2 = n2;
  if ("string" == typeof t2) {
    for (var a2 in o2 = {}, n2) {
      var r2 = n2[a2];
      if (!("value" === a2 && "defaultValue" in n2 && null == r2 || M && "children" === a2 && "noscript" === t2)) {
        var s2 = a2.toLowerCase();
        "defaultValue" === a2 && "value" in n2 && null == n2.value ? a2 = "value" : "download" === a2 && true === r2 ? r2 = "" : "ondoubleclick" === s2 ? a2 = "ondblclick" : "onchange" !== s2 || "input" !== t2 && "textarea" !== t2 || U(n2.type) ? "onfocus" === s2 ? a2 = "onfocusin" : "onblur" === s2 ? a2 = "onfocusout" : N.test(a2) ? a2 = s2 : -1 === t2.indexOf("-") && T.test(a2) ? a2 = a2.replace(L, "-$&").toLowerCase() : null === r2 && (r2 = void 0) : s2 = a2 = "oninput", "oninput" === s2 && o2[a2 = s2] && (a2 = "oninputCapture"), o2[a2] = r2;
      }
    }
    "select" == t2 && o2.multiple && Array.isArray(o2.value) && (o2.value = (0, i.toChildArray)(n2.children).forEach(function(e4) {
      e4.props.selected = -1 != o2.value.indexOf(e4.props.value);
    })), "select" == t2 && null != o2.defaultValue && (o2.value = (0, i.toChildArray)(n2.children).forEach(function(e4) {
      e4.props.selected = o2.multiple ? -1 != o2.defaultValue.indexOf(e4.props.value) : o2.defaultValue == e4.props.value;
    })), e3.props = o2, n2.class != n2.className && (R.enumerable = "className" in n2, null != n2.className && (o2.class = n2.className), Object.defineProperty(o2, "className", R));
  }
  e3.$$typeof = D, z && z(e3);
};
var K = i.options.__r;
i.options.__r = function(e3) {
  K && K(e3), e3.__c;
};
var B = i.options.diffed;
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e3[o2] = n2[o2]);
    }
    return e3;
  }, Z.apply(this, arguments);
}
i.options.diffed = function(e3) {
  B && B(e3);
  var t2 = e3.props, n2 = e3.__e;
  null != n2 && "textarea" === e3.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value);
}, i.Fragment, g.useLayoutEffect, g.useState, g.useId, g.useReducer, g.useEffect, g.useLayoutEffect, g.useRef, g.useImperativeHandle, g.useMemo, g.useCallback, g.useContext, g.useDebugValue, i.createElement, i.createContext, i.createRef, i.Fragment, i.Component;
var V = class {
  static throttle(e3, t2, n2 = {}) {
    const {
      leading: o2 = true,
      trailing: a2 = true
    } = n2;
    let i2, r2, s2, c2 = 0;
    const l2 = () => {
      c2 = false === o2 ? 0 : Date.now(), s2 = null, e3.apply(i2, r2);
    };
    return function(...n3) {
      const d2 = Date.now();
      c2 || false !== o2 || (c2 = d2);
      const u2 = t2 - (d2 - c2);
      i2 = this, r2 = n3, u2 <= 0 || u2 > t2 ? (s2 && (window.clearTimeout(s2), s2 = null), c2 = d2, e3.apply(i2, r2)) : s2 || false === a2 || (s2 = window.setTimeout(l2, u2));
    };
  }
};
var $ = "hanko-session-created";
var J = "hanko-session-expired";
var Q = "hanko-user-logged-out";
var Y = "hanko-user-deleted";
var X = "hanko-after-state-change";
var G = "hanko-before-state-change";
var ee = class extends CustomEvent {
  constructor(e3, t2) {
    super(e3, {
      detail: t2
    });
  }
};
var te = class _te {
  constructor() {
    this.throttleLimit = 1e3, this._addEventListener = document.addEventListener.bind(document), this._removeEventListener = document.removeEventListener.bind(document), this._throttle = V.throttle;
  }
  wrapCallback(e3, t2) {
    const n2 = (t3) => {
      e3(t3.detail);
    };
    return t2 ? this._throttle(n2, this.throttleLimit, {
      leading: true,
      trailing: false
    }) : n2;
  }
  addEventListenerWithType({
    type: e3,
    callback: t2,
    once: n2 = false,
    throttle: o2 = false
  }) {
    const a2 = this.wrapCallback(t2, o2);
    return this._addEventListener(e3, a2, {
      once: n2
    }), () => this._removeEventListener(e3, a2);
  }
  static mapAddEventListenerParams(e3, {
    once: t2,
    callback: n2
  }, o2) {
    return {
      type: e3,
      callback: n2,
      once: t2,
      throttle: o2
    };
  }
  addEventListener(e3, t2, n2) {
    return this.addEventListenerWithType(_te.mapAddEventListenerParams(e3, t2, n2));
  }
  onSessionCreated(e3, t2) {
    return this.addEventListener($, {
      callback: e3,
      once: t2
    }, true);
  }
  onSessionExpired(e3, t2) {
    return this.addEventListener(J, {
      callback: e3,
      once: t2
    }, true);
  }
  onUserLoggedOut(e3, t2) {
    return this.addEventListener(Q, {
      callback: e3,
      once: t2
    });
  }
  onUserDeleted(e3, t2) {
    return this.addEventListener(Y, {
      callback: e3,
      once: t2
    });
  }
  onAfterStateChange(e3, t2) {
    return this.addEventListener(X, {
      callback: e3,
      once: t2
    }, false);
  }
  onBeforeStateChange(e3, t2) {
    return this.addEventListener(G, {
      callback: e3,
      once: t2
    }, false);
  }
};
var ne = class {
  constructor() {
    this._dispatchEvent = document.dispatchEvent.bind(document);
  }
  dispatch(e3, t2) {
    this._dispatchEvent(new ee(e3, t2));
  }
  dispatchSessionCreatedEvent(e3) {
    this.dispatch($, e3);
  }
  dispatchSessionExpiredEvent() {
    this.dispatch(J, null);
  }
  dispatchUserLoggedOutEvent() {
    this.dispatch(Q, null);
  }
  dispatchUserDeletedEvent() {
    this.dispatch(Y, null);
  }
  dispatchAfterStateChangeEvent(e3) {
    this.dispatch(X, e3);
  }
  dispatchBeforeStateChangeEvent(e3) {
    this.dispatch(G, e3);
  }
};
var oe = class _oe extends Error {
  constructor(e3, t2, n2) {
    super(e3), this.code = void 0, this.cause = void 0, this.code = t2, this.cause = n2, Object.setPrototypeOf(this, _oe.prototype);
  }
};
var ae = class _ae extends oe {
  constructor(e3) {
    super("Technical error", "somethingWentWrong", e3), Object.setPrototypeOf(this, _ae.prototype);
  }
};
var ie = class _ie extends oe {
  constructor(e3, t2) {
    super("Conflict error", "conflict", t2), Object.setPrototypeOf(this, _ie.prototype);
  }
};
var re = class _re extends oe {
  constructor(e3) {
    super("Request timed out error", "requestTimeout", e3), Object.setPrototypeOf(this, _re.prototype);
  }
};
var se = class _se extends oe {
  constructor(e3) {
    super("Request cancelled error", "requestCancelled", e3), Object.setPrototypeOf(this, _se.prototype);
  }
};
var ce = class _ce extends oe {
  constructor(e3) {
    super("Invalid password error", "invalidPassword", e3), Object.setPrototypeOf(this, _ce.prototype);
  }
};
var le = class _le extends oe {
  constructor(e3) {
    super("Invalid Passcode error", "invalidPasscode", e3), Object.setPrototypeOf(this, _le.prototype);
  }
};
var de = class _de extends oe {
  constructor(e3) {
    super("Invalid WebAuthn credential error", "invalidWebauthnCredential", e3), Object.setPrototypeOf(this, _de.prototype);
  }
};
var ue = class _ue extends oe {
  constructor(e3) {
    super("Passcode expired error", "passcodeExpired", e3), Object.setPrototypeOf(this, _ue.prototype);
  }
};
var he = class _he extends oe {
  constructor(e3) {
    super("Maximum number of Passcode attempts reached error", "passcodeAttemptsReached", e3), Object.setPrototypeOf(this, _he.prototype);
  }
};
var pe = class _pe extends oe {
  constructor(e3) {
    super("Not found error", "notFound", e3), Object.setPrototypeOf(this, _pe.prototype);
  }
};
var fe = class _fe extends oe {
  constructor(e3, t2) {
    super("Too many requests error", "tooManyRequests", t2), this.retryAfter = void 0, this.retryAfter = e3, Object.setPrototypeOf(this, _fe.prototype);
  }
};
var _e = class __e extends oe {
  constructor(e3) {
    super("Unauthorized error", "unauthorized", e3), Object.setPrototypeOf(this, __e.prototype);
  }
};
var ve = class _ve extends oe {
  constructor(e3) {
    super("Forbidden error", "forbidden", e3), Object.setPrototypeOf(this, _ve.prototype);
  }
};
var me = class _me extends oe {
  constructor(e3) {
    super("User verification error", "userVerification", e3), Object.setPrototypeOf(this, _me.prototype);
  }
};
var ge = class _ge extends oe {
  constructor(e3) {
    super("Maximum number of email addresses reached error", "maxNumOfEmailAddressesReached", e3), Object.setPrototypeOf(this, _ge.prototype);
  }
};
var be = class _be extends oe {
  constructor(e3) {
    super("The email address already exists", "emailAddressAlreadyExistsError", e3), Object.setPrototypeOf(this, _be.prototype);
  }
};
var ye = class _ye extends oe {
  constructor(e3, t2) {
    super("An error occurred during third party sign up/sign in", e3, t2), Object.setPrototypeOf(this, _ye.prototype);
  }
};
function ke(e3) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2];
    for (var o2 in n2) e3[o2] = n2[o2];
  }
  return e3;
}
var we = function e2(t2, n2) {
  function o2(e3, o3, a2) {
    if ("undefined" != typeof document) {
      "number" == typeof (a2 = ke({}, n2, a2)).expires && (a2.expires = new Date(Date.now() + 864e5 * a2.expires)), a2.expires && (a2.expires = a2.expires.toUTCString()), e3 = encodeURIComponent(e3).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var i2 = "";
      for (var r2 in a2) a2[r2] && (i2 += "; " + r2, true !== a2[r2] && (i2 += "=" + a2[r2].split(";")[0]));
      return document.cookie = e3 + "=" + t2.write(o3, e3) + i2;
    }
  }
  return Object.create({
    set: o2,
    get: function(e3) {
      if ("undefined" != typeof document && (!arguments.length || e3)) {
        for (var n3 = document.cookie ? document.cookie.split("; ") : [], o3 = {}, a2 = 0; a2 < n3.length; a2++) {
          var i2 = n3[a2].split("="), r2 = i2.slice(1).join("=");
          try {
            var s2 = decodeURIComponent(i2[0]);
            if (o3[s2] = t2.read(r2, s2), e3 === s2) break;
          } catch (e4) {
          }
        }
        return e3 ? o3[e3] : o3;
      }
    },
    remove: function(e3, t3) {
      o2(e3, "", ke({}, t3, {
        expires: -1
      }));
    },
    withAttributes: function(t3) {
      return e2(this.converter, ke({}, this.attributes, t3));
    },
    withConverter: function(t3) {
      return e2(ke({}, this.converter, t3), this.attributes);
    }
  }, {
    attributes: {
      value: Object.freeze(n2)
    },
    converter: {
      value: Object.freeze(t2)
    }
  });
}({
  read: function(e3) {
    return '"' === e3[0] && (e3 = e3.slice(1, -1)), e3.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e3) {
    return encodeURIComponent(e3).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
}, {
  path: "/"
});
var Se = class {
  constructor(e3) {
    var t2, n2;
    this.authCookieName = void 0, this.authCookieDomain = void 0, this.authCookieSameSite = void 0, this.authCookieName = null != (t2 = e3.cookieName) ? t2 : "hanko", this.authCookieDomain = e3.cookieDomain, this.authCookieSameSite = null != (n2 = e3.cookieSameSite) ? n2 : "lax";
  }
  getAuthCookie() {
    return we.get(this.authCookieName);
  }
  setAuthCookie(e3, t2) {
    const n2 = {
      secure: true,
      sameSite: this.authCookieSameSite
    };
    void 0 !== this.authCookieDomain && (n2.domain = this.authCookieDomain);
    const o2 = Z({}, n2, t2);
    if (("none" === o2.sameSite || "None" === o2.sameSite) && false === o2.secure) throw new ae(new Error("Secure attribute must be set when SameSite=None"));
    we.set(this.authCookieName, e3, o2);
  }
  removeAuthCookie() {
    we.remove(this.authCookieName);
  }
};
var xe = class {
  constructor(e3) {
    this.keyName = void 0, this.keyName = e3.keyName;
  }
  getSessionToken() {
    return sessionStorage.getItem(this.keyName);
  }
  setSessionToken(e3) {
    sessionStorage.setItem(this.keyName, e3);
  }
  removeSessionToken() {
    sessionStorage.removeItem(this.keyName);
  }
};
var Ce = class {
  constructor(e3) {
    this._xhr = void 0, this._xhr = e3;
  }
  getResponseHeader(e3) {
    return this._xhr.getResponseHeader(e3);
  }
};
var Ae = class {
  constructor(e3) {
    this.headers = void 0, this.ok = void 0, this.status = void 0, this.statusText = void 0, this.url = void 0, this._decodedJSON = void 0, this.xhr = void 0, this.headers = new Ce(e3), this.ok = e3.status >= 200 && e3.status <= 299, this.status = e3.status, this.statusText = e3.statusText, this.url = e3.responseURL, this.xhr = e3;
  }
  json() {
    return this._decodedJSON || (this._decodedJSON = JSON.parse(this.xhr.response)), this._decodedJSON;
  }
  parseNumericHeader(e3) {
    const t2 = parseInt(this.headers.getResponseHeader(e3), 10);
    return isNaN(t2) ? 0 : t2;
  }
};
var Oe = class {
  constructor(e3, t2) {
    var n2;
    this.timeout = void 0, this.api = void 0, this.dispatcher = void 0, this.cookie = void 0, this.sessionTokenStorage = void 0, this.lang = void 0, this.sessionTokenLocation = void 0, this.api = e3, this.timeout = null != (n2 = t2.timeout) ? n2 : 13e3, this.dispatcher = new ne(), this.cookie = new Se(Z({}, t2)), this.sessionTokenStorage = new xe({
      keyName: t2.cookieName
    }), this.lang = t2.lang, this.sessionTokenLocation = t2.sessionTokenLocation;
  }
  _fetch(e3, t2, n2 = new XMLHttpRequest()) {
    const o2 = this, a2 = this.api + e3, i2 = this.timeout, r2 = this.getAuthToken(), s2 = this.lang;
    return new Promise(function(e4, c2) {
      n2.open(t2.method, a2, true), n2.setRequestHeader("Accept", "application/json"), n2.setRequestHeader("Content-Type", "application/json"), n2.setRequestHeader("X-Language", s2), r2 && n2.setRequestHeader("Authorization", `Bearer ${r2}`), n2.timeout = i2, n2.withCredentials = true, n2.onload = () => {
        o2.processHeaders(n2), e4(new Ae(n2));
      }, n2.onerror = () => {
        c2(new ae());
      }, n2.ontimeout = () => {
        c2(new re());
      }, n2.send(t2.body ? t2.body.toString() : null);
    });
  }
  processHeaders(e3) {
    let t2 = "", n2 = 0, o2 = "";
    if (e3.getAllResponseHeaders().split("\r\n").forEach((a2) => {
      const i2 = a2.toLowerCase();
      i2.startsWith("x-auth-token") ? t2 = e3.getResponseHeader("X-Auth-Token") : i2.startsWith("x-session-lifetime") ? n2 = parseInt(e3.getResponseHeader("X-Session-Lifetime"), 10) : i2.startsWith("x-session-retention") && (o2 = e3.getResponseHeader("X-Session-Retention"));
    }), t2) {
      const e4 = new RegExp("^https://"), a2 = !!this.api.match(e4) && !!window.location.href.match(e4), i2 = "session" === o2 ? void 0 : new Date((/* @__PURE__ */ new Date()).getTime() + 1e3 * n2);
      this.setAuthToken(t2, {
        secure: a2,
        expires: i2
      });
    }
  }
  get(e3) {
    return this._fetch(e3, {
      method: "GET"
    });
  }
  post(e3, t2) {
    return this._fetch(e3, {
      method: "POST",
      body: JSON.stringify(t2)
    });
  }
  put(e3, t2) {
    return this._fetch(e3, {
      method: "PUT",
      body: JSON.stringify(t2)
    });
  }
  patch(e3, t2) {
    return this._fetch(e3, {
      method: "PATCH",
      body: JSON.stringify(t2)
    });
  }
  delete(e3) {
    return this._fetch(e3, {
      method: "DELETE"
    });
  }
  getAuthToken() {
    let e3 = "";
    switch (this.sessionTokenLocation) {
      case "cookie":
      default:
        e3 = this.cookie.getAuthCookie();
        break;
      case "sessionStorage":
        e3 = this.sessionTokenStorage.getSessionToken();
    }
    return e3;
  }
  setAuthToken(e3, t2) {
    switch (this.sessionTokenLocation) {
      case "cookie":
      default:
        return this.cookie.setAuthCookie(e3, t2);
      case "sessionStorage":
        return this.sessionTokenStorage.setSessionToken(e3);
    }
  }
};
var Ie = class {
  constructor(e3, t2) {
    this.client = void 0, this.client = new Oe(e3, t2);
  }
};
var je = class extends Ie {
  validate() {
    return __async(this, null, function* () {
      const e3 = yield this.client.get("/sessions/validate");
      if (!e3.ok) throw new ae();
      return yield e3.json();
    });
  }
};
var Ee = class {
  constructor(e3) {
    this.storageKey = void 0, this.defaultState = {
      expiration: 0,
      lastCheck: 0
    }, this.storageKey = e3;
  }
  load() {
    const e3 = window.localStorage.getItem(this.storageKey);
    return null == e3 ? this.defaultState : JSON.parse(e3);
  }
  save(e3) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(e3 || this.defaultState));
  }
};
var Pe = class {
  constructor(e3, t2) {
    this.onActivityCallback = void 0, this.onInactivityCallback = void 0, this.handleFocus = () => {
      this.onActivityCallback();
    }, this.handleBlur = () => {
      this.onInactivityCallback();
    }, this.handleVisibilityChange = () => {
      "visible" === document.visibilityState ? this.onActivityCallback() : this.onInactivityCallback();
    }, this.hasFocus = () => document.hasFocus(), this.onActivityCallback = e3, this.onInactivityCallback = t2, window.addEventListener("focus", this.handleFocus), window.addEventListener("blur", this.handleBlur), document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
};
var De = class {
  constructor(e3, t2, n2) {
    this.intervalID = null, this.timeoutID = null, this.checkInterval = void 0, this.checkSession = void 0, this.onSessionExpired = void 0, this.checkInterval = e3, this.checkSession = t2, this.onSessionExpired = n2;
  }
  scheduleSessionExpiry(e3) {
    var t2 = this;
    this.stop(), this.timeoutID = setTimeout(function() {
      return __async(this, null, function* () {
        t2.stop(), t2.onSessionExpired();
      });
    }, e3);
  }
  start(e3 = 0, t2 = 0) {
    var n2 = this;
    const o2 = this.calcTimeToNextCheck(e3);
    this.sessionExpiresSoon(t2) ? this.scheduleSessionExpiry(o2) : this.timeoutID = setTimeout(function() {
      return __async(this, null, function* () {
        let e4 = yield n2.checkSession();
        if (e4.is_valid) {
          if (n2.sessionExpiresSoon(e4.expiration)) return void n2.scheduleSessionExpiry(e4.expiration - Date.now());
          n2.intervalID = setInterval(function() {
            return __async(this, null, function* () {
              e4 = yield n2.checkSession(), e4.is_valid ? n2.sessionExpiresSoon(e4.expiration) && n2.scheduleSessionExpiry(e4.expiration - Date.now()) : n2.stop();
            });
          }, n2.checkInterval);
        } else n2.stop();
      });
    }, o2);
  }
  stop() {
    this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null), this.intervalID && (clearInterval(this.intervalID), this.intervalID = null);
  }
  isRunning() {
    return null !== this.timeoutID || null !== this.intervalID;
  }
  sessionExpiresSoon(e3) {
    return e3 > 0 && e3 - Date.now() <= this.checkInterval;
  }
  calcTimeToNextCheck(e3) {
    const t2 = Date.now() - e3;
    return this.checkInterval >= t2 ? this.checkInterval - t2 % this.checkInterval : 0;
  }
};
var Te = class {
  constructor(e3 = "hanko_session", t2, n2, o2) {
    this.channel = void 0, this.onSessionExpired = void 0, this.onSessionCreated = void 0, this.onLeadershipRequested = void 0, this.handleMessage = (e4) => {
      const t3 = e4.data;
      switch (t3.action) {
        case "sessionExpired":
          this.onSessionExpired(t3);
          break;
        case "sessionCreated":
          this.onSessionCreated(t3);
          break;
        case "requestLeadership":
          this.onLeadershipRequested(t3);
      }
    }, this.onSessionExpired = t2, this.onSessionCreated = n2, this.onLeadershipRequested = o2, this.channel = new BroadcastChannel(e3), this.channel.onmessage = this.handleMessage;
  }
  post(e3) {
    this.channel.postMessage(e3);
  }
};
var Ne = class extends ne {
  constructor(e3, t2) {
    super(), this.listener = new te(), this.checkInterval = 3e4, this.client = void 0, this.sessionState = void 0, this.windowActivityManager = void 0, this.scheduler = void 0, this.sessionChannel = void 0, this.isLoggedIn = void 0, this.client = new je(e3, t2), t2.sessionCheckInterval && (this.checkInterval = t2.sessionCheckInterval < 3e3 ? 3e3 : t2.sessionCheckInterval), this.sessionState = new Ee(`${t2.cookieName}_session_state`), this.sessionChannel = new Te(this.getSessionCheckChannelName(t2.sessionTokenLocation, t2.sessionCheckChannelName), () => this.onChannelSessionExpired(), (e4) => this.onChannelSessionCreated(e4), () => this.onChannelLeadershipRequested()), this.scheduler = new De(this.checkInterval, () => this.checkSession(), () => this.onSessionExpired()), this.windowActivityManager = new Pe(() => this.startSessionCheck(), () => this.scheduler.stop());
    const n2 = Date.now(), {
      expiration: o2
    } = this.sessionState.load();
    this.isLoggedIn = n2 < o2, this.initializeEventListeners(), this.startSessionCheck();
  }
  initializeEventListeners() {
    this.listener.onSessionCreated((e3) => {
      const {
        claims: t2
      } = e3, n2 = Date.parse(t2.expiration), o2 = Date.now();
      this.isLoggedIn = true, this.sessionState.save({
        expiration: n2,
        lastCheck: o2
      }), this.sessionChannel.post({
        action: "sessionCreated",
        claims: t2
      }), this.startSessionCheck();
    }), this.listener.onUserLoggedOut(() => {
      this.isLoggedIn = false, this.sessionChannel.post({
        action: "sessionExpired"
      }), this.sessionState.save(null), this.scheduler.stop();
    }), window.addEventListener("beforeunload", () => this.scheduler.stop());
  }
  startSessionCheck() {
    if (!this.windowActivityManager.hasFocus()) return;
    if (this.sessionChannel.post({
      action: "requestLeadership"
    }), this.scheduler.isRunning()) return;
    const {
      lastCheck: e3,
      expiration: t2
    } = this.sessionState.load();
    this.isLoggedIn && this.scheduler.start(e3, t2);
  }
  checkSession() {
    return __async(this, null, function* () {
      const e3 = Date.now(), {
        is_valid: t2,
        claims: n2,
        expiration_time: o2
      } = yield this.client.validate(), a2 = o2 ? Date.parse(o2) : 0;
      return !t2 && this.isLoggedIn && this.dispatchSessionExpiredEvent(), t2 ? (this.isLoggedIn = true, this.sessionState.save({
        lastCheck: e3,
        expiration: a2
      })) : (this.isLoggedIn = false, this.sessionState.save(null), this.sessionChannel.post({
        action: "sessionExpired"
      })), {
        is_valid: t2,
        claims: n2,
        expiration: a2
      };
    });
  }
  onSessionExpired() {
    this.isLoggedIn && (this.isLoggedIn = false, this.sessionState.save(null), this.sessionChannel.post({
      action: "sessionExpired"
    }), this.dispatchSessionExpiredEvent());
  }
  onChannelSessionExpired() {
    this.isLoggedIn && (this.isLoggedIn = false, this.dispatchSessionExpiredEvent());
  }
  onChannelSessionCreated(e3) {
    const {
      claims: t2
    } = e3, n2 = Date.now(), o2 = Date.parse(t2.expiration) - n2;
    this.isLoggedIn = true, this.dispatchSessionCreatedEvent({
      claims: t2,
      expirationSeconds: o2
    });
  }
  onChannelLeadershipRequested() {
    this.windowActivityManager.hasFocus() || this.scheduler.stop();
  }
  getSessionCheckChannelName(e3, t2) {
    if ("sessionStorage" !== e3) return t2;
    let n2 = sessionStorage.getItem("sessionCheckChannelName");
    return null != n2 && "" !== n2 || (n2 = `${t2}-${Math.floor(100 * Math.random()) + 1}`, sessionStorage.setItem("sessionCheckChannelName", n2)), n2;
  }
};
var Le = class {
  static supported() {
    return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
  }
  static isPlatformAuthenticatorAvailable() {
    return __async(this, null, function* () {
      return !(!this.supported() || !window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    });
  }
  static isSecurityKeySupported() {
    return __async(this, null, function* () {
      return void 0 !== window.PublicKeyCredential && window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported ? window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported() : this.supported();
    });
  }
  static isConditionalMediationAvailable() {
    return __async(this, null, function* () {
      return !(!window.PublicKeyCredential || !window.PublicKeyCredential.isConditionalMediationAvailable) && window.PublicKeyCredential.isConditionalMediationAvailable();
    });
  }
};
function Me(e3) {
  const t2 = "==".slice(0, (4 - e3.length % 4) % 4), n2 = e3.replace(/-/g, "+").replace(/_/g, "/") + t2, o2 = atob(n2), a2 = new ArrayBuffer(o2.length), i2 = new Uint8Array(a2);
  for (let e4 = 0; e4 < o2.length; e4++) i2[e4] = o2.charCodeAt(e4);
  return a2;
}
function Ue(e3) {
  const t2 = new Uint8Array(e3);
  let n2 = "";
  for (const e4 of t2) n2 += String.fromCharCode(e4);
  return btoa(n2).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
var We = "copy";
var Fe = "convert";
function He(e3, t2, n2) {
  if (t2 === We) return n2;
  if (t2 === Fe) return e3(n2);
  if (t2 instanceof Array) return n2.map((n3) => He(e3, t2[0], n3));
  if (t2 instanceof Object) {
    const o2 = {};
    for (const [a2, i2] of Object.entries(t2)) {
      if (i2.derive) {
        const e4 = i2.derive(n2);
        void 0 !== e4 && (n2[a2] = e4);
      }
      if (a2 in n2) o2[a2] = null != n2[a2] ? He(e3, i2.schema, n2[a2]) : null;
      else if (i2.required) throw new Error(`Missing key: ${a2}`);
    }
    return o2;
  }
}
function qe(e3, t2) {
  return {
    required: true,
    schema: e3,
    derive: t2
  };
}
function Re(e3) {
  return {
    required: true,
    schema: e3
  };
}
function ze(e3) {
  return {
    required: false,
    schema: e3
  };
}
var Ke = {
  type: Re(We),
  id: Re(Fe),
  transports: ze(We)
};
var Be = {
  appid: ze(We),
  appidExclude: ze(We),
  credProps: ze(We)
};
var Ze = {
  appid: ze(We),
  appidExclude: ze(We),
  credProps: ze(We)
};
var Ve = {
  publicKey: Re({
    rp: Re(We),
    user: Re({
      id: Re(Fe),
      name: Re(We),
      displayName: Re(We)
    }),
    challenge: Re(Fe),
    pubKeyCredParams: Re(We),
    timeout: ze(We),
    excludeCredentials: ze([Ke]),
    authenticatorSelection: ze(We),
    attestation: ze(We),
    extensions: ze(Be)
  }),
  signal: ze(We)
};
var $e = {
  type: Re(We),
  id: Re(We),
  rawId: Re(Fe),
  authenticatorAttachment: ze(We),
  response: Re({
    clientDataJSON: Re(Fe),
    attestationObject: Re(Fe),
    transports: qe(We, (e3) => {
      var t2;
      return (null == (t2 = e3.getTransports) ? void 0 : t2.call(e3)) || [];
    })
  }),
  clientExtensionResults: qe(Ze, (e3) => e3.getClientExtensionResults())
};
var Je = {
  mediation: ze(We),
  publicKey: Re({
    challenge: Re(Fe),
    timeout: ze(We),
    rpId: ze(We),
    allowCredentials: ze([Ke]),
    userVerification: ze(We),
    extensions: ze(Be)
  }),
  signal: ze(We)
};
var Qe = {
  type: Re(We),
  id: Re(We),
  rawId: Re(Fe),
  authenticatorAttachment: ze(We),
  response: Re({
    clientDataJSON: Re(Fe),
    authenticatorData: Re(Fe),
    signature: Re(Fe),
    userHandle: Re(Fe)
  }),
  clientExtensionResults: qe(Ze, (e3) => e3.getClientExtensionResults())
};
function Ye(e3) {
  return __async(this, null, function* () {
    const t2 = yield navigator.credentials.get(function(e4) {
      return He(Me, Je, e4);
    }(e3));
    return function(e4) {
      return He(Ue, Qe, e4);
    }(t2);
  });
}
var Xe = class _Xe {
  constructor() {
    this.abortController = new AbortController();
  }
  static getInstance() {
    return _Xe.instance || (_Xe.instance = new _Xe()), _Xe.instance;
  }
  createAbortSignal() {
    return this.abortController.abort(), this.abortController = new AbortController(), this.abortController.signal;
  }
  getWebauthnCredential(e3) {
    return __async(this, null, function* () {
      return yield Ye(Z({}, e3, {
        signal: this.createAbortSignal()
      }));
    });
  }
  getConditionalWebauthnCredential(e3) {
    return __async(this, null, function* () {
      return yield Ye({
        publicKey: e3,
        mediation: "conditional",
        signal: this.createAbortSignal()
      });
    });
  }
  createWebauthnCredential(e3) {
    return __async(this, null, function* () {
      return yield function(e4) {
        return __async(this, null, function* () {
          return t2 = yield navigator.credentials.create(function(e5) {
            return He(Me, Ve, e5);
          }(e4)), He(Ue, $e, t2);
          var t2;
        });
      }(Z({}, e3, {
        signal: this.createAbortSignal()
      }));
    });
  }
};
function Ge(e3, t2, n2, o2 = "webauthn_credential_already_exists", a2 = "Webauthn credential already exists") {
  return __async(this, null, function* () {
    try {
      const o3 = yield t2.createWebauthnCredential(n2);
      return yield e3.actions.webauthn_verify_attestation_response.run({
        public_key: o3
      });
    } catch (t3) {
      const n3 = yield e3.actions.back.run();
      return n3.error = {
        code: o2,
        message: a2
      }, n3;
    }
  });
}
Xe.instance = null;
var et = {
  preflight: (e3) => __async(null, null, function* () {
    return yield e3.actions.register_client_capabilities.run({
      webauthn_available: Le.supported(),
      webauthn_conditional_mediation_available: yield Le.isConditionalMediationAvailable(),
      webauthn_platform_authenticator_available: yield Le.isPlatformAuthenticatorAvailable()
    });
  }),
  login_passkey: (e3) => __async(null, null, function* () {
    const t2 = Xe.getInstance();
    try {
      const n2 = yield t2.getWebauthnCredential(e3.payload.request_options);
      return yield e3.actions.webauthn_verify_assertion_response.run({
        assertion_response: n2
      });
    } catch (t3) {
      const n2 = yield e3.actions.back.run();
      return e3.error && (n2.error = e3.error), n2;
    }
  }),
  onboarding_verify_passkey_attestation: (e3) => __async(null, null, function* () {
    return Ge(e3, Xe.getInstance(), e3.payload.creation_options);
  }),
  webauthn_credential_verification: (e3) => __async(null, null, function* () {
    return Ge(e3, Xe.getInstance(), e3.payload.creation_options);
  }),
  thirdparty(e3) {
    return __async(this, null, function* () {
      const t2 = new URLSearchParams(window.location.search), n2 = t2.get("hanko_token"), o2 = t2.get("error"), a2 = (e4) => {
        e4.forEach((e5) => t2.delete(e5));
        const n3 = t2.toString() ? `?${t2.toString()}` : "";
        history.replaceState(null, null, `${window.location.pathname}${n3}`);
      };
      if ((null == n2 ? void 0 : n2.length) > 0) return a2(["hanko_token"]), yield e3.actions.exchange_token.run({
        token: n2
      });
      if ((null == o2 ? void 0 : o2.length) > 0) {
        const n3 = "access_denied" === o2 ? "third_party_access_denied" : "technical_error", i2 = t2.get("error_description");
        a2(["error", "error_description"]);
        const r2 = yield e3.actions.back.run(null, {
          dispatchAfterStateChangeEvent: false
        });
        return r2.error = {
          code: n3,
          message: i2
        }, r2.dispatchAfterStateChangeEvent(), r2;
      }
      return e3.isCached ? yield e3.actions.back.run() : (e3.saveToLocalStorage(), window.location.assign(e3.payload.redirect_url), e3);
    });
  },
  success: (e3) => __async(null, null, function* () {
    const {
      claims: t2
    } = e3.payload, n2 = Date.parse(t2.expiration) - Date.now();
    return e3.removeFromLocalStorage(), e3.hanko.relay.dispatchSessionCreatedEvent({
      claims: t2,
      expirationSeconds: n2
    }), e3;
  }),
  account_deleted: (e3) => __async(null, null, function* () {
    return e3.removeFromLocalStorage(), e3.hanko.relay.dispatchUserDeletedEvent(), e3;
  })
};
var tt = {
  login_init: (e3) => __async(null, null, function* () {
    !function() {
      return __async(this, null, function* () {
        const t2 = Xe.getInstance();
        if (e3.payload.request_options) try {
          const {
            publicKey: n2
          } = e3.payload.request_options, o2 = yield t2.getConditionalWebauthnCredential(n2);
          yield e3.actions.webauthn_verify_assertion_response.run({
            assertion_response: o2
          });
        } catch (e4) {
          return;
        }
      });
    }();
  })
};
var nt = class _nt {
  constructor(e3, t2, n2, o2 = {}) {
    if (this.name = void 0, this.flowName = void 0, this.error = void 0, this.payload = void 0, this.actions = void 0, this.csrfToken = void 0, this.status = void 0, this.previousAction = void 0, this.isCached = void 0, this.cacheKey = void 0, this.hanko = void 0, this.invokedAction = void 0, this.excludeAutoSteps = void 0, this.autoStep = void 0, this.passkeyAutofillActivation = void 0, this.flowName = t2, this.name = n2.name, this.error = n2.error, this.payload = n2.payload, this.csrfToken = n2.csrf_token, this.status = n2.status, this.hanko = e3, this.actions = this.buildActionMap(n2.actions), this.name in et) {
      const e4 = et[this.name];
      this.autoStep = () => e4(this);
    }
    if (this.name in tt) {
      const e4 = tt[this.name];
      this.passkeyAutofillActivation = () => e4(this);
    }
    const {
      dispatchAfterStateChangeEvent: a2 = true,
      excludeAutoSteps: i2 = null,
      previousAction: r2 = null,
      isCached: s2 = false,
      cacheKey: c2 = "hanko-flow-state"
    } = o2;
    this.excludeAutoSteps = i2, this.previousAction = r2, this.isCached = s2, this.cacheKey = c2, a2 && this.dispatchAfterStateChangeEvent();
  }
  buildActionMap(e3) {
    const t2 = {};
    return Object.keys(e3).forEach((n2) => {
      t2[n2] = new ot(e3[n2], this);
    }), new Proxy(t2, {
      get: (e4, t3) => {
        if (t3 in e4) return e4[t3];
        const n2 = "string" == typeof t3 ? t3 : t3.toString();
        return ot.createDisabled(n2, this);
      }
    });
  }
  dispatchAfterStateChangeEvent() {
    this.hanko.relay.dispatchAfterStateChangeEvent({
      state: this
    });
  }
  serialize() {
    return {
      flow_name: this.flowName,
      name: this.name,
      error: this.error,
      payload: this.payload,
      csrf_token: this.csrfToken,
      status: this.status,
      previous_action: this.previousAction,
      actions: Object.fromEntries(Object.entries(this.actions).map(([e3, t2]) => [e3, {
        action: t2.name,
        href: t2.href,
        inputs: t2.inputs,
        description: null
      }]))
    };
  }
  saveToLocalStorage() {
    localStorage.setItem(this.cacheKey, JSON.stringify(Z({}, this.serialize(), {
      is_cached: true
    })));
  }
  removeFromLocalStorage() {
    localStorage.removeItem(this.cacheKey);
  }
  static initializeFlowState(_0, _1, _2) {
    return __async(this, arguments, function* (e3, t2, n2, o2 = {}) {
      let a2 = new _nt(e3, t2, n2, o2);
      if ("all" != a2.excludeAutoSteps) for (; a2 && a2.autoStep && (null == (i2 = a2.excludeAutoSteps) || !i2.includes(a2.name)); ) {
        var i2;
        const e4 = yield a2.autoStep();
        if (e4.name == a2.name) return e4;
        a2 = e4;
      }
      return a2;
    });
  }
  static readFromLocalStorage(e3) {
    const t2 = localStorage.getItem(e3);
    if (t2) try {
      return JSON.parse(t2);
    } catch (e4) {
      return;
    }
  }
  static create(_0, _1) {
    return __async(this, arguments, function* (e3, t2, n2 = {}) {
      const {
        cacheKey: o2 = "hanko-flow-state",
        loadFromCache: a2 = true
      } = n2;
      if (a2) {
        const t3 = _nt.readFromLocalStorage(o2);
        if (t3) return _nt.deserialize(e3, t3, Z({}, n2, {
          cacheKey: o2
        }));
      }
      const i2 = yield _nt.fetchState(e3, `/${t2}`);
      return _nt.initializeFlowState(e3, t2, i2, Z({}, n2, {
        cacheKey: o2
      }));
    });
  }
  static deserialize(_0, _1) {
    return __async(this, arguments, function* (e3, t2, n2 = {}) {
      return _nt.initializeFlowState(e3, t2.flow_name, t2, Z({}, n2, {
        previousAction: t2.previous_action,
        isCached: t2.is_cached
      }));
    });
  }
  static fetchState(e3, t2, n2) {
    return __async(this, null, function* () {
      try {
        return (yield e3.client.post(t2, n2)).json();
      } catch (e4) {
        return _nt.createErrorResponse(e4);
      }
    });
  }
  static createErrorResponse(e3) {
    return {
      actions: null,
      csrf_token: "",
      name: "error",
      payload: null,
      status: 0,
      error: e3
    };
  }
};
var ot = class _ot {
  constructor(e3, t2, n2 = true) {
    this.enabled = void 0, this.href = void 0, this.name = void 0, this.inputs = void 0, this.parentState = void 0, this.enabled = n2, this.href = e3.href, this.name = e3.action, this.inputs = e3.inputs, this.parentState = t2;
  }
  static createDisabled(e3, t2) {
    return new _ot({
      action: e3,
      href: "",
      inputs: {},
      description: "Disabled action"
    }, t2, false);
  }
  run() {
    return __async(this, arguments, function* (e3 = null, t2 = {}) {
      const {
        name: n2,
        hanko: o2,
        flowName: a2,
        csrfToken: i2,
        invokedAction: r2,
        excludeAutoSteps: s2,
        cacheKey: c2
      } = this.parentState, {
        dispatchAfterStateChangeEvent: l2 = true
      } = t2;
      if (!this.enabled) throw new Error(`Action '${this.name}' is not enabled in state '${n2}'`);
      if (r2) throw new Error(`An action '${r2.name}' has already been invoked on state '${r2.relatedStateName}'. No further actions can be run.`);
      this.parentState.invokedAction = {
        name: this.name,
        relatedStateName: n2
      }, o2.relay.dispatchBeforeStateChangeEvent({
        state: this.parentState
      });
      const d2 = {
        input_data: Z({}, Object.keys(this.inputs).reduce((e4, t3) => {
          const n3 = this.inputs[t3];
          return void 0 !== n3.value && (e4[t3] = n3.value), e4;
        }, {}), e3),
        csrf_token: i2
      }, u2 = yield nt.fetchState(o2, this.href, d2);
      return this.parentState.removeFromLocalStorage(), nt.initializeFlowState(o2, a2, u2, {
        dispatchAfterStateChangeEvent: l2,
        excludeAutoSteps: s2,
        previousAction: r2,
        cacheKey: c2
      });
    });
  }
};
var at = class extends Ie {
  getCurrent() {
    return __async(this, null, function* () {
      const e3 = yield this.client.get("/me");
      if (401 === e3.status) throw this.client.dispatcher.dispatchSessionExpiredEvent(), new _e();
      if (!e3.ok) throw new ae();
      const t2 = e3.json(), n2 = yield this.client.get(`/users/${t2.id}`);
      if (401 === n2.status) throw this.client.dispatcher.dispatchSessionExpiredEvent(), new _e();
      if (!n2.ok) throw new ae();
      return n2.json();
    });
  }
  logout() {
    return __async(this, null, function* () {
      const e3 = yield this.client.post("/logout");
      if (this.client.sessionTokenStorage.removeSessionToken(), this.client.cookie.removeAuthCookie(), this.client.dispatcher.dispatchUserLoggedOutEvent(), 401 !== e3.status && !e3.ok) throw new ae();
    });
  }
};
var it = class extends te {
  constructor(e3, t2) {
    super(), this.session = void 0, this.user = void 0, this.cookie = void 0, this.client = void 0, this.relay = void 0;
    const n2 = Z({
      timeout: 13e3,
      cookieName: "hanko",
      localStorageKey: "hanko",
      sessionCheckInterval: 3e4,
      sessionCheckChannelName: "hanko-session-check"
    }, t2);
    this.client = new Oe(e3, n2), this.session = new je(e3, n2), this.user = new at(e3, n2), this.relay = new Ne(e3, n2), this.cookie = new Se(n2);
  }
  setLang(e3) {
    this.client.lang = e3;
  }
  createState(e3, t2 = {}) {
    return nt.create(this, e3, t2);
  }
  getUser() {
    return __async(this, null, function* () {
      return this.user.getCurrent();
    });
  }
  validateSession() {
    return __async(this, null, function* () {
      return this.session.validate();
    });
  }
  getSessionToken() {
    return this.cookie.getAuthCookie();
  }
  logout() {
    return __async(this, null, function* () {
      return this.user.logout();
    });
  }
};
var rt = n(292);
var st = n.n(rt);
var ct = n(360);
var lt = n.n(ct);
var dt = n(884);
var ut = n.n(dt);
var ht = n(88);
var pt = n.n(ht);
var ft = n(914);
var _t = {};
_t.setAttributes = ut(), _t.insert = (e3) => {
  window._hankoStyle = e3;
}, _t.domAPI = lt(), _t.insertStyleElement = pt(), st()(ft.A, _t);
var vt = ft.A && ft.A.locals ? ft.A.locals : void 0;
var mt = function(e3) {
  function t2(t3) {
    var n2 = b({}, t3);
    return delete n2.ref, e3(n2, t3.ref || null);
  }
  return t2.$$typeof = S, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e3.displayName || e3.name) + ")", t2;
}((e3, t2) => {
  const {
    lang: n2,
    hanko: o2,
    setHanko: a2
  } = (0, g.useContext)(Do), {
    setLang: i2
  } = (0, g.useContext)(m.TranslateContext);
  return (0, g.useEffect)(() => {
    i2(n2.replace(/[-]/, "")), a2((e4) => (e4.setLang(n2), e4));
  }, [o2, n2, a2, i2]), s("section", Object.assign({
    part: "container",
    className: vt.container,
    ref: t2
  }, {
    children: e3.children
  }));
});
var gt = n(697);
var bt = {};
bt.setAttributes = ut(), bt.insert = (e3) => {
  window._hankoStyle = e3;
}, bt.domAPI = lt(), bt.insertStyleElement = pt(), st()(gt.A, bt);
var yt = gt.A && gt.A.locals ? gt.A.locals : void 0;
var kt = n(633);
var wt = n.n(kt);
var St = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-apple",
  xmlns: "http://www.w3.org/2000/svg",
  width: e3,
  height: e3,
  viewBox: "20.5 16 15 19",
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"
  })
}));
var xt = ({
  secondary: e3,
  size: t2,
  fadeOut: n2,
  disabled: o2
}) => s("svg", Object.assign({
  id: "icon-checkmark",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "4 4 40 40",
  width: t2,
  height: t2,
  className: wt()(yt.checkmark, e3 && yt.secondary, n2 && yt.fadeOut, o2 && yt.disabled)
}, {
  children: s("path", {
    d: "M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"
  })
}));
var Ct = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
  })
}));
var At = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-custom-provider",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: [s("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), s("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
  })]
}));
var Ot = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-discord",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg",
  width: e3,
  height: e3,
  viewBox: "0 0 127.14 96.36",
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
  })
}));
var It = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-exclamation",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "5 2 13 20",
  width: e3,
  height: e3,
  className: wt()(yt.exclamationMark, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
  })
}));
var jt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  width: e3,
  height: e3,
  viewBox: "0 0 666.66668 666.66717",
  xmlns: "http://www.w3.org/2000/svg"
}, {
  children: [s("defs", Object.assign({
    id: "defs13"
  }, {
    children: s("clipPath", Object.assign({
      clipPathUnits: "userSpaceOnUse",
      id: "clipPath25"
    }, {
      children: s("path", {
        d: "M 0,700 H 700 V 0 H 0 Z",
        id: "path23"
      })
    }))
  })), s("g", Object.assign({
    id: "g17",
    transform: "matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"
  }, {
    children: s("g", Object.assign({
      id: "g19"
    }, {
      children: s("g", Object.assign({
        id: "g21",
        clipPath: "url(#clipPath25)"
      }, {
        children: [s("g", Object.assign({
          id: "g27",
          transform: "translate(600,350)"
        }, {
          children: s("path", {
            className: wt()(yt.facebookIcon, n2 ? yt.disabledOutline : yt.outline),
            d: "m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0",
            id: "path29"
          })
        })), s("g", Object.assign({
          id: "g31",
          transform: "translate(447.9175,273.6036)"
        }, {
          children: s("path", {
            className: wt()(yt.facebookIcon, n2 ? yt.disabledLetter : yt.letter),
            d: "M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z",
            id: "path33"
          })
        }))]
      }))
    }))
  }))]
}));
var Et = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-github",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#fff",
  viewBox: "0 0 97.63 96",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: [s("path", {
    d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
  }), " "]
}));
var Pt = ({
  size: e3,
  disabled: t2
}) => s("svg", Object.assign({
  id: "icon-google",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: e3,
  height: e3,
  className: yt.googleIcon
}, {
  children: [s("path", {
    className: wt()(yt.googleIcon, t2 ? yt.disabled : yt.blue),
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), s("path", {
    className: wt()(yt.googleIcon, t2 ? yt.disabled : yt.green),
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), s("path", {
    className: wt()(yt.googleIcon, t2 ? yt.disabled : yt.yellow),
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  }), s("path", {
    className: wt()(yt.googleIcon, t2 ? yt.disabled : yt.red),
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  }), s("path", {
    d: "M1 1h22v22H1z",
    fill: "none"
  })]
}));
var Dt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-linkedin",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg",
  width: e3,
  viewBox: "0 0 24 24",
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
  })
}));
var Tt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-mail",
  xmlns: "http://www.w3.org/2000/svg",
  width: e3,
  height: e3,
  viewBox: "0 -960 960 960",
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
  })
}));
var Nt = ({
  size: e3,
  disabled: t2
}) => s("svg", Object.assign({
  id: "icon-microsoft",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: e3,
  height: e3,
  className: yt.microsoftIcon
}, {
  children: [s("rect", {
    className: wt()(yt.microsoftIcon, t2 ? yt.disabled : yt.blue),
    x: "1",
    y: "1",
    width: "9",
    height: "9"
  }), s("rect", {
    className: wt()(yt.microsoftIcon, t2 ? yt.disabled : yt.green),
    x: "1",
    y: "11",
    width: "9",
    height: "9"
  }), s("rect", {
    className: wt()(yt.microsoftIcon, t2 ? yt.disabled : yt.yellow),
    x: "11",
    y: "1",
    width: "9",
    height: "9"
  }), s("rect", {
    className: wt()(yt.microsoftIcon, t2 ? yt.disabled : yt.red),
    x: "11",
    y: "11",
    width: "9",
    height: "9"
  })]
}));
var Lt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-passkey",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "3 1.5 19.5 19",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("g", Object.assign({
    id: "icon-passkey-all"
  }, {
    children: [s("circle", {
      id: "icon-passkey-head",
      cx: "10.5",
      cy: "6",
      r: "4.5"
    }), s("path", {
      id: "icon-passkey-key",
      d: "M22.5,10.5a3.5,3.5,0,1,0-5,3.15V19L19,20.5,21.5,18,20,16.5,21.5,15l-1.24-1.24A3.5,3.5,0,0,0,22.5,10.5Zm-3.5,0a1,1,0,1,1,1-1A1,1,0,0,1,19,10.5Z"
    }), s("path", {
      id: "icon-passkey-body",
      d: "M14.44,12.52A6,6,0,0,0,12,12H9a6,6,0,0,0-6,6v2H16V14.49A5.16,5.16,0,0,1,14.44,12.52Z"
    })]
  }))
}));
var Mt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  id: "icon-password",
  xmlns: "http://www.w3.org/2000/svg",
  width: e3,
  height: e3,
  viewBox: "0 -960 960 960",
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"
  })
}));
var Ut = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"
  })
}));
var Wt = ({
  size: e3,
  secondary: t2,
  disabled: n2
}) => s("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -960 960 960",
  width: e3,
  height: e3,
  className: wt()(yt.icon, t2 && yt.secondary, n2 && yt.disabled)
}, {
  children: s("path", {
    d: "M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h432v240h-80v120H600v-120H488q-32 54-87 87t-121 33Zm0-80q66 0 106-40.5t48-79.5h246v120h80v-120h80v-80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Z"
  })
}));
var Ft = ({
  size: e3,
  disabled: t2
}) => s("svg", Object.assign({
  id: "icon-spinner",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: e3,
  height: e3,
  className: wt()(yt.loadingSpinner, t2 && yt.disabled)
}, {
  children: [s("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
  }), s("path", {
    d: "M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
  })]
}));
var Ht = ({
  name: e3,
  secondary: t2,
  size: n2 = 18,
  fadeOut: o2,
  disabled: i2
}) => s(a[e3], {
  size: n2,
  secondary: t2,
  fadeOut: o2,
  disabled: i2
});
var qt = ({
  children: e3,
  isLoading: t2,
  isSuccess: n2,
  fadeOut: o2,
  secondary: a2,
  hasIcon: r2,
  maxWidth: c2
}) => s(i.Fragment, {
  children: s("div", t2 ? Object.assign({
    className: wt()(yt.loadingSpinnerWrapper, yt.centerContent, c2 && yt.maxWidth)
  }, {
    children: s(Ht, {
      name: "spinner",
      secondary: a2
    })
  }) : n2 ? Object.assign({
    className: wt()(yt.loadingSpinnerWrapper, yt.centerContent, c2 && yt.maxWidth)
  }, {
    children: s(Ht, {
      name: "checkmark",
      secondary: a2,
      fadeOut: o2
    })
  }) : Object.assign({
    className: r2 ? yt.loadingSpinnerWrapperIcon : yt.loadingSpinnerWrapper
  }, {
    children: e3
  }))
});
var Rt = () => s(qt, {
  isLoading: true
});
var zt = (e3) => {
  const [t2, n2] = (0, g.useState)(e3);
  return (0, g.useEffect)(() => {
    e3 && n2(e3);
  }, [e3]), {
    flowState: t2
  };
};
var Kt = n(577);
var Bt = {};
Bt.setAttributes = ut(), Bt.insert = (e3) => {
  window._hankoStyle = e3;
}, Bt.domAPI = lt(), Bt.insertStyleElement = pt(), st()(Kt.A, Bt);
var Zt = Kt.A && Kt.A.locals ? Kt.A.locals : void 0;
var Vt = () => {
  const {
    t: e3
  } = (0, g.useContext)(m.TranslateContext);
  return s("span", Object.assign({
    className: wt()(Zt.lastUsed)
  }, {
    children: e3("labels.lastUsed")
  }));
};
var $t = (e3, t2, n2) => {
  const {
    hanko: o2,
    setUIState: a2,
    isOwnFlow: i2
  } = (0, g.useContext)(Do);
  (0, g.useEffect)(() => o2.onBeforeStateChange(({
    state: n3
  }) => {
    e3 && i2(n3) && (a2((e4) => Object.assign(Object.assign({}, e4), {
      isDisabled: true,
      error: void 0
    })), t2(n3.invokedAction.name == e3.name));
  }), [e3, o2, i2, t2, a2]), (0, g.useEffect)(() => o2.onAfterStateChange(({
    state: o3
  }) => {
    var a3;
    e3 && i2(o3) && (n2((null === (a3 = o3.previousAction) || void 0 === a3 ? void 0 : a3.name) == e3.name), t2(false));
  }), [o2, n2, t2, e3, i2]);
};
var Jt = (0, i.createContext)({});
var Qt = ({
  onSubmit: e3,
  children: t2,
  hidden: n2 = false,
  maxWidth: o2,
  flowAction: a2
}) => s(Jt.Provider, Object.assign({
  value: {
    flowAction: a2
  }
}, {
  children: a2 && a2.enabled && !n2 ? s("form", Object.assign({
    onSubmit: e3 || ((e4) => {
      return t3 = void 0, n3 = void 0, i2 = function* () {
        return e4.preventDefault(), yield a2.run();
      }, new ((o3 = void 0) || (o3 = Promise))(function(e5, a3) {
        function r2(e6) {
          try {
            c2(i2.next(e6));
          } catch (e7) {
            a3(e7);
          }
        }
        function s2(e6) {
          try {
            c2(i2.throw(e6));
          } catch (e7) {
            a3(e7);
          }
        }
        function c2(t4) {
          var n4;
          t4.done ? e5(t4.value) : (n4 = t4.value, n4 instanceof o3 ? n4 : new o3(function(e6) {
            e6(n4);
          })).then(r2, s2);
        }
        c2((i2 = i2.apply(t3, n3 || [])).next());
      });
      var t3, n3, o3, i2;
    }),
    className: Zt.form
  }, {
    children: s("ul", Object.assign({
      className: Zt.ul
    }, {
      children: (0, i.toChildArray)(t2).map((e4, t3) => s("li", Object.assign({
        part: "form-item",
        className: wt()(Zt.li, o2 ? Zt.maxWidth : null)
      }, {
        children: e4
      }), t3))
    }))
  })) : null
}));
var Yt = (e3) => {
  var {
    title: t2,
    children: n2,
    secondary: o2,
    dangerous: a2,
    autofocus: i2,
    showLastUsed: r2,
    onClick: c2,
    icon: l2,
    showSuccessIcon: d2
  } = e3, u2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["title", "children", "secondary", "dangerous", "autofocus", "showLastUsed", "onClick", "icon", "showSuccessIcon"]);
  const h2 = (0, g.useRef)(null), {
    uiState: p2
  } = (0, g.useContext)(Do), [f2, _2] = (0, g.useState)(false), [v2, m2] = (0, g.useState)(false), {
    flowAction: b2
  } = (0, g.useContext)(Jt);
  $t(b2, _2, m2), (0, g.useEffect)(() => {
    const {
      current: e4
    } = h2;
    e4 && i2 && e4.focus();
  }, [i2]);
  const y2 = (0, g.useMemo)(() => d2 && (v2 || u2.isSuccess), [v2, u2, d2]), k2 = (0, g.useMemo)(() => p2.isDisabled || u2.disabled, [u2, p2]);
  return s("button", Object.assign({
    part: a2 ? "button dangerous-button" : o2 ? "button secondary-button" : "button primary-button",
    title: t2,
    ref: h2,
    type: "submit",
    disabled: k2,
    onClick: c2,
    className: wt()(Zt.button, a2 ? Zt.dangerous : o2 ? Zt.secondary : Zt.primary)
  }, {
    children: s(qt, Object.assign({
      isLoading: f2,
      isSuccess: y2,
      secondary: true,
      hasIcon: !!l2,
      maxWidth: true
    }, {
      children: [l2 ? s(Ht, {
        name: l2,
        secondary: o2,
        disabled: k2
      }) : null, s("div", Object.assign({
        className: Zt.caption
      }, {
        children: [s("span", {
          children: n2
        }), r2 ? s(Vt, {}) : null]
      }))]
    }))
  }));
};
var Xt = (e3) => {
  var t2, n2, o2, a2, i2, {
    label: r2
  } = e3, c2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["label"]);
  const l2 = (0, g.useRef)(null), {
    uiState: d2
  } = (0, g.useContext)(Do), {
    t: u2
  } = (0, g.useContext)(m.TranslateContext), h2 = (0, g.useMemo)(() => d2.isDisabled || c2.disabled, [c2, d2]);
  (0, g.useEffect)(() => {
    const {
      current: e4
    } = l2;
    e4 && c2.autofocus && (e4.focus(), e4.select());
  }, [c2.autofocus]);
  const p2 = (0, g.useMemo)(() => {
    var e4;
    return c2.markOptional && !(null === (e4 = c2.flowInput) || void 0 === e4 ? void 0 : e4.required) ? `${c2.placeholder} (${u2("labels.optional")})` : c2.placeholder;
  }, [c2.markOptional, c2.placeholder, c2.flowInput, u2]);
  return s("div", Object.assign({
    className: Zt.inputWrapper
  }, {
    children: s("input", Object.assign({
      part: "input text-input",
      required: null === (t2 = c2.flowInput) || void 0 === t2 ? void 0 : t2.required,
      maxLength: null === (n2 = c2.flowInput) || void 0 === n2 ? void 0 : n2.max_length,
      minLength: null === (o2 = c2.flowInput) || void 0 === o2 ? void 0 : o2.min_length,
      hidden: null === (a2 = c2.flowInput) || void 0 === a2 ? void 0 : a2.hidden
    }, c2, {
      ref: l2,
      "aria-label": p2,
      placeholder: p2,
      className: wt()(Zt.input, !!(null === (i2 = c2.flowInput) || void 0 === i2 ? void 0 : i2.error) && c2.markError && Zt.error),
      disabled: h2
    }))
  }));
};
var Gt = ({
  children: e3
}) => s("section", Object.assign({
  className: vt.content
}, {
  children: e3
}));
var en = n(111);
var tn = {};
tn.setAttributes = ut(), tn.insert = (e3) => {
  window._hankoStyle = e3;
}, tn.domAPI = lt(), tn.insertStyleElement = pt(), st()(en.A, tn);
var nn = en.A && en.A.locals ? en.A.locals : void 0;
var on = ({
  children: e3,
  hidden: t2
}) => t2 ? null : s("section", Object.assign({
  part: "divider",
  className: nn.divider
}, {
  children: [s("div", {
    part: "divider-line",
    className: nn.line
  }), e3 ? s("div", Object.assign({
    part: "divider-text",
    class: nn.text
  }, {
    children: e3
  })) : null, s("div", {
    part: "divider-line",
    className: nn.line
  })]
}));
var an = n(905);
var rn = {};
rn.setAttributes = ut(), rn.insert = (e3) => {
  window._hankoStyle = e3;
}, rn.domAPI = lt(), rn.insertStyleElement = pt(), st()(an.A, rn);
var sn = an.A && an.A.locals ? an.A.locals : void 0;
var cn = ({
  state: e3,
  error: t2,
  flowError: n2
}) => {
  var o2, a2;
  const {
    t: i2
  } = (0, g.useContext)(m.TranslateContext), {
    uiState: r2,
    setUIState: c2
  } = (0, g.useContext)(Do);
  return (0, g.useEffect)(() => {
    var t3, n3;
    if ("form_data_invalid_error" == (null === (t3 = null == e3 ? void 0 : e3.error) || void 0 === t3 ? void 0 : t3.code)) for (const t4 of Object.values(null == e3 ? void 0 : e3.actions)) {
      let o3 = false;
      for (const e4 of Object.values(null == t4 ? void 0 : t4.inputs)) if (null === (n3 = e4.error) || void 0 === n3 ? void 0 : n3.code) return c2(Object.assign(Object.assign({}, r2), {
        error: e4.error
      })), void (o3 = true);
      o3 || c2(Object.assign(Object.assign({}, r2), {
        error: e3.error
      }));
    }
    else (null == e3 ? void 0 : e3.error) && c2(Object.assign(Object.assign({}, r2), {
      error: null == e3 ? void 0 : e3.error
    }));
  }, [e3]), s("section", Object.assign({
    part: "error",
    className: sn.errorBox,
    hidden: !(null === (o2 = r2.error) || void 0 === o2 ? void 0 : o2.code) && !(null == n2 ? void 0 : n2.code) && !t2
  }, {
    children: [s("span", {
      children: s(Ht, {
        name: "exclamation",
        size: 15
      })
    }), s("span", Object.assign({
      id: "errorMessage",
      part: "error-text"
    }, {
      children: i2(t2 ? `errors.${t2.code}` : `flowErrors.${(null === (a2 = r2.error) || void 0 === a2 ? void 0 : a2.code) || (null == n2 ? void 0 : n2.code)}`)
    }))]
  }));
};
var ln = n(619);
var dn = {};
dn.setAttributes = ut(), dn.insert = (e3) => {
  window._hankoStyle = e3;
}, dn.domAPI = lt(), dn.insertStyleElement = pt(), st()(ln.A, dn);
var un = ln.A && ln.A.locals ? ln.A.locals : void 0;
var hn = ({
  children: e3
}) => s("h1", Object.assign({
  part: "headline1",
  className: wt()(un.headline, un.grade1)
}, {
  children: e3
}));
var pn = n(995);
var fn = {};
fn.setAttributes = ut(), fn.insert = (e3) => {
  window._hankoStyle = e3;
}, fn.domAPI = lt(), fn.insertStyleElement = pt(), st()(pn.A, fn);
var _n = pn.A && pn.A.locals ? pn.A.locals : void 0;
var vn = (e3) => {
  var {
    loadingSpinnerPosition: t2,
    dangerous: n2 = false,
    onClick: o2,
    flowAction: a2
  } = e3, r2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["loadingSpinnerPosition", "dangerous", "onClick", "flowAction"]);
  const {
    t: c2
  } = (0, g.useContext)(m.TranslateContext), {
    uiState: l2
  } = (0, g.useContext)(Do), [d2, u2] = (0, g.useState)(), [h2, p2] = (0, g.useState)(false), [f2, _2] = (0, g.useState)(false);
  let v2;
  o2 || (o2 = (e4) => {
    return t3 = void 0, n3 = void 0, i2 = function* () {
      return e4.preventDefault(), yield null == a2 ? void 0 : a2.run();
    }, new ((o3 = void 0) || (o3 = Promise))(function(e5, a3) {
      function r3(e6) {
        try {
          c3(i2.next(e6));
        } catch (e7) {
          a3(e7);
        }
      }
      function s2(e6) {
        try {
          c3(i2.throw(e6));
        } catch (e7) {
          a3(e7);
        }
      }
      function c3(t4) {
        var n4;
        t4.done ? e5(t4.value) : (n4 = t4.value, n4 instanceof o3 ? n4 : new o3(function(e6) {
          e6(n4);
        })).then(r3, s2);
      }
      c3((i2 = i2.apply(t3, n3 || [])).next());
    });
    var t3, n3, o3, i2;
  }), $t(a2, p2, _2);
  const b2 = (e4) => {
    e4.preventDefault(), u2(true);
  }, y2 = (e4) => {
    e4.preventDefault(), u2(false);
  }, k2 = (0, g.useMemo)(() => h2 || r2.isLoading, [h2, r2]), w2 = (0, g.useMemo)(() => f2 || r2.isSuccess, [f2, r2]), S2 = (0, g.useMemo)(() => a2 && !a2.enabled || r2.hidden, [a2, r2]), x2 = (0, g.useCallback)((e4) => {
    e4.preventDefault(), u2(false), o2(e4);
  }, [o2]), C2 = (0, g.useCallback)(() => S2 ? null : s(i.Fragment, {
    children: [d2 ? s(i.Fragment, {
      children: [s(vn, Object.assign({
        onClick: x2
      }, {
        children: c2("labels.yes")
      })), " / ", s(vn, Object.assign({
        onClick: y2
      }, {
        children: c2("labels.no")
      })), " "]
    }) : null, s("button", Object.assign({}, r2, {
      onClick: n2 ? b2 : o2,
      disabled: d2 || r2.disabled || l2.isDisabled,
      part: "link",
      className: wt()(_n.link, n2 ? _n.danger : null)
    }, {
      children: r2.children
    }))]
  }), [S2, l2, d2, n2, o2, x2, r2, c2]);
  return s(i.Fragment, {
    children: s("span", Object.assign({
      className: wt()(_n.linkWrapper, "right" === t2 ? _n.reverse : null),
      onMouseEnter: () => {
        v2 && window.clearTimeout(v2);
      },
      onMouseLeave: () => {
        v2 = window.setTimeout(() => {
          u2(false);
        }, 1e3);
      }
    }, {
      children: s(i.Fragment, d2 || !k2 && !w2 ? {
        children: C2()
      } : {
        children: [s(qt, {
          isLoading: k2,
          isSuccess: w2,
          secondary: r2.secondary,
          fadeOut: true
        }), C2()]
      })
    }))
  });
};
var mn = vn;
var gn = ({
  children: e3,
  hidden: t2 = false
}) => t2 ? null : s("section", Object.assign({
  className: vt.footer
}, {
  children: e3
}));
var bn = (e3) => {
  var {
    label: t2
  } = e3, n2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["label"]);
  const {
    uiState: o2
  } = (0, g.useContext)(Do), a2 = (0, g.useMemo)(() => o2.isDisabled || n2.disabled, [n2, o2]);
  return s("div", Object.assign({
    className: Zt.inputWrapper
  }, {
    children: s("label", Object.assign({
      className: Zt.checkboxWrapper
    }, {
      children: [s("input", Object.assign({
        part: "input checkbox-input",
        type: "checkbox",
        "aria-label": t2,
        className: Zt.checkbox
      }, n2)), s("span", Object.assign({
        className: wt()(Zt.label, a2 ? Zt.disabled : null)
      }, {
        children: t2
      }))]
    }))
  }));
};
var yn = () => s("section", {
  className: nn.spacer
});
var kn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var wn = (e3) => {
  var t2;
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext), {
    init: o2,
    initialComponentName: a2,
    uiState: r2,
    setUIState: c2,
    hidePasskeyButtonOnLogin: l2,
    lastLogin: d2
  } = (0, g.useContext)(Do), [u2, h2] = (0, g.useState)(false), [p2, f2] = (0, g.useState)(null), [_2, v2] = (0, g.useState)(r2.username || r2.email), {
    flowState: b2
  } = zt(e3.state), y2 = Le.supported(), [k2, w2] = (0, g.useState)(void 0), [S2, x2] = (0, g.useState)(null), [C2, A2] = (0, g.useState)(false), O2 = (e4) => {
    if (e4.preventDefault(), e4.target instanceof HTMLInputElement) {
      const {
        value: t3
      } = e4.target;
      v2(t3), I2(t3);
    }
  }, I2 = (e4) => {
    const t3 = () => c2((t4) => Object.assign(Object.assign({}, t4), {
      email: e4,
      username: null
    })), n3 = () => c2((t4) => Object.assign(Object.assign({}, t4), {
      email: null,
      username: e4
    }));
    switch (p2) {
      case "email":
        t3();
        break;
      case "username":
        n3();
        break;
      case "identifier":
        e4.match(/^[^@]+@[^@]+\.[^@]+$/) ? t3() : n3();
    }
  }, j2 = (0, g.useMemo)(() => !!b2.actions.webauthn_generate_request_options.enabled || !!b2.actions.thirdparty_oauth.enabled, [b2.actions]), E2 = b2.actions.continue_with_login_identifier.inputs;
  return (0, g.useEffect)(() => {
    const e4 = b2.actions.continue_with_login_identifier.inputs;
    f2((null == e4 ? void 0 : e4.email) ? "email" : (null == e4 ? void 0 : e4.username) ? "username" : "identifier");
  }, [b2]), s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: n2("headlines.signIn")
      }), s(cn, {
        state: b2,
        error: k2
      }), E2 ? s(i.Fragment, {
        children: [s(Qt, Object.assign({
          flowAction: b2.actions.continue_with_login_identifier,
          onSubmit: (e4) => kn(void 0, void 0, void 0, function* () {
            return e4.preventDefault(), I2(_2), b2.actions.continue_with_login_identifier.run({
              [p2]: _2
            });
          }),
          maxWidth: true
        }, {
          children: [E2.email ? s(Xt, {
            type: "email",
            autoComplete: "username webauthn",
            autoCorrect: "off",
            flowInput: E2.email,
            onInput: O2,
            value: _2,
            placeholder: n2("labels.email"),
            pattern: "^[^@]+@[^@]+\\.[^@]+$"
          }) : E2.username ? s(Xt, {
            type: "text",
            autoComplete: "username webauthn",
            autoCorrect: "off",
            flowInput: E2.username,
            onInput: O2,
            value: _2,
            placeholder: n2("labels.username")
          }) : s(Xt, {
            type: "text",
            autoComplete: "username webauthn",
            autoCorrect: "off",
            flowInput: E2.identifier,
            onInput: O2,
            value: _2,
            placeholder: n2("labels.emailOrUsername")
          }), s(Yt, {
            children: n2("labels.continue")
          })]
        })), s(on, Object.assign({
          hidden: !j2
        }, {
          children: n2("labels.or")
        }))]
      }) : null, b2.actions.webauthn_generate_request_options.enabled && !l2 ? s(Qt, Object.assign({
        flowAction: b2.actions.webauthn_generate_request_options
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          title: y2 ? null : n2("labels.webauthnUnsupported"),
          disabled: !y2,
          icon: "passkey"
        }, {
          children: n2("labels.signInPasskey")
        }))
      })) : null, b2.actions.thirdparty_oauth.enabled ? null === (t2 = b2.actions.thirdparty_oauth.inputs.provider.allowed_values) || void 0 === t2 ? void 0 : t2.map((e4) => s(Qt, Object.assign({
        flowAction: b2.actions.thirdparty_oauth,
        onSubmit: (t3) => ((e5, t4) => kn(void 0, void 0, void 0, function* () {
          e5.preventDefault(), x2(t4);
          const n3 = yield b2.actions.thirdparty_oauth.run({
            provider: t4,
            redirect_to: window.location.toString()
          });
          return n3.error && x2(null), n3;
        }))(t3, e4.value)
      }, {
        children: s(Yt, Object.assign({
          isLoading: e4.value == S2,
          secondary: true,
          icon: e4.value.startsWith("custom_") ? "customProvider" : e4.value,
          showLastUsed: "third_party" == (null == d2 ? void 0 : d2.login_method) && (null == d2 ? void 0 : d2.third_party_provider) == e4.value
        }, {
          children: n2("labels.signInWith", {
            provider: e4.name
          })
        }))
      }), e4.value)) : null, b2.actions.remember_me.enabled && s(i.Fragment, {
        children: [s(yn, {}), s(bn, {
          required: false,
          type: "checkbox",
          label: n2("labels.staySignedIn"),
          checked: C2,
          onChange: (e4) => kn(void 0, void 0, void 0, function* () {
            return A2((e5) => !e5), b2.actions.remember_me.run({
              remember_me: !C2
            });
          })
        })]
      })]
    }), s(gn, Object.assign({
      hidden: "auth" !== a2
    }, {
      children: [s("span", {
        hidden: true
      }), s(mn, Object.assign({
        onClick: (e4) => kn(void 0, void 0, void 0, function* () {
          e4.preventDefault(), h2(true), o2("registration");
        }),
        loadingSpinnerPosition: "left",
        isLoading: u2
      }, {
        children: n2("labels.dontHaveAnAccount")
      }))]
    }))]
  });
};
var Sn = (e3) => {
  var {
    index: t2,
    focus: n2,
    digit: o2 = ""
  } = e3, a2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["index", "focus", "digit"]);
  const i2 = (0, g.useRef)(null), {
    uiState: r2
  } = (0, g.useContext)(Do), c2 = () => {
    const {
      current: e4
    } = i2;
    e4 && (e4.focus(), e4.select());
  }, l2 = (0, g.useMemo)(() => r2.isDisabled || a2.disabled, [a2, r2]);
  return (0, g.useEffect)(() => {
    0 === t2 && c2();
  }, [t2, a2.disabled]), (0, g.useMemo)(() => {
    n2 && c2();
  }, [n2]), s("div", Object.assign({
    className: Zt.passcodeDigitWrapper
  }, {
    children: s("input", Object.assign({}, a2, {
      part: "input passcode-input",
      "aria-label": `${a2.name}-digit-${t2 + 1}`,
      name: a2.name + t2.toString(10),
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      ref: i2,
      value: o2.charAt(0),
      required: true,
      className: Zt.input,
      disabled: l2
    }))
  }));
};
var xn = ({
  passcodeDigits: e3 = [],
  numberOfInputs: t2 = 6,
  onInput: n2,
  disabled: o2 = false
}) => {
  const [a2, i2] = (0, g.useState)(0), r2 = () => e3.slice(), c2 = () => {
    a2 < t2 - 1 && i2(a2 + 1);
  }, l2 = () => {
    a2 > 0 && i2(a2 - 1);
  }, d2 = (e4) => {
    const t3 = r2();
    t3[a2] = e4.charAt(0), n2(t3);
  }, u2 = (e4) => {
    if (e4.preventDefault(), o2) return;
    const s2 = e4.clipboardData.getData("text/plain").slice(0, t2 - a2).split(""), c3 = r2();
    let l3 = a2;
    for (let e5 = 0; e5 < t2; ++e5) e5 >= a2 && s2.length > 0 && (c3[e5] = s2.shift(), l3++);
    i2(l3), n2(c3);
  }, h2 = (e4) => {
    "Backspace" === e4.key ? (e4.preventDefault(), d2(""), l2()) : "Delete" === e4.key ? (e4.preventDefault(), d2("")) : "ArrowLeft" === e4.key ? (e4.preventDefault(), l2()) : "ArrowRight" === e4.key ? (e4.preventDefault(), c2()) : " " !== e4.key && "Spacebar" !== e4.key && "Space" !== e4.key || e4.preventDefault();
  }, p2 = (e4) => {
    e4.target instanceof HTMLInputElement && d2(e4.target.value), c2();
  };
  return (0, g.useEffect)(() => {
    0 === e3.length && i2(0);
  }, [e3]), s("div", Object.assign({
    className: Zt.passcodeInputWrapper
  }, {
    children: Array.from(Array(t2)).map((t3, n3) => s(Sn, {
      name: "passcode",
      index: n3,
      focus: a2 === n3,
      digit: e3[n3],
      onKeyDown: h2,
      onInput: p2,
      onPaste: u2,
      onFocus: () => ((e4) => {
        i2(e4);
      })(n3),
      disabled: o2
    }, n3))
  }));
};
var Cn = n(489);
var An = {};
An.setAttributes = ut(), An.insert = (e3) => {
  window._hankoStyle = e3;
}, An.domAPI = lt(), An.insertStyleElement = pt(), st()(Cn.A, An);
var On = Cn.A && Cn.A.locals ? Cn.A.locals : void 0;
var In = ({
  children: e3,
  hidden: t2
}) => t2 ? null : s("p", Object.assign({
  part: "paragraph",
  className: On.paragraph
}, {
  children: e3
}));
var jn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var En = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), {
    uiState: o2,
    setUIState: a2
  } = (0, g.useContext)(Do), [r2, c2] = (0, g.useState)(), [l2, d2] = (0, g.useState)(n2.payload.resend_after), [u2, h2] = (0, g.useState)([]), p2 = (0, g.useMemo)(() => {
    var e4;
    return "passcode_max_attempts_reached" === (null === (e4 = n2.error) || void 0 === e4 ? void 0 : e4.code);
  }, [n2]), f2 = (0, g.useCallback)((e4) => jn(void 0, void 0, void 0, function* () {
    return yield n2.actions.verify_passcode.run({
      code: e4
    });
  }), [n2]);
  return (0, g.useEffect)(() => {
    const e4 = r2 > 0 && setInterval(() => c2(r2 - 1), 1e3);
    return () => clearInterval(e4);
  }, [r2]), (0, g.useEffect)(() => {
    const e4 = l2 > 0 && setInterval(() => {
      d2(l2 - 1);
    }, 1e3);
    return () => clearInterval(e4);
  }, [l2]), (0, g.useEffect)(() => {
    var e4;
    0 == l2 && "rate_limit_exceeded" == (null === (e4 = n2.error) || void 0 === e4 ? void 0 : e4.code) && a2((e5) => Object.assign(Object.assign({}, e5), {
      error: null
    }));
  }, [l2]), (0, g.useEffect)(() => {
    h2([]), n2.payload.resend_after >= 0 && d2(n2.payload.resend_after);
  }, [n2]), s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.loginPasscode")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: o2.email ? t2("texts.enterPasscode", {
          emailAddress: o2.email
        }) : t2("texts.enterPasscodeNoEmail")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.verify_passcode,
        onSubmit: (e4) => jn(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), f2(u2.join(""));
        })
      }, {
        children: [s(xn, {
          onInput: (e4) => {
            if (h2(e4), 6 === e4.filter((e5) => "" !== e5).length) return f2(e4.join(""));
          },
          passcodeDigits: u2,
          numberOfInputs: 6,
          disabled: r2 <= 0 || p2
        }), s(Yt, Object.assign({
          disabled: r2 <= 0 || p2
        }, {
          children: t2("labels.continue")
        }))]
      }))]
    }), s(gn, {
      children: [s(mn, Object.assign({
        flowAction: n2.actions.back,
        loadingSpinnerPosition: "right"
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        disabled: l2 > 0,
        flowAction: n2.actions.resend_passcode,
        loadingSpinnerPosition: "left"
      }, {
        children: l2 > 0 ? t2("labels.passcodeResendAfter", {
          passcodeResendAfter: l2
        }) : t2("labels.sendNewPasscode")
      }))]
    })]
  });
};
var Pn = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.registerAuthenticator")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.setupPasskey")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.webauthn_generate_creation_options
      }, {
        children: s(Yt, Object.assign({
          autofocus: true,
          icon: "passkey"
        }, {
          children: t2("labels.registerAuthenticator")
        }))
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.skip.enabled && !n2.actions.back.enabled
    }, {
      children: [s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.back
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        loadingSpinnerPosition: "left",
        flowAction: n2.actions.skip
      }, {
        children: t2("labels.skip")
      }))]
    }))]
  });
};
var Dn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Tn = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)(), [r2, c2] = (0, g.useState)(), l2 = (0, g.useMemo)(() => s(mn, Object.assign({
    flowAction: n2.actions.continue_to_passcode_confirmation_recovery,
    loadingSpinnerPosition: "left"
  }, {
    children: t2("labels.forgotYourPassword")
  })), [n2, t2]), d2 = (0, g.useMemo)(() => s(mn, Object.assign({
    flowAction: n2.actions.continue_to_login_method_chooser,
    loadingSpinnerPosition: "left"
  }, {
    children: "Choose another method"
  })), [n2]);
  return (0, g.useEffect)(() => {
    const e4 = r2 > 0 && setInterval(() => c2(r2 - 1), 1e3);
    return () => clearInterval(e4);
  }, [r2]), s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.loginPassword")
      }), s(cn, {
        state: n2
      }), s(Qt, Object.assign({
        flowAction: n2.actions.password_login,
        onSubmit: (e4) => Dn(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), n2.actions.password_login.run({
            password: o2
          });
        })
      }, {
        children: [s(Xt, {
          type: "password",
          flowInput: n2.actions.password_login.inputs.password,
          autocomplete: "current-password",
          placeholder: t2("labels.password"),
          onInput: (e4) => Dn(void 0, void 0, void 0, function* () {
            e4.target instanceof HTMLInputElement && a2(e4.target.value);
          }),
          autofocus: true
        }), s(Yt, Object.assign({
          disabled: r2 > 0
        }, {
          children: r2 > 0 ? t2("labels.passwordRetryAfter", {
            passwordRetryAfter: r2
          }) : t2("labels.signIn")
        }))]
      })), n2.actions.continue_to_login_method_chooser.enabled ? l2 : null]
    }), s(gn, {
      children: [s(mn, Object.assign({
        flowAction: n2.actions.back,
        loadingSpinnerPosition: "right"
      }, {
        children: t2("labels.back")
      })), n2.actions.continue_to_login_method_chooser.enabled ? d2 : l2]
    })]
  });
};
var Nn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Ln = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)();
  return s(Gt, {
    children: [s(hn, {
      children: t2("headlines.registerPassword")
    }), s(cn, {
      state: n2
    }), s(In, {
      children: t2("texts.passwordFormatHint", {
        minLength: n2.actions.password_recovery.inputs.new_password.min_length,
        maxLength: 72
      })
    }), s(Qt, Object.assign({
      flowAction: n2.actions.password_recovery,
      onSubmit: (e4) => Nn(void 0, void 0, void 0, function* () {
        return e4.preventDefault(), n2.actions.password_recovery.run({
          new_password: o2
        });
      })
    }, {
      children: [s(Xt, {
        type: "password",
        autocomplete: "new-password",
        flowInput: n2.actions.password_recovery.inputs.new_password,
        placeholder: t2("labels.newPassword"),
        onInput: (e4) => Nn(void 0, void 0, void 0, function* () {
          e4.target instanceof HTMLInputElement && a2(e4.target.value);
        }),
        autofocus: true
      }), s(Yt, {
        children: t2("labels.continue")
      })]
    }))]
  });
};
var Mn = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.selectLoginMethod")
      }), s(cn, {
        flowError: null == n2 ? void 0 : n2.error
      }), s(In, {
        children: t2("texts.howDoYouWantToLogin")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.continue_to_passcode_confirmation
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          icon: "mail"
        }, {
          children: t2("labels.passcode")
        }))
      })), s(Qt, Object.assign({
        flowAction: n2.actions.continue_to_password_login
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          icon: "password"
        }, {
          children: t2("labels.password")
        }))
      })), s(Qt, Object.assign({
        flowAction: n2.actions.webauthn_generate_request_options
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          icon: "passkey"
        }, {
          children: t2("labels.passkey")
        }))
      }))]
    }), s(gn, {
      children: s(mn, Object.assign({
        flowAction: n2.actions.back,
        loadingSpinnerPosition: "right"
      }, {
        children: t2("labels.back")
      }))
    })]
  });
};
var Un = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Wn = (e3) => {
  var t2;
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext), {
    init: o2,
    uiState: a2,
    setUIState: r2,
    initialComponentName: c2
  } = (0, g.useContext)(Do), {
    flowState: l2
  } = zt(e3.state), d2 = l2.actions.register_login_identifier.inputs, u2 = !(!(null == d2 ? void 0 : d2.email) || !(null == d2 ? void 0 : d2.username)), [h2, p2] = (0, g.useState)(void 0), [f2, _2] = (0, g.useState)(null), [v2, b2] = (0, g.useState)(false), [y2, k2] = (0, g.useState)(false), w2 = (0, g.useMemo)(() => !!l2.actions.thirdparty_oauth.enabled, [l2.actions]);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: n2("headlines.signUp")
      }), s(cn, {
        state: l2,
        error: h2
      }), d2 ? s(i.Fragment, {
        children: [s(Qt, Object.assign({
          flowAction: l2.actions.register_login_identifier,
          onSubmit: (e4) => Un(void 0, void 0, void 0, function* () {
            return e4.preventDefault(), yield l2.actions.register_login_identifier.run({
              email: a2.email,
              username: a2.username
            });
          }),
          maxWidth: true
        }, {
          children: [d2.username ? s(Xt, {
            markOptional: u2,
            markError: u2,
            type: "text",
            autoComplete: "username",
            autoCorrect: "off",
            flowInput: d2.username,
            onInput: (e4) => {
              if (e4.preventDefault(), e4.target instanceof HTMLInputElement) {
                const {
                  value: t3
                } = e4.target;
                r2((e5) => Object.assign(Object.assign({}, e5), {
                  username: t3
                }));
              }
            },
            value: a2.username,
            placeholder: n2("labels.username")
          }) : null, d2.email ? s(Xt, {
            markOptional: u2,
            markError: u2,
            type: "email",
            autoComplete: "email",
            autoCorrect: "off",
            flowInput: d2.email,
            onInput: (e4) => {
              if (e4.preventDefault(), e4.target instanceof HTMLInputElement) {
                const {
                  value: t3
                } = e4.target;
                r2((e5) => Object.assign(Object.assign({}, e5), {
                  email: t3
                }));
              }
            },
            value: a2.email,
            placeholder: n2("labels.email"),
            pattern: "^.*[^0-9]+$"
          }) : null, s(Yt, Object.assign({
            autofocus: true
          }, {
            children: n2("labels.continue")
          }))]
        })), s(on, Object.assign({
          hidden: !w2
        }, {
          children: n2("labels.or")
        }))]
      }) : null, l2.actions.thirdparty_oauth.enabled ? null === (t2 = l2.actions.thirdparty_oauth.inputs.provider.allowed_values) || void 0 === t2 ? void 0 : t2.map((e4) => s(Qt, Object.assign({
        flowAction: l2.actions.thirdparty_oauth,
        onSubmit: (t3) => ((e5, t4) => Un(void 0, void 0, void 0, function* () {
          e5.preventDefault(), _2(t4);
          const n3 = yield l2.actions.thirdparty_oauth.run({
            provider: t4,
            redirect_to: window.location.toString()
          }, {
            dispatchAfterStateChangeEvent: false
          });
          _2(null), n3.dispatchAfterStateChangeEvent();
        }))(t3, e4.value)
      }, {
        children: s(Yt, Object.assign({
          isLoading: e4.value == f2,
          secondary: true,
          icon: e4.value.startsWith("custom_") ? "customProvider" : e4.value
        }, {
          children: n2("labels.signInWith", {
            provider: e4.name
          })
        }))
      }), e4.value)) : null, l2.actions.remember_me.enabled && s(i.Fragment, {
        children: [s(yn, {}), s(bn, {
          required: false,
          type: "checkbox",
          label: n2("labels.staySignedIn"),
          checked: v2,
          onChange: (e4) => Un(void 0, void 0, void 0, function* () {
            e4.preventDefault();
            const t3 = yield l2.actions.remember_me.run({
              remember_me: !v2
            }, {
              dispatchAfterStateChangeEvent: false
            });
            b2((e5) => !e5), t3.dispatchAfterStateChangeEvent();
          })
        })]
      })]
    }), s(gn, Object.assign({
      hidden: "auth" !== c2
    }, {
      children: [s("span", {
        hidden: true
      }), s(mn, Object.assign({
        onClick: (e4) => Un(void 0, void 0, void 0, function* () {
          e4.preventDefault(), k2(true), o2("login");
        }),
        loadingSpinnerPosition: "left",
        isLoading: y2
      }, {
        children: n2("labels.alreadyHaveAnAccount")
      }))]
    }))]
  });
};
var Fn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Hn = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)();
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.registerPassword")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.passwordFormatHint", {
          minLength: n2.actions.register_password.inputs.new_password.min_length,
          maxLength: 72
        })
      }), s(Qt, Object.assign({
        flowAction: n2.actions.register_password,
        onSubmit: (e4) => Fn(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), n2.actions.register_password.run({
            new_password: o2
          });
        })
      }, {
        children: [s(Xt, {
          type: "password",
          autocomplete: "new-password",
          flowInput: n2.actions.register_password.inputs.new_password,
          placeholder: t2("labels.newPassword"),
          onInput: (e4) => Fn(void 0, void 0, void 0, function* () {
            e4.target instanceof HTMLInputElement && a2(e4.target.value);
          }),
          autofocus: true
        }), s(Yt, {
          children: t2("labels.continue")
        })]
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.back.enabled && !n2.actions.skip.enabled
    }, {
      children: [s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.back
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        loadingSpinnerPosition: "left",
        flowAction: n2.actions.skip
      }, {
        children: t2("labels.skip")
      }))]
    }))]
  });
};
var qn = n(21);
var Rn = {};
Rn.setAttributes = ut(), Rn.insert = (e3) => {
  window._hankoStyle = e3;
}, Rn.domAPI = lt(), Rn.insertStyleElement = pt(), st()(qn.A, Rn);
var zn = qn.A && qn.A.locals ? qn.A.locals : void 0;
var Kn = function({
  name: e3,
  columnSelector: t2,
  contentSelector: n2,
  data: o2 = [],
  checkedItemID: a2,
  setCheckedItemID: i2,
  dropdown: r2 = false
}) {
  const c2 = (0, g.useCallback)((t3) => `${e3}-${t3}`, [e3]), l2 = (0, g.useCallback)((e4) => c2(e4) === a2, [a2, c2]), d2 = (e4) => {
    if (!(e4.target instanceof HTMLInputElement)) return;
    const t3 = parseInt(e4.target.value, 10), n3 = c2(t3);
    i2(n3 === a2 ? null : n3);
  };
  return s("div", Object.assign({
    className: zn.accordion
  }, {
    children: o2.map((o3, a3) => s("div", Object.assign({
      className: zn.accordionItem
    }, {
      children: [s("input", {
        type: "radio",
        className: zn.accordionInput,
        id: `${e3}-${a3}`,
        name: e3,
        onClick: d2,
        value: a3,
        checked: l2(a3)
      }), s("label", Object.assign({
        className: wt()(zn.label, r2 && zn.dropdown),
        for: `${e3}-${a3}`
      }, {
        children: s("span", Object.assign({
          className: zn.labelText
        }, {
          children: t2(o3, a3)
        }))
      })), s("div", Object.assign({
        className: wt()(zn.accordionContent, r2 && zn.dropdownContent)
      }, {
        children: n2(o3, a3)
      }))]
    }), a3))
  }));
};
var Bn = ({
  children: e3
}) => s("h2", Object.assign({
  part: "headline2",
  className: wt()(un.headline, un.grade2)
}, {
  children: e3
}));
var Zn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Vn = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  flowState: n2,
  onState: o2
}) => {
  const {
    t: a2
  } = (0, g.useContext)(m.TranslateContext), r2 = (0, g.useMemo)(() => false, []);
  return s(Kn, {
    name: "email-edit-dropdown",
    columnSelector: (e4) => {
      const t3 = s("span", Object.assign({
        className: zn.description
      }, {
        children: e4.is_verified ? e4.is_primary ? s(i.Fragment, {
          children: [" -", " ", a2("labels.primaryEmail")]
        }) : null : s(i.Fragment, {
          children: [" -", " ", a2("labels.unverifiedEmail")]
        })
      }));
      return e4.is_primary ? s(i.Fragment, {
        children: [s("b", {
          children: e4.address
        }), t3]
      }) : s(i.Fragment, {
        children: [e4.address, t3]
      });
    },
    data: n2.payload.user.emails,
    contentSelector: (e4) => {
      var t3, c2;
      return s(i.Fragment, {
        children: [e4.is_primary ? s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.isPrimaryEmail")
            }), a2("texts.isPrimaryEmail")]
          })
        }) : s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.setPrimaryEmail")
            }), a2("texts.setPrimaryEmail"), s("br", {}), s(mn, Object.assign({
              flowAction: n2.actions.email_set_primary,
              onClick: (t4) => ((e5, t5) => Zn(void 0, void 0, void 0, function* () {
                e5.preventDefault();
                const a3 = yield n2.actions.email_set_primary.run({
                  email_id: t5
                }, {
                  dispatchAfterStateChangeEvent: false
                });
                return o2(a3);
              }))(t4, e4.id),
              loadingSpinnerPosition: "right"
            }, {
              children: a2("labels.setAsPrimaryEmail")
            }))]
          })
        }), e4.is_verified ? s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.emailVerified")
            }), a2("texts.emailVerified")]
          })
        }) : s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.emailUnverified")
            }), a2("texts.emailUnverified"), s("br", {}), s(mn, Object.assign({
              flowAction: n2.actions.email_verify,
              onClick: (t4) => ((e5, t5) => Zn(void 0, void 0, void 0, function* () {
                e5.preventDefault();
                const a3 = yield n2.actions.email_verify.run({
                  email_id: t5
                }, {
                  dispatchAfterStateChangeEvent: false
                });
                return o2(a3);
              }))(t4, e4.id),
              loadingSpinnerPosition: "right"
            }, {
              children: a2("labels.verify")
            }))]
          })
        }), (null === (t3 = n2.actions.email_delete.inputs.email_id.allowed_values) || void 0 === t3 ? void 0 : t3.map((e5) => e5.value).includes(e4.id)) ? s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.emailDelete")
            }), a2("texts.emailDelete"), s("br", {}), s(mn, Object.assign({
              dangerous: true,
              flowAction: n2.actions.email_delete,
              onClick: (t4) => ((e5, t5) => Zn(void 0, void 0, void 0, function* () {
                e5.preventDefault();
                const a3 = yield n2.actions.email_delete.run({
                  email_id: t5
                }, {
                  dispatchAfterStateChangeEvent: false
                });
                return o2(a3);
              }))(t4, e4.id),
              disabled: r2,
              loadingSpinnerPosition: "right"
            }, {
              children: a2("labels.delete")
            }))]
          })
        }) : null, (null === (c2 = e4.identities) || void 0 === c2 ? void 0 : c2.length) > 0 ? s(i.Fragment, {
          children: s(In, {
            children: [s(Bn, {
              children: a2("headlines.connectedAccounts")
            }), e4.identities.map((e5) => e5.provider).join(", ")]
          })
        }) : null]
      });
    },
    checkedItemID: e3,
    setCheckedItemID: t2
  });
};
var $n = ({
  onCredentialNameSubmit: e3,
  oldName: t2,
  onBack: n2,
  credential: o2,
  credentialType: a2,
  flowState: r2
}) => {
  const {
    t: c2
  } = (0, g.useContext)(m.TranslateContext), [l2, d2] = (0, g.useState)(t2);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: c2("security-key" === a2 ? "headlines.renameSecurityKey" : "headlines.renamePasskey")
      }), s(cn, {
        flowError: null
      }), s(In, {
        children: c2("security-key" === a2 ? "texts.renameSecurityKey" : "texts.renamePasskey")
      }), s(Qt, Object.assign({
        flowAction: r2.actions.webauthn_credential_rename,
        onSubmit: (t3) => e3(t3, o2.id, l2)
      }, {
        children: [s(Xt, {
          type: "text",
          name: a2,
          value: l2,
          minLength: 3,
          maxLength: 32,
          required: true,
          placeholder: c2("security-key" === a2 ? "labels.newSecurityKeyName" : "labels.newPasskeyName"),
          onInput: (e4) => {
            return t3 = void 0, n3 = void 0, a3 = function* () {
              e4.target instanceof HTMLInputElement && d2(e4.target.value);
            }, new ((o3 = void 0) || (o3 = Promise))(function(e5, i2) {
              function r3(e6) {
                try {
                  c3(a3.next(e6));
                } catch (e7) {
                  i2(e7);
                }
              }
              function s2(e6) {
                try {
                  c3(a3.throw(e6));
                } catch (e7) {
                  i2(e7);
                }
              }
              function c3(t4) {
                var n4;
                t4.done ? e5(t4.value) : (n4 = t4.value, n4 instanceof o3 ? n4 : new o3(function(e6) {
                  e6(n4);
                })).then(r3, s2);
              }
              c3((a3 = a3.apply(t3, n3 || [])).next());
            });
            var t3, n3, o3, a3;
          },
          autofocus: true
        }), s(Yt, {
          children: c2("labels.save")
        })]
      }))]
    }), s(gn, {
      children: s(mn, Object.assign({
        onClick: n2,
        loadingSpinnerPosition: "right"
      }, {
        children: c2("labels.back")
      }))
    })]
  });
};
var Jn = ({
  credentials: e3 = [],
  checkedItemID: t2,
  setCheckedItemID: n2,
  onBack: o2,
  onCredentialNameSubmit: a2,
  allowCredentialDeletion: r2,
  credentialType: c2,
  onCredentialDelete: l2,
  flowState: d2
}) => {
  const {
    t: u2
  } = (0, g.useContext)(m.TranslateContext), {
    setPage: h2
  } = (0, g.useContext)(Do), p2 = (e4) => {
    if (e4.name) return e4.name;
    const t3 = e4.public_key.replace(/[\W_]/g, "");
    return `${"security-key" === c2 ? "SecurityKey" : "Passkey"}-${t3.substring(t3.length - 7, t3.length)}`;
  }, f2 = (e4) => new Date(e4).toLocaleString();
  return s(Kn, {
    name: "security-key" === c2 ? "security-key-edit-dropdown" : "passkey-edit-dropdown",
    columnSelector: (e4) => p2(e4),
    data: e3,
    contentSelector: (e4) => s(i.Fragment, {
      children: [s(In, {
        children: [s(Bn, {
          children: u2("security-key" === c2 ? "headlines.renameSecurityKey" : "headlines.renamePasskey")
        }), u2("security-key" === c2 ? "texts.renameSecurityKey" : "texts.renamePasskey"), s("br", {}), s(mn, Object.assign({
          onClick: (t3) => ((e5, t4, n3) => {
            e5.preventDefault(), h2(s($n, {
              oldName: p2(t4),
              credential: t4,
              credentialType: n3,
              onBack: o2,
              onCredentialNameSubmit: a2,
              flowState: d2
            }));
          })(t3, e4, c2),
          loadingSpinnerPosition: "right"
        }, {
          children: u2("labels.rename")
        }))]
      }), s(In, Object.assign({
        hidden: !r2
      }, {
        children: [s(Bn, {
          children: u2("security-key" === c2 ? "headlines.deleteSecurityKey" : "headlines.deletePasskey")
        }), u2("security-key" === c2 ? "texts.deleteSecurityKey" : "texts.deletePasskey"), s("br", {}), s(mn, Object.assign({
          dangerous: true,
          flowAction: d2.actions.webauthn_credential_delete,
          onClick: (t3) => l2(t3, e4.id),
          loadingSpinnerPosition: "right"
        }, {
          children: u2("labels.delete")
        }))]
      })), s(In, {
        children: [s(Bn, {
          children: u2("headlines.lastUsedAt")
        }), e4.last_used_at ? f2(e4.last_used_at) : "-"]
      }), s(In, {
        children: [s(Bn, {
          children: u2("headlines.createdAt")
        }), f2(e4.created_at)]
      })]
    }),
    checkedItemID: t2,
    setCheckedItemID: n2
  });
};
var Qn = ({
  name: e3,
  title: t2,
  children: n2,
  checkedItemID: o2,
  setCheckedItemID: a2
}) => s(Kn, {
  dropdown: true,
  name: e3,
  columnSelector: () => t2,
  contentSelector: () => s(i.Fragment, {
    children: n2
  }),
  setCheckedItemID: a2,
  checkedItemID: o2,
  data: [{}]
});
var Yn = ({
  flowError: e3
}) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext);
  return s(i.Fragment, {
    children: e3 ? s("div", Object.assign({
      className: sn.errorMessage
    }, {
      children: t2(`flowErrors.${null == e3 ? void 0 : e3.code}`)
    })) : null
  });
};
var Xn = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  flowState: n2,
  onState: o2
}) => {
  var a2;
  const {
    t: i2
  } = (0, g.useContext)(m.TranslateContext), {
    setUIState: r2
  } = (0, g.useContext)(Do), [c2, l2] = (0, g.useState)();
  return s(Qn, Object.assign({
    name: "email-create-dropdown",
    title: i2("labels.addEmail"),
    checkedItemID: e3,
    setCheckedItemID: t2
  }, {
    children: [s(Yn, {
      flowError: null === (a2 = n2.actions.email_create.inputs.email) || void 0 === a2 ? void 0 : a2.error
    }), s(Qt, Object.assign({
      flowAction: n2.actions.email_create,
      onSubmit: (e4) => ((e5, t3) => {
        return a3 = void 0, i3 = void 0, c3 = function* () {
          e5.preventDefault(), r2((e6) => Object.assign(Object.assign({}, e6), {
            email: t3
          }));
          const a4 = yield n2.actions.email_create.run({
            email: t3
          }, {
            dispatchAfterStateChangeEvent: false
          });
          return o2(a4);
        }, new ((s2 = void 0) || (s2 = Promise))(function(e6, t4) {
          function n3(e7) {
            try {
              r3(c3.next(e7));
            } catch (e8) {
              t4(e8);
            }
          }
          function o3(e7) {
            try {
              r3(c3.throw(e7));
            } catch (e8) {
              t4(e8);
            }
          }
          function r3(t5) {
            var a4;
            t5.done ? e6(t5.value) : (a4 = t5.value, a4 instanceof s2 ? a4 : new s2(function(e7) {
              e7(a4);
            })).then(n3, o3);
          }
          r3((c3 = c3.apply(a3, i3 || [])).next());
        });
        var a3, i3, s2, c3;
      })(e4, c2).then(() => l2(""))
    }, {
      children: [s(Xt, {
        markError: true,
        type: "email",
        placeholder: i2("labels.newEmailAddress"),
        onInput: (e4) => {
          e4.preventDefault(), e4.target instanceof HTMLInputElement && l2(e4.target.value);
        },
        value: c2,
        flowInput: n2.actions.email_create.inputs.email
      }), s(Yt, {
        children: i2("labels.save")
      })]
    }))]
  }));
};
var Gn = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var eo = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  onState: n2,
  flowState: o2
}) => {
  var a2, i2, r2;
  const {
    t: c2
  } = (0, g.useContext)(m.TranslateContext), [l2, d2] = (0, g.useState)(""), u2 = o2.actions.password_create.enabled ? o2.actions.password_create : o2.actions.password_update;
  return s(Qn, Object.assign({
    name: "password-edit-dropdown",
    title: c2(o2.actions.password_create.enabled ? "labels.setPassword" : "labels.changePassword"),
    checkedItemID: e3,
    setCheckedItemID: t2
  }, {
    children: [s(In, {
      children: c2("texts.passwordFormatHint", {
        minLength: null === (a2 = u2.inputs.password.min_length) || void 0 === a2 ? void 0 : a2.toString(10),
        maxLength: null === (i2 = u2.inputs.password.max_length) || void 0 === i2 ? void 0 : i2.toString(10)
      })
    }), s(Yn, {
      flowError: null === (r2 = o2.actions.password_create.inputs.password) || void 0 === r2 ? void 0 : r2.error
    }), s(Qt, Object.assign({
      flowAction: u2,
      onSubmit: (e4) => ((e5, t3) => Gn(void 0, void 0, void 0, function* () {
        e5.preventDefault();
        const o3 = yield u2.run({
          password: t3
        }, {
          dispatchAfterStateChangeEvent: false
        });
        return n2(o3);
      }))(e4, l2).then(() => d2(""))
    }, {
      children: [s(Xt, {
        markError: true,
        autoComplete: "new-password",
        placeholder: c2("labels.newPassword"),
        type: "password",
        onInput: (e4) => {
          e4.preventDefault(), e4.target instanceof HTMLInputElement && d2(e4.target.value);
        },
        value: l2,
        flowInput: u2.inputs.password
      }), s(Yt, {
        children: c2("labels.save")
      })]
    })), s(mn, Object.assign({
      dangerous: true,
      flowAction: o2.actions.password_delete,
      onClick: (e4) => ((e5) => Gn(void 0, void 0, void 0, function* () {
        e5.preventDefault();
        const t3 = yield o2.actions.password_delete.run(null, {
          dispatchAfterStateChangeEvent: false
        });
        return n2(t3);
      }))(e4).then(() => d2("")),
      loadingSpinnerPosition: "right"
    }, {
      children: c2("labels.delete")
    }))]
  }));
};
var to = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  credentialType: n2,
  flowState: o2,
  onState: a2
}) => {
  const {
    t: i2
  } = (0, g.useContext)(m.TranslateContext), r2 = Le.supported(), c2 = "passkey" == n2 ? o2.actions.webauthn_credential_create : o2.actions.security_key_create;
  return s(Qn, Object.assign({
    name: "security-key" === n2 ? "security-key-create-dropdown" : "passkey-create-dropdown",
    title: i2("security-key" === n2 ? "labels.createSecurityKey" : "labels.createPasskey"),
    checkedItemID: e3,
    setCheckedItemID: t2
  }, {
    children: [s(In, {
      children: i2("security-key" === n2 ? "texts.securityKeySetUp" : "texts.setupPasskey")
    }), s(Qt, Object.assign({
      onSubmit: (e4) => {
        return t3 = void 0, n3 = void 0, i3 = function* () {
          e4.preventDefault();
          const t4 = yield c2.run(null, {
            dispatchAfterStateChangeEvent: false
          });
          return a2(t4);
        }, new ((o3 = void 0) || (o3 = Promise))(function(e5, a3) {
          function r3(e6) {
            try {
              c3(i3.next(e6));
            } catch (e7) {
              a3(e7);
            }
          }
          function s2(e6) {
            try {
              c3(i3.throw(e6));
            } catch (e7) {
              a3(e7);
            }
          }
          function c3(t4) {
            var n4;
            t4.done ? e5(t4.value) : (n4 = t4.value, n4 instanceof o3 ? n4 : new o3(function(e6) {
              e6(n4);
            })).then(r3, s2);
          }
          c3((i3 = i3.apply(t3, n3 || [])).next());
        });
        var t3, n3, o3, i3;
      },
      flowAction: c2
    }, {
      children: s(Yt, Object.assign({
        title: r2 ? null : i2("labels.webauthnUnsupported")
      }, {
        children: i2("security-key" === n2 ? "labels.createSecurityKey" : "labels.createPasskey")
      }))
    }))]
  }));
};
var no = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var oo = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  flowState: n2,
  onState: o2
}) => {
  var a2, i2;
  const {
    t: r2
  } = (0, g.useContext)(m.TranslateContext), [c2, l2] = (0, g.useState)();
  return s(Qn, Object.assign({
    name: "username-edit-dropdown",
    title: r2(n2.payload.user.username ? "labels.changeUsername" : "labels.setUsername"),
    checkedItemID: e3,
    setCheckedItemID: t2
  }, {
    children: [s(Yn, {
      flowError: n2.payload.user.username ? null === (a2 = n2.actions.username_update.inputs.username) || void 0 === a2 ? void 0 : a2.error : null === (i2 = n2.actions.username_create.inputs.username) || void 0 === i2 ? void 0 : i2.error
    }), s(Qt, Object.assign({
      flowAction: n2.payload.user.username ? n2.actions.username_update : n2.actions.username_create,
      onSubmit: (e4) => no(void 0, void 0, void 0, function* () {
        e4.preventDefault();
        const t3 = n2.payload.user.username ? n2.actions.username_update : n2.actions.username_create, a3 = yield t3.run({
          username: c2
        }, {
          dispatchAfterStateChangeEvent: false
        });
        return o2(a3).then(() => l2(""));
      })
    }, {
      children: [s(Xt, {
        markError: true,
        placeholder: r2("labels.username"),
        type: "text",
        onInput: (e4) => {
          e4.preventDefault(), e4.target instanceof HTMLInputElement && l2(e4.target.value);
        },
        value: c2,
        flowInput: n2.payload.user.username ? n2.actions.username_update.inputs.username : n2.actions.username_create.inputs.username
      }), s(Yt, {
        children: r2("labels.save")
      })]
    })), s(mn, Object.assign({
      flowAction: n2.actions.username_delete,
      onClick: (e4) => no(void 0, void 0, void 0, function* () {
        e4.preventDefault();
        const t3 = yield n2.actions.username_delete.run(null, {
          dispatchAfterStateChangeEvent: false
        });
        return o2(t3).then(() => l2(""));
      }),
      dangerous: true,
      loadingSpinnerPosition: "right"
    }, {
      children: r2("labels.delete")
    }))]
  }));
};
var ao = ({
  state: e3,
  onBack: t2
}) => {
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: n2("headlines.deleteAccount")
      }), s(cn, {
        flowError: null
      }), s(In, {
        children: n2("texts.deleteAccount")
      }), s(Qt, Object.assign({
        flowAction: e3.actions.account_delete
      }, {
        children: [s(bn, {
          required: true,
          type: "checkbox",
          label: n2("labels.deleteAccount")
        }), s(Yt, {
          children: n2("labels.delete")
        })]
      }))]
    }), s(gn, {
      children: s(mn, Object.assign({
        onClick: t2
      }, {
        children: n2("labels.back")
      }))
    })]
  });
};
var io = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  flowState: n2,
  onState: o2
}) => {
  const {
    t: a2
  } = (0, g.useContext)(m.TranslateContext), r2 = (e4) => new Date(e4).toLocaleString();
  return s(Kn, {
    name: "session-edit-dropdown",
    columnSelector: (e4) => {
      const t3 = s("b", {
        children: e4.user_agent ? e4.user_agent : e4.id
      }), n3 = e4.current ? s("span", Object.assign({
        className: zn.description
      }, {
        children: s(i.Fragment, {
          children: [" -", " ", a2("labels.currentSession")]
        })
      })) : null;
      return s(i.Fragment, {
        children: [t3, n3]
      });
    },
    data: n2.payload.sessions,
    contentSelector: (e4) => {
      var t3, c2, l2;
      return s(i.Fragment, {
        children: [s(In, Object.assign({
          hidden: !e4.ip_address
        }, {
          children: [s(Bn, {
            children: a2("headlines.ipAddress")
          }), e4.ip_address]
        })), s(In, {
          children: [s(Bn, {
            children: a2("headlines.lastUsed")
          }), r2(e4.last_used)]
        }), s(In, {
          children: [s(Bn, {
            children: a2("headlines.createdAt")
          }), r2(e4.created_at)]
        }), (null === (l2 = null === (c2 = null === (t3 = n2.actions.session_delete.inputs.session_id) || void 0 === t3 ? void 0 : t3.allowed_values) || void 0 === c2 ? void 0 : c2.map((e5) => e5.value)) || void 0 === l2 ? void 0 : l2.includes(e4.id)) ? s(In, {
          children: [s(Bn, {
            children: a2("headlines.revokeSession")
          }), s(mn, Object.assign({
            dangerous: true,
            onClick: (t4) => ((e5, t5) => {
              return a3 = void 0, i2 = void 0, s2 = function* () {
                e5.preventDefault();
                const a4 = yield n2.actions.session_delete.run({
                  session_id: t5
                }, {
                  dispatchAfterStateChangeEvent: false
                });
                return o2(a4);
              }, new ((r3 = void 0) || (r3 = Promise))(function(e6, t6) {
                function n3(e7) {
                  try {
                    c3(s2.next(e7));
                  } catch (e8) {
                    t6(e8);
                  }
                }
                function o3(e7) {
                  try {
                    c3(s2.throw(e7));
                  } catch (e8) {
                    t6(e8);
                  }
                }
                function c3(t7) {
                  var a4;
                  t7.done ? e6(t7.value) : (a4 = t7.value, a4 instanceof r3 ? a4 : new r3(function(e7) {
                    e7(a4);
                  })).then(n3, o3);
                }
                c3((s2 = s2.apply(a3, i2 || [])).next());
              });
              var a3, i2, r3, s2;
            })(t4, e4.id),
            loadingSpinnerPosition: "right"
          }, {
            children: a2("labels.revoke")
          }))]
        }) : null]
      });
    },
    checkedItemID: e3,
    setCheckedItemID: t2
  });
};
var ro = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var so = ({
  checkedItemID: e3,
  setCheckedItemID: t2,
  flowState: n2,
  onState: o2
}) => {
  var a2, r2, c2, l2;
  const {
    t: d2
  } = (0, g.useContext)(m.TranslateContext), u2 = s("span", Object.assign({
    className: zn.description
  }, {
    children: (null === (a2 = n2.payload.user.mfa_config) || void 0 === a2 ? void 0 : a2.auth_app_set_up) ? s(i.Fragment, {
      children: [" -", " ", d2("labels.configured")]
    }) : null
  })), h2 = s(i.Fragment, {
    children: [d2("labels.authenticatorAppManage"), " ", u2]
  });
  return s(Qn, Object.assign({
    name: "authenticator-app-manage-dropdown",
    title: h2,
    checkedItemID: e3,
    setCheckedItemID: t2
  }, {
    children: [s(Bn, {
      children: d2((null === (r2 = n2.payload.user.mfa_config) || void 0 === r2 ? void 0 : r2.auth_app_set_up) ? "headlines.authenticatorAppAlreadySetUp" : "headlines.authenticatorAppNotSetUp")
    }), s(In, {
      children: [d2((null === (c2 = n2.payload.user.mfa_config) || void 0 === c2 ? void 0 : c2.auth_app_set_up) ? "texts.authenticatorAppAlreadySetUp" : "texts.authenticatorAppNotSetUp"), s("br", {}), (null === (l2 = n2.payload.user.mfa_config) || void 0 === l2 ? void 0 : l2.auth_app_set_up) ? s(mn, Object.assign({
        flowAction: n2.actions.otp_secret_delete,
        onClick: (e4) => ro(void 0, void 0, void 0, function* () {
          e4.preventDefault();
          const t3 = yield n2.actions.otp_secret_delete.run(null, {
            dispatchAfterStateChangeEvent: false
          });
          return o2(t3);
        }),
        loadingSpinnerPosition: "right",
        dangerous: true
      }, {
        children: d2("labels.delete")
      })) : s(mn, Object.assign({
        flowAction: n2.actions.continue_to_otp_secret_creation,
        onClick: (e4) => ro(void 0, void 0, void 0, function* () {
          e4.preventDefault();
          const t3 = yield n2.actions.continue_to_otp_secret_creation.run(null, {
            dispatchAfterStateChangeEvent: false
          });
          return o2(t3);
        }),
        loadingSpinnerPosition: "right"
      }, {
        children: d2("labels.authenticatorAppAdd")
      }))]
    })]
  }));
};
var co = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var lo = (e3) => {
  var t2, n2, o2, a2, r2, c2, l2;
  const {
    t: d2
  } = (0, g.useContext)(m.TranslateContext), {
    setPage: u2
  } = (0, g.useContext)(Do), {
    flowState: h2
  } = zt(e3.state), [p2, f2] = (0, g.useState)(""), _2 = (e4) => co(void 0, void 0, void 0, function* () {
    (null == e4 ? void 0 : e4.error) || (f2(null), yield new Promise((e5) => setTimeout(e5, 360))), e4.dispatchAfterStateChangeEvent();
  }), v2 = (e4, t3, n3) => co(void 0, void 0, void 0, function* () {
    e4.preventDefault();
    const o3 = yield h2.actions.webauthn_credential_rename.run({
      passkey_id: t3,
      passkey_name: n3
    }, {
      dispatchAfterStateChangeEvent: false
    });
    return _2(o3);
  }), b2 = (t3) => (t3.preventDefault(), u2(s(lo, {
    state: h2,
    enablePasskeys: e3.enablePasskeys
  })), Promise.resolve());
  return s(Gt, {
    children: [s(cn, {
      state: "form_data_invalid_error" !== (null === (t2 = null == h2 ? void 0 : h2.error) || void 0 === t2 ? void 0 : t2.code) ? h2 : null
    }), h2.actions.username_create.enabled || h2.actions.username_update.enabled || h2.actions.username_delete.enabled ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("labels.username")
      }), h2.payload.user.username ? s(In, {
        children: s("b", {
          children: h2.payload.user.username.username
        })
      }) : null, s(In, {
        children: h2.actions.username_create.enabled || h2.actions.username_update.enabled ? s(oo, {
          onState: _2,
          flowState: h2,
          checkedItemID: p2,
          setCheckedItemID: f2
        }) : null
      })]
    }) : null, (null === (o2 = null === (n2 = h2.payload) || void 0 === n2 ? void 0 : n2.user) || void 0 === o2 ? void 0 : o2.emails) || h2.actions.email_create.enabled ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.profileEmails")
      }), s(In, {
        children: [s(Vn, {
          flowState: h2,
          onState: _2,
          checkedItemID: p2,
          setCheckedItemID: f2
        }), h2.actions.email_create.enabled ? s(Xn, {
          flowState: h2,
          onState: _2,
          checkedItemID: p2,
          setCheckedItemID: f2
        }) : null]
      })]
    }) : null, h2.actions.password_create.enabled || h2.actions.password_update.enabled ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.profilePassword")
      }), s(In, {
        children: s(eo, {
          flowState: h2,
          onState: _2,
          checkedItemID: p2,
          setCheckedItemID: f2
        })
      })]
    }) : null, e3.enablePasskeys && ((null === (r2 = null === (a2 = h2.payload) || void 0 === a2 ? void 0 : a2.user) || void 0 === r2 ? void 0 : r2.passkeys) || h2.actions.webauthn_credential_create.enabled) ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.profilePasskeys")
      }), s(In, {
        children: [s(Jn, {
          flowState: h2,
          onBack: b2,
          onCredentialNameSubmit: v2,
          onCredentialDelete: (e4, t3) => co(void 0, void 0, void 0, function* () {
            e4.preventDefault();
            const n3 = yield h2.actions.webauthn_credential_delete.run({
              passkey_id: t3
            }, {
              dispatchAfterStateChangeEvent: false
            });
            return _2(n3);
          }),
          credentials: h2.payload.user.passkeys,
          checkedItemID: p2,
          setCheckedItemID: f2,
          allowCredentialDeletion: !!h2.actions.webauthn_credential_delete.enabled,
          credentialType: "passkey"
        }), h2.actions.webauthn_credential_create.enabled ? s(to, {
          flowState: h2,
          onState: _2,
          credentialType: "passkey",
          checkedItemID: p2,
          setCheckedItemID: f2
        }) : null]
      })]
    }) : null, (null === (c2 = h2.payload.user.mfa_config) || void 0 === c2 ? void 0 : c2.security_keys_enabled) ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.securityKeys")
      }), s(In, {
        children: [s(Jn, {
          onBack: b2,
          flowState: h2,
          onCredentialNameSubmit: v2,
          onCredentialDelete: (e4, t3) => co(void 0, void 0, void 0, function* () {
            e4.preventDefault();
            const n3 = yield h2.actions.security_key_delete.run({
              security_key_id: t3
            }, {
              dispatchAfterStateChangeEvent: false
            });
            return _2(n3);
          }),
          credentials: h2.payload.user.security_keys,
          checkedItemID: p2,
          setCheckedItemID: f2,
          allowCredentialDeletion: !!h2.actions.security_key_delete.enabled,
          credentialType: "security-key"
        }), h2.actions.security_key_create.enabled ? s(to, {
          flowState: h2,
          onState: _2,
          credentialType: "security-key",
          checkedItemID: p2,
          setCheckedItemID: f2
        }) : null]
      })]
    }) : null, (null === (l2 = h2.payload.user.mfa_config) || void 0 === l2 ? void 0 : l2.totp_enabled) ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.authenticatorApp")
      }), s(In, {
        children: s(so, {
          onState: _2,
          flowState: h2,
          checkedItemID: p2,
          setCheckedItemID: f2
        })
      })]
    }) : null, h2.payload.sessions ? s(i.Fragment, {
      children: [s(hn, {
        children: d2("headlines.profileSessions")
      }), s(In, {
        children: s(io, {
          flowState: h2,
          onState: _2,
          checkedItemID: p2,
          setCheckedItemID: f2
        })
      })]
    }) : null, h2.actions.account_delete.enabled ? s(i.Fragment, {
      children: [s(yn, {}), s(In, {
        children: s(on, {})
      }), s(In, {
        children: s(Qt, Object.assign({
          onSubmit: (e4) => (e4.preventDefault(), u2(s(ao, {
            onBack: b2,
            state: h2
          })), Promise.resolve()),
          flowAction: h2.actions.account_delete
        }, {
          children: s(Yt, Object.assign({
            dangerous: true
          }, {
            children: d2("headlines.deleteAccount")
          }))
        }))
      })]
    }) : null]
  });
};
var uo = lo;
var ho = ({
  state: e3,
  error: t2
}) => {
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext), {
    init: o2,
    componentName: a2
  } = (0, g.useContext)(Do), [i2, r2] = (0, g.useState)(false), c2 = (0, g.useCallback)(() => o2(a2), [a2, o2]), {
    flowState: l2
  } = zt(e3);
  return (0, g.useEffect)(() => (addEventListener("hankoAuthSuccess", c2), () => {
    removeEventListener("hankoAuthSuccess", c2);
  }), [c2]), s(Gt, {
    children: [s(hn, {
      children: n2("headlines.error")
    }), s(cn, {
      state: l2,
      error: t2
    }), s(Qt, Object.assign({
      onSubmit: (e4) => {
        e4.preventDefault(), r2(true), c2();
      }
    }, {
      children: s(Yt, Object.assign({
        isLoading: i2
      }, {
        children: n2("labels.continue")
      }))
    }))]
  });
};
var po = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var fo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)();
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.createEmail")
      }), s(cn, {
        state: n2
      }), s(Qt, Object.assign({
        onSubmit: (e4) => po(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), n2.actions.email_address_set.run({
            email: o2
          });
        }),
        flowAction: n2.actions.email_address_set
      }, {
        children: [s(Xt, {
          type: "email",
          autoComplete: "email",
          autoCorrect: "off",
          flowInput: n2.actions.email_address_set.inputs.email,
          onInput: (e4) => po(void 0, void 0, void 0, function* () {
            e4.target instanceof HTMLInputElement && a2(e4.target.value);
          }),
          placeholder: t2("labels.email"),
          pattern: "^.*[^0-9]+$",
          value: o2
        }), s(Yt, {
          children: t2("labels.continue")
        })]
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.skip.enabled
    }, {
      children: [s("span", {
        hidden: true
      }), s(mn, Object.assign({
        flowAction: n2.actions.skip,
        loadingSpinnerPosition: "left"
      }, {
        children: t2("labels.skip")
      }))]
    }))]
  });
};
var _o = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var vo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)();
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.createUsername")
      }), s(cn, {
        state: n2
      }), s(Qt, Object.assign({
        flowAction: n2.actions.username_create,
        onSubmit: (e4) => _o(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), n2.actions.username_create.run({
            username: o2
          });
        })
      }, {
        children: [s(Xt, {
          type: "text",
          autoComplete: "username",
          autoCorrect: "off",
          flowInput: n2.actions.username_create.inputs.username,
          onInput: (e4) => _o(void 0, void 0, void 0, function* () {
            e4.target instanceof HTMLInputElement && a2(e4.target.value);
          }),
          value: o2,
          placeholder: t2("labels.username")
        }), s(Yt, {
          children: t2("labels.continue")
        })]
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.skip.enabled
    }, {
      children: [s("span", {
        hidden: true
      }), s(mn, Object.assign({
        flowAction: n2.actions.skip,
        loadingSpinnerPosition: "left"
      }, {
        children: t2("labels.skip")
      }))]
    }))]
  });
};
var mo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.setupLoginMethod")
      }), s(cn, {
        flowError: null == n2 ? void 0 : n2.error
      }), s(In, {
        children: t2("texts.selectLoginMethodForFutureLogins")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.continue_to_passkey_registration
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          icon: "passkey"
        }, {
          children: t2("labels.passkey")
        }))
      })), s(Qt, Object.assign({
        flowAction: n2.actions.continue_to_password_registration
      }, {
        children: s(Yt, Object.assign({
          secondary: true,
          icon: "password"
        }, {
          children: t2("labels.password")
        }))
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.back.enabled && !n2.actions.skip.enabled
    }, {
      children: [s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.back
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        loadingSpinnerPosition: "left",
        flowAction: n2.actions.skip
      }, {
        children: t2("labels.skip")
      }))]
    }))]
  });
};
var go = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var bo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)([]), r2 = (0, g.useCallback)((e4) => go(void 0, void 0, void 0, function* () {
    return n2.actions.otp_code_validate.run({
      otp_code: e4
    });
  }), [n2]);
  return (0, g.useEffect)(() => {
    a2([]);
  }, [n2]), s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.otpLogin")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.otpLogin")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.otp_code_validate,
        onSubmit: (e4) => go(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), r2(o2.join(""));
        })
      }, {
        children: [s(xn, {
          onInput: (e4) => {
            if (a2(e4), 6 === e4.filter((e5) => "" !== e5).length) return r2(e4.join(""));
          },
          passcodeDigits: o2,
          numberOfInputs: 6
        }), s(Yt, {
          children: t2("labels.continue")
        })]
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.continue_to_login_security_key.enabled
    }, {
      children: s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.continue_to_login_security_key
      }, {
        children: t2("labels.useAnotherMethod")
      }))
    }))]
  });
};
var yo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.securityKeyLogin")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.securityKeyLogin")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.webauthn_generate_request_options
      }, {
        children: s(Yt, Object.assign({
          autofocus: true,
          icon: "securityKey"
        }, {
          children: t2("labels.securityKeyUse")
        }))
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.continue_to_login_otp.enabled
    }, {
      children: s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.continue_to_login_otp
      }, {
        children: t2("labels.useAnotherMethod")
      }))
    }))]
  });
};
var ko = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), o2 = (0, g.useMemo)(() => {
    const {
      actions: e4
    } = n2;
    return e4.continue_to_security_key_creation.enabled && !e4.continue_to_otp_secret_creation.enabled ? e4.continue_to_security_key_creation : !e4.continue_to_security_key_creation.enabled && e4.continue_to_otp_secret_creation.enabled ? e4.continue_to_otp_secret_creation : void 0;
  }, [n2]);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.mfaSetUp")
      }), s(cn, {
        flowError: null == n2 ? void 0 : n2.error
      }), s(In, {
        children: t2("texts.mfaSetUp")
      }), o2 ? s(Qt, Object.assign({
        flowAction: o2
      }, {
        children: s(Yt, {
          children: t2("labels.continue")
        })
      })) : s(i.Fragment, {
        children: [s(Qt, Object.assign({
          flowAction: n2.actions.continue_to_security_key_creation
        }, {
          children: s(Yt, Object.assign({
            secondary: true,
            icon: "securityKey"
          }, {
            children: t2("labels.securityKey")
          }))
        })), s(Qt, Object.assign({
          flowAction: n2.actions.continue_to_otp_secret_creation
        }, {
          children: s(Yt, Object.assign({
            secondary: true,
            icon: "qrCodeScanner"
          }, {
            children: t2("labels.authenticatorApp")
          }))
        }))]
      })]
    }), s(gn, {
      children: [s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.back
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        loadingSpinnerPosition: "left",
        flowAction: n2.actions.skip
      }, {
        children: t2("labels.skip")
      }))]
    })]
  });
};
var wo = n(560);
var So = {};
So.setAttributes = ut(), So.insert = (e3) => {
  window._hankoStyle = e3;
}, So.domAPI = lt(), So.insertStyleElement = pt(), st()(wo.A, So);
var xo = wo.A && wo.A.locals ? wo.A.locals : void 0;
var Co = ({
  children: e3,
  text: t2
}) => {
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext), [o2, a2] = (0, g.useState)(false);
  return s("section", Object.assign({
    className: vt.clipboardContainer
  }, {
    children: [s("div", {
      children: [e3, " "]
    }), s("div", Object.assign({
      className: vt.clipboardIcon,
      onClick: (e4) => {
        return n3 = void 0, o3 = void 0, r2 = function* () {
          e4.preventDefault();
          try {
            yield navigator.clipboard.writeText(t2), a2(true), setTimeout(() => a2(false), 1500);
          } catch (e5) {
            console.error("Failed to copy: ", e5);
          }
        }, new ((i2 = void 0) || (i2 = Promise))(function(e5, t3) {
          function a3(e6) {
            try {
              c2(r2.next(e6));
            } catch (e7) {
              t3(e7);
            }
          }
          function s2(e6) {
            try {
              c2(r2.throw(e6));
            } catch (e7) {
              t3(e7);
            }
          }
          function c2(t4) {
            var n4;
            t4.done ? e5(t4.value) : (n4 = t4.value, n4 instanceof i2 ? n4 : new i2(function(e6) {
              e6(n4);
            })).then(a3, s2);
          }
          c2((r2 = r2.apply(n3, o3 || [])).next());
        });
        var n3, o3, i2, r2;
      }
    }, {
      children: o2 ? s("span", {
        children: ["- ", n2("labels.copied")]
      }) : s(Ht, {
        name: "copy",
        secondary: true,
        size: 13
      })
    }))]
  }));
};
var Ao = ({
  src: e3,
  secret: t2
}) => {
  const {
    t: n2
  } = (0, g.useContext)(m.TranslateContext);
  return s("div", Object.assign({
    className: xo.otpCreationDetails
  }, {
    children: [s("img", {
      alt: "QR-Code",
      src: e3
    }), s(yn, {}), s(Co, Object.assign({
      text: t2
    }, {
      children: n2("texts.otpSecretKey")
    })), s("div", {
      children: t2
    })]
  }));
};
var Oo = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Io = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state), [o2, a2] = (0, g.useState)([]), r2 = (0, g.useCallback)((e4) => Oo(void 0, void 0, void 0, function* () {
    return n2.actions.otp_code_verify.run({
      otp_code: e4
    });
  }), [n2]);
  return (0, g.useEffect)(() => {
    var e4;
    "passcode_invalid" === (null === (e4 = n2.error) || void 0 === e4 ? void 0 : e4.code) && a2([]);
  }, [n2]), s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.otpSetUp")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.otpScanQRCode")
      }), s(Ao, {
        src: n2.payload.otp_image_source,
        secret: n2.payload.otp_secret
      }), s(In, {
        children: t2("texts.otpEnterVerificationCode")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.otp_code_verify,
        onSubmit: (e4) => Oo(void 0, void 0, void 0, function* () {
          return e4.preventDefault(), r2(o2.join(""));
        })
      }, {
        children: [s(xn, {
          onInput: (e4) => {
            if (a2(e4), 6 === e4.filter((e5) => "" !== e5).length) return r2(e4.join(""));
          },
          passcodeDigits: o2,
          numberOfInputs: 6
        }), s(Yt, {
          children: t2("labels.continue")
        })]
      }))]
    }), s(gn, {
      children: s(mn, Object.assign({
        flowAction: n2.actions.back,
        loadingSpinnerPosition: "right"
      }, {
        children: t2("labels.back")
      }))
    })]
  });
};
var jo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.securityKeySetUp")
      }), s(cn, {
        state: n2
      }), s(In, {
        children: t2("texts.securityKeySetUp")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.webauthn_generate_creation_options
      }, {
        children: s(Yt, Object.assign({
          autofocus: true,
          icon: "securityKey"
        }, {
          children: t2("labels.createSecurityKey")
        }))
      }))]
    }), s(gn, Object.assign({
      hidden: !n2.actions.back.enabled
    }, {
      children: s(mn, Object.assign({
        loadingSpinnerPosition: "right",
        flowAction: n2.actions.back
      }, {
        children: t2("labels.back")
      }))
    }))]
  });
};
var Eo = (e3) => {
  const {
    t: t2
  } = (0, g.useContext)(m.TranslateContext), {
    flowState: n2
  } = zt(e3.state);
  return s(i.Fragment, {
    children: [s(Gt, {
      children: [s(hn, {
        children: t2("headlines.trustDevice")
      }), s(cn, {
        flowError: null == n2 ? void 0 : n2.error
      }), s(In, {
        children: t2("texts.trustDevice")
      }), s(Qt, Object.assign({
        flowAction: n2.actions.trust_device
      }, {
        children: s(Yt, {
          children: t2("labels.trustDevice")
        })
      }))]
    }), s(gn, {
      children: [s(mn, Object.assign({
        flowAction: n2.actions.back,
        loadingSpinnerPosition: "right"
      }, {
        children: t2("labels.back")
      })), s(mn, Object.assign({
        flowAction: n2.actions.skip,
        loadingSpinnerPosition: "left"
      }, {
        children: t2("labels.skip")
      }))]
    })]
  });
};
var Po = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Do = (0, i.createContext)(null);
var To = (e3) => {
  var t2, {
    lang: n2,
    prefilledEmail: o2,
    prefilledUsername: a2,
    globalOptions: r2,
    createWebauthnAbortSignal: c2
  } = e3, l2 = function(e4, t3) {
    var n3 = {};
    for (var o3 in e4) Object.prototype.hasOwnProperty.call(e4, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e4[o3]);
    if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
      var a3 = 0;
      for (o3 = Object.getOwnPropertySymbols(e4); a3 < o3.length; a3++) t3.indexOf(o3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[a3]) && (n3[o3[a3]] = e4[o3[a3]]);
    }
    return n3;
  }(e3, ["lang", "prefilledEmail", "prefilledUsername", "globalOptions", "createWebauthnAbortSignal"]);
  const {
    hanko: d2,
    injectStyles: u2,
    hidePasskeyButtonOnLogin: h2,
    translations: p2,
    translationsLocation: f2,
    fallbackLanguage: _2
  } = r2;
  d2.setLang((null == n2 ? void 0 : n2.toString()) || _2);
  const v2 = (0, g.useRef)(null), b2 = (0, g.useMemo)(() => `${r2.storageKey}_last_login`, [r2.storageKey]), [y2, k2] = (0, g.useState)(l2.componentName), [w2, S2] = (0, g.useState)(null !== (t2 = l2.mode) && void 0 !== t2 ? t2 : "login"), x2 = (0, g.useMemo)(() => ({
    auth: w2,
    login: "login",
    registration: "registration",
    profile: "profile",
    events: null
  }), [w2]), C2 = (0, g.useMemo)(() => s(Rt, {}), []), [A2, O2] = (0, g.useState)(C2), [, I2] = (0, g.useState)(d2), [j2, E2] = (0, g.useState)(), [P2, D2] = (0, g.useState)({
    email: o2,
    username: a2
  }), T2 = function(e4, t3) {
    var n3;
    null === (n3 = v2.current) || void 0 === n3 || n3.dispatchEvent(new CustomEvent(e4, {
      detail: t3,
      bubbles: false,
      composed: true
    }));
  }, N2 = (0, g.useCallback)((e4) => x2[y2] == e4.flowName, [x2, y2, w2]), L2 = (e4) => {
    O2(s(ho, {
      error: e4 instanceof oe ? e4 : new ae(e4)
    }));
  };
  (0, g.useMemo)(() => d2.onBeforeStateChange(({
    state: e4
  }) => {
    N2(e4) && D2((e5) => Object.assign(Object.assign({}, e5), {
      isDisabled: true,
      error: void 0
    }));
  }), [d2, N2]), (0, g.useEffect)(() => d2.onAfterStateChange(({
    state: e4
  }) => Po(void 0, void 0, void 0, function* () {
    var t3;
    if (N2(e4)) switch (["onboarding_verify_passkey_attestation", "webauthn_credential_verification", "login_passkey", "thirdparty"].includes(e4.name) || D2((e5) => Object.assign(Object.assign({}, e5), {
      isDisabled: false
    })), e4.name) {
      case "login_init":
        O2(s(wn, {
          state: e4
        })), e4.passkeyAutofillActivation();
        break;
      case "passcode_confirmation":
        O2(s(En, {
          state: e4
        }));
        break;
      case "login_otp":
        O2(s(bo, {
          state: e4
        }));
        break;
      case "onboarding_create_passkey":
        O2(s(Pn, {
          state: e4
        }));
        break;
      case "login_password":
        O2(s(Tn, {
          state: e4
        }));
        break;
      case "login_password_recovery":
        O2(s(Ln, {
          state: e4
        }));
        break;
      case "login_security_key":
        O2(s(yo, {
          state: e4
        }));
        break;
      case "mfa_method_chooser":
        O2(s(ko, {
          state: e4
        }));
        break;
      case "mfa_otp_secret_creation":
        O2(s(Io, {
          state: e4
        }));
        break;
      case "mfa_security_key_creation":
        O2(s(jo, {
          state: e4
        }));
        break;
      case "login_method_chooser":
        O2(s(Mn, {
          state: e4
        }));
        break;
      case "registration_init":
        O2(s(Wn, {
          state: e4
        }));
        break;
      case "password_creation":
        O2(s(Hn, {
          state: e4
        }));
        break;
      case "success":
        (null === (t3 = e4.payload) || void 0 === t3 ? void 0 : t3.last_login) && localStorage.setItem(b2, JSON.stringify(e4.payload.last_login)), e4.autoStep();
        break;
      case "profile_init":
        O2(s(uo, {
          state: e4,
          enablePasskeys: r2.enablePasskeys
        }));
        break;
      case "error":
        O2(s(ho, {
          state: e4
        }));
        break;
      case "onboarding_email":
        O2(s(fo, {
          state: e4
        }));
        break;
      case "onboarding_username":
        O2(s(vo, {
          state: e4
        }));
        break;
      case "credential_onboarding_chooser":
        O2(s(mo, {
          state: e4
        }));
        break;
      case "device_trust":
        O2(s(Eo, {
          state: e4
        }));
    }
  })), [y2, x2]);
  const M2 = (0, g.useCallback)((e4) => Po(void 0, void 0, void 0, function* () {
    D2((e5) => Object.assign(Object.assign({}, e5), {
      isDisabled: true
    }));
    const t3 = localStorage.getItem(b2);
    t3 && E2(JSON.parse(t3));
    const n3 = {
      excludeAutoSteps: ["success"],
      cacheKey: "hanko-auth-flow-state",
      dispatchAfterStateChangeEvent: false
    };
    if ("idp_initiated" === new URLSearchParams(window.location.search).get("saml_hint")) S2("token_exchange"), yield d2.createState("token_exchange", Object.assign(Object.assign({}, n3), {
      dispatchAfterStateChangeEvent: true
    }));
    else {
      const t4 = yield d2.createState(e4, n3);
      S2(t4.flowName), setTimeout(() => t4.dispatchAfterStateChangeEvent(), 500);
    }
  }), []), U2 = (0, g.useCallback)((e4) => {
    k2(e4);
    const t3 = x2[e4];
    t3 && M2(t3).catch(L2);
  }, []);
  return (0, g.useEffect)(() => U2(y2), []), (0, g.useEffect)(() => {
    d2.onUserDeleted(() => {
      T2("onUserDeleted");
    }), d2.onSessionCreated((e4) => {
      T2("onSessionCreated", e4);
    }), d2.onSessionExpired(() => {
      T2("onSessionExpired");
    }), d2.onUserLoggedOut(() => {
      T2("onUserLoggedOut");
    }), d2.onBeforeStateChange((e4) => {
      T2("onBeforeStateChange", e4);
    }), d2.onAfterStateChange((e4) => {
      T2("onAfterStateChange", e4);
    });
  }, [d2]), (0, g.useMemo)(() => {
    const e4 = () => {
      U2(y2);
    };
    ["auth", "login", "registration"].includes(y2) ? (d2.onUserLoggedOut(e4), d2.onSessionExpired(e4), d2.onUserDeleted(e4)) : "profile" === y2 && d2.onSessionCreated(e4);
  }, [y2, d2, U2]), s(Do.Provider, Object.assign({
    value: {
      init: U2,
      initialComponentName: l2.componentName,
      setUIState: D2,
      uiState: P2,
      hanko: d2,
      setHanko: I2,
      lang: (null == n2 ? void 0 : n2.toString()) || _2,
      prefilledEmail: o2,
      prefilledUsername: a2,
      componentName: y2,
      setComponentName: k2,
      hidePasskeyButtonOnLogin: h2,
      page: A2,
      setPage: O2,
      lastLogin: j2,
      isOwnFlow: N2
    }
  }, {
    children: s(m.TranslateProvider, Object.assign({
      translations: p2,
      fallbackLang: _2,
      root: f2
    }, {
      children: s(mt, Object.assign({
        ref: v2
      }, {
        children: "events" !== y2 ? s(i.Fragment, {
          children: [u2 ? s("style", {
            dangerouslySetInnerHTML: {
              __html: window._hankoStyle.innerHTML
            }
          }) : null, A2]
        }) : null
      }))
    }))
  }));
};
var No = {
  en: n(6).en
};
var Lo = function(e3, t2, n2, o2) {
  return new (n2 || (n2 = Promise))(function(a2, i2) {
    function r2(e4) {
      try {
        c2(o2.next(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function s2(e4) {
      try {
        c2(o2.throw(e4));
      } catch (e5) {
        i2(e5);
      }
    }
    function c2(e4) {
      var t3;
      e4.done ? a2(e4.value) : (t3 = e4.value, t3 instanceof n2 ? t3 : new n2(function(e5) {
        e5(t3);
      })).then(r2, s2);
    }
    c2((o2 = o2.apply(e3, t2 || [])).next());
  });
};
var Mo = {};
var Uo = (e3, t2) => s(To, Object.assign({
  componentName: e3,
  globalOptions: Mo,
  createWebauthnAbortSignal: Ko
}, t2));
var Wo = (e3) => Uo("auth", e3);
var Fo = (e3) => Uo("login", e3);
var Ho = (e3) => Uo("registration", e3);
var qo = (e3) => Uo("profile", e3);
var Ro = (e3) => Uo("events", e3);
var zo = new AbortController();
var Ko = () => (zo && zo.abort(), zo = new AbortController(), zo.signal);
var Bo = ({
  tagName: e3,
  entryComponent: t2,
  shadow: n2 = true,
  observedAttributes: o2
}) => Lo(void 0, void 0, void 0, function* () {
  customElements.get(e3) || function(e4, t3, n3, o3) {
    function a2() {
      var t4 = Reflect.construct(HTMLElement, [], a2);
      return t4._vdomComponent = e4, t4._root = o3 && o3.shadow ? t4.attachShadow({
        mode: "open"
      }) : t4, t4;
    }
    (a2.prototype = Object.create(HTMLElement.prototype)).constructor = a2, a2.prototype.connectedCallback = u, a2.prototype.attributeChangedCallback = p, a2.prototype.disconnectedCallback = f, n3 = n3 || e4.observedAttributes || Object.keys(e4.propTypes || {}), a2.observedAttributes = n3, n3.forEach(function(e5) {
      Object.defineProperty(a2.prototype, e5, {
        get: function() {
          var t4, n4, o4, a3;
          return null != (t4 = null == (n4 = this._vdom) || null == (o4 = n4.props) ? void 0 : o4[e5]) ? t4 : null == (a3 = this._props) ? void 0 : a3[e5];
        },
        set: function(t4) {
          this._vdom ? this.attributeChangedCallback(e5, null, t4) : (this._props || (this._props = {}), this._props[e5] = t4, this.connectedCallback());
          var n4 = typeof t4;
          null != t4 && "string" !== n4 && "boolean" !== n4 && "number" !== n4 || this.setAttribute(e5, t4);
        }
      });
    }), customElements.define(t3 || e4.tagName || e4.displayName || e4.name, a2);
  }(t2, e3, o2, {
    shadow: n2
  });
});
var Zo = (e3, t2 = {}) => Lo(void 0, void 0, void 0, function* () {
  const n2 = ["api", "lang", "prefilled-email", "entry", "mode"];
  return t2 = Object.assign({
    shadow: true,
    injectStyles: true,
    enablePasskeys: true,
    hidePasskeyButtonOnLogin: false,
    translations: null,
    translationsLocation: "/i18n",
    fallbackLanguage: "en",
    storageKey: "hanko",
    sessionCheckInterval: 3e4
  }, t2), Mo.hanko = new it(e3, {
    cookieName: t2.storageKey,
    cookieDomain: t2.cookieDomain,
    cookieSameSite: t2.cookieSameSite,
    localStorageKey: t2.storageKey,
    sessionCheckInterval: t2.sessionCheckInterval,
    sessionTokenLocation: t2.sessionTokenLocation
  }), Mo.injectStyles = t2.injectStyles, Mo.enablePasskeys = t2.enablePasskeys, Mo.hidePasskeyButtonOnLogin = t2.hidePasskeyButtonOnLogin, Mo.translations = t2.translations || No, Mo.translationsLocation = t2.translationsLocation, Mo.fallbackLanguage = t2.fallbackLanguage, Mo.storageKey = t2.storageKey, yield Promise.all([Bo(Object.assign(Object.assign({}, t2), {
    tagName: "hanko-auth",
    entryComponent: Wo,
    observedAttributes: n2
  })), Bo(Object.assign(Object.assign({}, t2), {
    tagName: "hanko-login",
    entryComponent: Fo,
    observedAttributes: n2
  })), Bo(Object.assign(Object.assign({}, t2), {
    tagName: "hanko-registration",
    entryComponent: Ho,
    observedAttributes: n2
  })), Bo(Object.assign(Object.assign({}, t2), {
    tagName: "hanko-profile",
    entryComponent: qo,
    observedAttributes: n2.filter((e4) => ["api", "lang"].includes(e4))
  })), Bo(Object.assign(Object.assign({}, t2), {
    tagName: "hanko-events",
    entryComponent: Ro,
    observedAttributes: []
  }))]), {
    hanko: Mo.hanko
  };
});
var Vo = o.rc;
var $o = o.Kj;
var Jo = o.fK;
var Qo = o.tJ;
var Yo = o.Z7;
var Xo = o.qQ;
var Go = o.I4;
var ea = o.O8;
var ta = o.Qq;
var na = o.ku;
var oa = o.ls;
var aa = o.bO;
var ia = o.yv;
var ra = o.AT;
var sa = o.m_;
var ca = o.KG;
var la = o.Wj;
var da = o.DH;
var ua = o.kf;
var ha = o.Uw;
var pa = o.oY;
var fa = o.Wg;
var _a = o.AC;
var va = o.D_;
var ma = o.jx;
var ga = o.nX;
var ba = o.Nx;
var ya = o.Sd;
var ka = o.kz;
var wa = o.fX;
var Sa = o.qA;
var xa = o.tz;
var Ca = o.gN;
export {
  Vo as Action,
  $o as Client,
  Jo as ConflictError,
  Qo as CustomEventWithDetail,
  Yo as EmailAddressAlreadyExistsError,
  Xo as ForbiddenError,
  Go as Hanko,
  ea as HankoError,
  ta as HttpClient,
  na as InvalidPasscodeError,
  oa as InvalidPasswordError,
  aa as InvalidWebauthnCredentialError,
  ia as MaxNumOfEmailAddressesReachedError,
  ra as MaxNumOfPasscodeAttemptsReachedError,
  sa as NotFoundError,
  ca as PasscodeExpiredError,
  la as Relay,
  da as RequestTimeoutError,
  ua as SessionClient,
  ha as State,
  pa as TechnicalError,
  fa as ThirdPartyError,
  _a as TooManyRequestsError,
  va as UnauthorizedError,
  ma as UserClient,
  ga as UserVerificationError,
  ba as WebauthnRequestCancelledError,
  ya as WebauthnSupport,
  ka as register,
  wa as sessionCreatedType,
  Sa as sessionExpiredType,
  xa as userDeletedType,
  Ca as userLoggedOutType
};
/*! Bundled license information:

@teamhanko/hanko-elements/dist/elements.js:
  (*! For license information please see elements.js.LICENSE.txt *)
*/
//# sourceMappingURL=@teamhanko_hanko-elements.js.map
