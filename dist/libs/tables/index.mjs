import { jsx as T, jsxs as ut } from "react/jsx-runtime";
import * as s from "react";
import R, { useMemo as fo, useDebugValue as kn, createElement as ho, useRef as mo, useContext as bo, useState as Dn, useEffect as wo } from "react";
var G = function() {
  return G = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, G.apply(this, arguments);
};
function Me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function yo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xo = /* @__PURE__ */ yo(
  function(e) {
    return vo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _ = "-ms-", Ke = "-moz-", I = "-webkit-", ar = "comm", Et = "rule", Qt = "decl", Co = "@import", ir = "@keyframes", So = "@layer", sr = Math.abs, en = String.fromCharCode, Bt = Object.assign;
function Ro(e, t) {
  return W(e, 0) ^ 45 ? (((t << 2 ^ W(e, 0)) << 2 ^ W(e, 1)) << 2 ^ W(e, 2)) << 2 ^ W(e, 3) : 0;
}
function lr(e) {
  return e.trim();
}
function ge(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function P(e, t, n) {
  return e.replace(t, n);
}
function pt(e, t, n) {
  return e.indexOf(t, n);
}
function W(e, t) {
  return e.charCodeAt(t) | 0;
}
function Le(e, t, n) {
  return e.slice(t, n);
}
function ce(e) {
  return e.length;
}
function cr(e) {
  return e.length;
}
function Xe(e, t) {
  return t.push(e), e;
}
function Eo(e, t) {
  return e.map(t).join("");
}
function An(e, t) {
  return e.filter(function(n) {
    return !ge(n, t);
  });
}
var $t = 1, ze = 1, dr = 0, te = 0, H = 0, Ue = "";
function Ot(e, t, n, r, o, a, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: $t, column: ze, length: i, return: "", siblings: l };
}
function xe(e, t) {
  return Bt(Ot("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function He(e) {
  for (; e.root; )
    e = xe(e.root, { children: [e] });
  Xe(e, e.siblings);
}
function $o() {
  return H;
}
function Oo() {
  return H = te > 0 ? W(Ue, --te) : 0, ze--, H === 10 && (ze = 1, $t--), H;
}
function oe() {
  return H = te < dr ? W(Ue, te++) : 0, ze++, H === 10 && (ze = 1, $t++), H;
}
function De() {
  return W(Ue, te);
}
function gt() {
  return te;
}
function Pt(e, t) {
  return Le(Ue, e, t);
}
function Vt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Po(e) {
  return $t = ze = 1, dr = ce(Ue = e), te = 0, [];
}
function ko(e) {
  return Ue = "", e;
}
function Ft(e) {
  return lr(Pt(te - 1, Gt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Do(e) {
  for (; (H = De()) && H < 33; )
    oe();
  return Vt(e) > 2 || Vt(H) > 3 ? "" : " ";
}
function Ao(e, t) {
  for (; --t && oe() && !(H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97); )
    ;
  return Pt(e, gt() + (t < 6 && De() == 32 && oe() == 32));
}
function Gt(e) {
  for (; oe(); )
    switch (H) {
      // ] ) " '
      case e:
        return te;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gt(H);
        break;
      // (
      case 40:
        e === 41 && Gt(e);
        break;
      // \
      case 92:
        oe();
        break;
    }
  return te;
}
function No(e, t) {
  for (; oe() && e + H !== 57; )
    if (e + H === 84 && De() === 47)
      break;
  return "/*" + Pt(t, te - 1) + "*" + en(e === 47 ? e : oe());
}
function Io(e) {
  for (; !Vt(De()); )
    oe();
  return Pt(e, te);
}
function To(e) {
  return ko(ft("", null, null, null, [""], e = Po(e), 0, [0], e));
}
function ft(e, t, n, r, o, a, i, l, c) {
  for (var h = 0, u = 0, p = i, m = 0, f = 0, y = 0, $ = 1, b = 1, E = 1, O = 0, w = "", x = o, D = a, v = r, g = w; b; )
    switch (y = O, O = oe()) {
      // (
      case 40:
        if (y != 108 && W(g, p - 1) == 58) {
          pt(g += P(Ft(O), "&", "&\f"), "&\f", sr(h ? l[h - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        g += Ft(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        g += Do(y);
        break;
      // \
      case 92:
        g += Ao(gt() - 1, 7);
        continue;
      // /
      case 47:
        switch (De()) {
          case 42:
          case 47:
            Xe(_o(No(oe(), gt()), t, n, c), c);
            break;
          default:
            g += "/";
        }
        break;
      // {
      case 123 * $:
        l[h++] = ce(g) * E;
      // } ; \0
      case 125 * $:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            b = 0;
          // ;
          case 59 + u:
            E == -1 && (g = P(g, /\f/g, "")), f > 0 && ce(g) - p && Xe(f > 32 ? In(g + ";", r, n, p - 1, c) : In(P(g, " ", "") + ";", r, n, p - 2, c), c);
            break;
          // @ ;
          case 59:
            g += ";";
          // { rule/at-rule
          default:
            if (Xe(v = Nn(g, t, n, h, u, o, l, w, x = [], D = [], p, a), a), O === 123)
              if (u === 0)
                ft(g, t, v, v, x, a, p, l, D);
              else
                switch (m === 99 && W(g, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, v, v, r && Xe(Nn(e, v, v, 0, 0, o, l, w, o, x = [], p, D), D), o, D, p, l, r ? x : D);
                    break;
                  default:
                    ft(g, v, v, v, [""], D, 0, l, D);
                }
        }
        h = u = f = 0, $ = E = 1, w = g = "", p = i;
        break;
      // :
      case 58:
        p = 1 + ce(g), f = y;
      default:
        if ($ < 1) {
          if (O == 123)
            --$;
          else if (O == 125 && $++ == 0 && Oo() == 125)
            continue;
        }
        switch (g += en(O), O * $) {
          // &
          case 38:
            E = u > 0 ? 1 : (g += "\f", -1);
            break;
          // ,
          case 44:
            l[h++] = (ce(g) - 1) * E, E = 1;
            break;
          // @
          case 64:
            De() === 45 && (g += Ft(oe())), m = De(), u = p = ce(w = g += Io(gt())), O++;
            break;
          // -
          case 45:
            y === 45 && ce(g) == 2 && ($ = 0);
        }
    }
  return a;
}
function Nn(e, t, n, r, o, a, i, l, c, h, u, p) {
  for (var m = o - 1, f = o === 0 ? a : [""], y = cr(f), $ = 0, b = 0, E = 0; $ < r; ++$)
    for (var O = 0, w = Le(e, m + 1, m = sr(b = i[$])), x = e; O < y; ++O)
      (x = lr(b > 0 ? f[O] + " " + w : P(w, /&\f/g, f[O]))) && (c[E++] = x);
  return Ot(e, t, n, o === 0 ? Et : l, c, h, u, p);
}
function _o(e, t, n, r) {
  return Ot(e, t, n, ar, en($o()), Le(e, 2, -2), 0, r);
}
function In(e, t, n, r, o) {
  return Ot(e, t, n, Qt, Le(e, 0, r), Le(e, r + 1, -1), r, o);
}
function ur(e, t, n) {
  switch (Ro(e, t)) {
    // color-adjust
    case 5103:
      return I + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return I + e + e;
    // tab-size
    case 4789:
      return Ke + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return I + e + Ke + e + _ + e + e;
    // writing-mode
    case 5936:
      switch (W(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return I + e + _ + P(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return I + e + _ + P(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return I + e + _ + P(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return I + e + _ + e + e;
    // order
    case 6165:
      return I + e + _ + "flex-" + e + e;
    // align-items
    case 5187:
      return I + e + P(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + _ + "flex-$1$2") + e;
    // align-self
    case 5443:
      return I + e + _ + "flex-item-" + P(e, /flex-|-self/g, "") + (ge(e, /flex-|baseline/) ? "" : _ + "grid-row-" + P(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return I + e + _ + "flex-line-pack" + P(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return I + e + _ + P(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return I + e + _ + P(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return I + "box-" + P(e, "-grow", "") + I + e + _ + P(e, "grow", "positive") + e;
    // transition
    case 4554:
      return I + P(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
    // cursor
    case 6187:
      return P(P(P(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return P(e, /(image-set\([^]*)/, I + "$1$`$1");
    // justify-content
    case 4968:
      return P(P(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + _ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
    // justify-self
    case 4200:
      if (!ge(e, /flex-|baseline/)) return _ + "grid-column-align" + Le(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return _ + P(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, ge(r.props, /grid-\w+-end/);
      }) ? ~pt(e + (n = n[t].value), "span", 0) ? e : _ + P(e, "-start", "") + e + _ + "grid-row-span:" + (~pt(n, "span", 0) ? ge(n, /\d+/) : +ge(n, /\d+/) - +ge(e, /\d+/)) + ";" : _ + P(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return ge(r.props, /grid-\w+-start/);
      }) ? e : _ + P(P(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return P(e, /(.+)-inline(.+)/, I + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ce(e) - 1 - t > 6)
        switch (W(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (W(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return P(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + Ke + (W(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~pt(e, "stretch", 0) ? ur(P(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return P(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, a, i, l, c, h) {
        return _ + o + ":" + a + h + (i ? _ + o + "-span:" + (l ? c : +c - +a) + h : "") + e;
      });
    // position: sticky
    case 4949:
      if (W(e, t + 6) === 121)
        return P(e, ":", ":" + I) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (W(e, W(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return P(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + I + (W(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + _ + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return P(e, ":", ":" + _) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return P(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function wt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function jo(e, t, n, r) {
  switch (e.type) {
    case So:
      if (e.children.length) break;
    case Co:
    case Qt:
      return e.return = e.return || e.value;
    case ar:
      return "";
    case ir:
      return e.return = e.value + "{" + wt(e.children, r) + "}";
    case Et:
      if (!ce(e.value = e.props.join(","))) return "";
  }
  return ce(n = wt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fo(e) {
  var t = cr(e);
  return function(n, r, o, a) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](n, r, o, a) || "";
    return i;
  };
}
function Ho(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Mo(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Qt:
        e.return = ur(e.value, e.length, n);
        return;
      case ir:
        return wt([xe(e, { value: P(e.value, "@", "@" + I) })], r);
      case Et:
        if (e.length)
          return Eo(n = e.props, function(o) {
            switch (ge(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                He(xe(e, { props: [P(o, /:(read-\w+)/, ":" + Ke + "$1")] })), He(xe(e, { props: [o] })), Bt(e, { props: An(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                He(xe(e, { props: [P(o, /:(plac\w+)/, ":" + I + "input-$1")] })), He(xe(e, { props: [P(o, /:(plac\w+)/, ":" + Ke + "$1")] })), He(xe(e, { props: [P(o, /:(plac\w+)/, _ + "input-$1")] })), He(xe(e, { props: [o] })), Bt(e, { props: An(n, r) });
                break;
            }
            return "";
          });
    }
}
var Lo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ne = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", pr = "active", gr = "data-styled-version", kt = "6.1.17", tn = `/*!sc*/
`, yt = typeof window < "u" && "HTMLElement" in window, zo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Tn = /invalid hook call/i, at = /* @__PURE__ */ new Set(), Wo = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        for (var l = [], c = 1; c < arguments.length; c++) l[c - 1] = arguments[c];
        Tn.test(i) ? (a = !1, at.delete(r)) : o.apply(void 0, Me([i], l, !1));
      }, mo(), a && !at.has(r) && (console.warn(r), at.add(r));
    } catch (i) {
      Tn.test(i.message) && at.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Dt = Object.freeze([]), We = Object.freeze({});
function Bo(e, t, n) {
  return n === void 0 && (n = We), e.theme !== n.theme && e.theme || t || n.theme;
}
var Ut = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Vo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Go = /(^-|-$)/g;
function _n(e) {
  return e.replace(Vo, "-").replace(Go, "");
}
var Uo = /(a)(d)/gi, it = 52, jn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Yt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > it; t = t / it | 0) n = jn(t % it) + n;
  return (jn(t % it) + n).replace(Uo, "$1-$2");
}
var Ht, fr = 5381, Pe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, hr = function(e) {
  return Pe(fr, e);
};
function Yo(e) {
  return Yt(hr(e) >>> 0);
}
function mr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var br = typeof Symbol == "function" && Symbol.for, wr = br ? Symbol.for("react.memo") : 60115, qo = br ? Symbol.for("react.forward_ref") : 60112, Zo = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xo = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, yr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ko = ((Ht = {})[qo] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ht[wr] = yr, Ht);
function Fn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === wr ? yr : "$$typeof" in e ? Ko[e.$$typeof] : Zo;
  var t;
}
var Jo = Object.defineProperty, Qo = Object.getOwnPropertyNames, Hn = Object.getOwnPropertySymbols, ea = Object.getOwnPropertyDescriptor, ta = Object.getPrototypeOf, Mn = Object.prototype;
function vr(e, t, n) {
  if (typeof t != "string") {
    if (Mn) {
      var r = ta(t);
      r && r !== Mn && vr(e, r, n);
    }
    var o = Qo(t);
    Hn && (o = o.concat(Hn(t)));
    for (var a = Fn(e), i = Fn(t), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!(c in Xo || n && n[c] || i && c in i || a && c in a)) {
        var h = ea(t, c);
        try {
          Jo(e, c, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ie(e) {
  return typeof e == "function";
}
function nn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ke(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ln(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Be(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Be(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = qt(e[r], t[r]);
  else if (Be(t)) for (var r in t) e[r] = qt(e[r], t[r]);
  return e;
}
function rn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var na = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ra() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, a = e.length; o < a; o += 1) r.push(e[o]);
  return r.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
function fe(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ra.apply(void 0, Me([na[e]], t, !1)).trim());
}
var oa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, a = o; t >= a; ) if ((a <<= 1) < 0) throw fe(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(r), this.length = a;
      for (var i = o; i < a; i++) this.groupSizes[i] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = (i = 0, n.length); i < c; i++) this.tag.insertRule(l, n[i]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var a = r; a < o; a++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r, i = o; i < a; i++) n += "".concat(this.tag.getRule(i)).concat(tn);
    return n;
  }, e;
}(), aa = 1 << 30, ht = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), mt = 1, st = function(e) {
  if (ht.has(e)) return ht.get(e);
  for (; vt.has(mt); ) mt++;
  var t = mt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > aa)) throw fe(16, "".concat(t));
  return ht.set(e, t), vt.set(t, e), t;
}, ia = function(e, t) {
  mt = t + 1, ht.set(e, t), vt.set(t, e);
}, sa = "style[".concat(Ne, "][").concat(gr, '="').concat(kt, '"]'), la = new RegExp("^".concat(Ne, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ca = function(e, t, n) {
  for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++) (r = o[a]) && e.registerName(t, r);
}, da = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(tn), o = [], a = 0, i = r.length; a < i; a++) {
    var l = r[a].trim();
    if (l) {
      var c = l.match(la);
      if (c) {
        var h = 0 | parseInt(c[1], 10), u = c[2];
        h !== 0 && (ia(u, h), ca(e, u, c[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else o.push(l);
    }
  }
}, zn = function(e) {
  for (var t = document.querySelectorAll(sa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(Ne) !== pr && (da(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ua() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(Ne, "]")));
    return c[c.length - 1];
  }(n), a = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Ne, pr), r.setAttribute(gr, kt);
  var i = ua();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r;
}, pa = function() {
  function e(t) {
    this.element = xr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, a = r.length; o < a; o++) {
        var i = r[o];
        if (i.ownerNode === n) return i;
      }
      throw fe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), ga = function() {
  function e(t) {
    this.element = xr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), fa = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Wn = yt, ha = { isServer: !yt, useCSSOMInjection: !zo }, Cr = function() {
  function e(t, n, r) {
    t === void 0 && (t = We), n === void 0 && (n = {});
    var o = this;
    this.options = G(G({}, ha), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && yt && Wn && (Wn = !1, zn(this)), rn(this, function() {
      return function(a) {
        for (var i = a.getTag(), l = i.length, c = "", h = function(p) {
          var m = function(E) {
            return vt.get(E);
          }(p);
          if (m === void 0) return "continue";
          var f = a.names.get(m), y = i.getGroup(p);
          if (f === void 0 || !f.size || y.length === 0) return "continue";
          var $ = "".concat(Ne, ".g").concat(p, '[id="').concat(m, '"]'), b = "";
          f !== void 0 && f.forEach(function(E) {
            E.length > 0 && (b += "".concat(E, ","));
          }), c += "".concat(y).concat($, '{content:"').concat(b, '"}').concat(tn);
        }, u = 0; u < l; u++) h(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return st(t);
  }, e.prototype.rehydrate = function() {
    !this.server && yt && zn(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(G(G({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new fa(o) : r ? new pa(o) : new ga(o);
    }(this.options), new oa(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(st(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ma = /&/g, ba = /^\s*\/\/.*$/gm;
function Sr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Sr(n.children, t)), n;
  });
}
function wa(e) {
  var t, n, r, o = We, a = o.options, i = a === void 0 ? We : a, l = o.plugins, c = l === void 0 ? Dt : l, h = function(m, f, y) {
    return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0 ? ".".concat(t) : m;
  }, u = c.slice();
  u.push(function(m) {
    m.type === Et && m.value.includes("&") && (m.props[0] = m.props[0].replace(ma, n).replace(r, h));
  }), i.prefix && u.push(Mo), u.push(jo);
  var p = function(m, f, y, $) {
    f === void 0 && (f = ""), y === void 0 && (y = ""), $ === void 0 && ($ = "&"), t = $, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var b = m.replace(ba, ""), E = To(y || f ? "".concat(y, " ").concat(f, " { ").concat(b, " }") : b);
    i.namespace && (E = Sr(E, i.namespace));
    var O = [];
    return wt(E, Fo(u.concat(Ho(function(w) {
      return O.push(w);
    })))), O;
  };
  return p.hash = c.length ? c.reduce(function(m, f) {
    return f.name || fe(15), Pe(m, f.name);
  }, fr).toString() : "", p;
}
var ya = new Cr(), Zt = wa(), Rr = R.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: Zt });
Rr.Consumer;
R.createContext(void 0);
function Bn() {
  return bo(Rr);
}
var Vn = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, a) {
      a === void 0 && (a = Zt);
      var i = r.name + a.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, a(r.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, rn(this, function() {
      throw fe(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Zt), this.name + t.hash;
  }, e;
}(), va = function(e) {
  return e >= "A" && e <= "Z";
};
function Gn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    va(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Er = function(e) {
  return e == null || e === !1 || e === "";
}, $r = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !Er(a) && (Array.isArray(a) && a.isCss || Ie(a) ? r.push("".concat(Gn(o), ":"), a, ";") : Be(a) ? r.push.apply(r, Me(Me(["".concat(o, " {")], $r(a), !1), ["}"], !1)) : r.push("".concat(Gn(o), ": ").concat((t = o, (n = a) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Lo || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Ae(e, t, n, r) {
  if (Er(e)) return [];
  if (nn(e)) return [".".concat(e.styledComponentId)];
  if (Ie(e)) {
    if (!Ie(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Vn || Be(o) || o === null || console.error("".concat(mr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ae(o, t, n, r);
  }
  var a;
  return e instanceof Vn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Be(e) ? $r(e) : Array.isArray(e) ? Array.prototype.concat.apply(Dt, e.map(function(i) {
    return Ae(i, t, n, r);
  })) : [e.toString()];
}
function xa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ie(n) && !nn(n)) return !1;
  }
  return !0;
}
var Ca = hr(kt), Sa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && xa(t), this.componentId = n, this.baseHash = Pe(Ca, n), this.baseStyle = r, Cr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = ke(o, this.staticRulesId);
    else {
      var a = Ln(Ae(this.rules, t, n, r)), i = Yt(Pe(this.baseHash, a) >>> 0);
      if (!n.hasNameForId(this.componentId, i)) {
        var l = r(a, ".".concat(i), void 0, this.componentId);
        n.insertRules(this.componentId, i, l);
      }
      o = ke(o, i), this.staticRulesId = i;
    }
    else {
      for (var c = Pe(this.baseHash, r.hash), h = "", u = 0; u < this.rules.length; u++) {
        var p = this.rules[u];
        if (typeof p == "string") h += p, process.env.NODE_ENV !== "production" && (c = Pe(c, p));
        else if (p) {
          var m = Ln(Ae(p, t, n, r));
          c = Pe(c, m + u), h += m;
        }
      }
      if (h) {
        var f = Yt(c >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(h, ".".concat(f), void 0, this.componentId)), o = ke(o, f);
      }
    }
    return o;
  }, e;
}(), xt = R.createContext(void 0);
xt.Consumer;
function Ra(e) {
  var t = R.useContext(xt), n = fo(function() {
    return function(r, o) {
      if (!r) throw fe(14);
      if (Ie(r)) {
        var a = r(o);
        if (process.env.NODE_ENV !== "production" && (a === null || Array.isArray(a) || typeof a != "object")) throw fe(7);
        return a;
      }
      if (Array.isArray(r) || typeof r != "object") throw fe(8);
      return o ? G(G({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? R.createElement(xt.Provider, { value: n }, e.children) : null;
}
var Lt = {}, Un = /* @__PURE__ */ new Set();
function Ea(e, t, n) {
  var r = nn(e), o = e, a = !Mt(e), i = t.attrs, l = i === void 0 ? Dt : i, c = t.componentId, h = c === void 0 ? function(x, D) {
    var v = typeof x != "string" ? "sc" : _n(x);
    Lt[v] = (Lt[v] || 0) + 1;
    var g = "".concat(v, "-").concat(Yo(kt + v + Lt[v]));
    return D ? "".concat(D, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, p = u === void 0 ? function(x) {
    return Mt(x) ? "styled.".concat(x) : "Styled(".concat(mr(x), ")");
  }(e) : u, m = t.displayName && t.componentId ? "".concat(_n(t.displayName), "-").concat(t.componentId) : t.componentId || h, f = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l, y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var $ = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      y = function(x, D) {
        return $(x, D) && b(x, D);
      };
    } else y = $;
  }
  var E = new Sa(n, m, r ? o.componentStyle : void 0);
  function O(x, D) {
    return function(v, g, A) {
      var U = v.attrs, Y = v.componentStyle, Q = v.defaultProps, ae = v.foldedComponentIds, j = v.styledComponentId, he = v.target, Re = R.useContext(xt), me = Bn(), ie = v.shouldForwardProp || me.shouldForwardProp;
      process.env.NODE_ENV !== "production" && kn(j);
      var Te = Bo(g, Re, Q) || We, Z = function(pe, K, we) {
        for (var se, ee = G(G({}, K), { className: void 0, theme: we }), Ee = 0; Ee < pe.length; Ee += 1) {
          var J = Ie(se = pe[Ee]) ? se(ee) : se;
          for (var B in J) ee[B] = B === "className" ? ke(ee[B], J[B]) : B === "style" ? G(G({}, ee[B]), J[B]) : J[B];
        }
        return K.className && (ee.className = ke(ee.className, K.className)), ee;
      }(U, g, Te), de = Z.as || he, ue = {};
      for (var F in Z) Z[F] === void 0 || F[0] === "$" || F === "as" || F === "theme" && Z.theme === Te || (F === "forwardedAs" ? ue.as = Z.forwardedAs : ie && !ie(F, de) || (ue[F] = Z[F], ie || process.env.NODE_ENV !== "development" || xo(F) || Un.has(F) || !Ut.has(de) || (Un.add(F), console.warn('styled-components: it looks like an unknown prop "'.concat(F, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var be = function(pe, K) {
        var we = Bn(), se = pe.generateAndInjectStyles(K, we.styleSheet, we.stylis);
        return process.env.NODE_ENV !== "production" && kn(se), se;
      }(Y, Z);
      process.env.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(be);
      var X = ke(ae, j);
      return be && (X += " " + be), Z.className && (X += " " + Z.className), ue[Mt(de) && !Ut.has(de) ? "class" : "className"] = X, A && (ue.ref = A), ho(de, ue);
    }(w, x, D);
  }
  O.displayName = p;
  var w = R.forwardRef(O);
  return w.attrs = f, w.componentStyle = E, w.displayName = p, w.shouldForwardProp = y, w.foldedComponentIds = r ? ke(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = m, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = r ? function(D) {
      for (var v = [], g = 1; g < arguments.length; g++) v[g - 1] = arguments[g];
      for (var A = 0, U = v; A < U.length; A++) qt(D, U[A], !0);
      return D;
    }({}, o.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (Wo(p, m), w.warnTooManyClasses = /* @__PURE__ */ function(x, D) {
    var v = {}, g = !1;
    return function(A) {
      if (!g && (v[A] = !0, Object.keys(v).length >= 200)) {
        var U = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, v = {};
      }
    };
  }(p, m)), rn(w, function() {
    return ".".concat(w.styledComponentId);
  }), a && vr(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Yn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var qn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ie(e) || Be(e)) return qn(Ae(Yn(Dt, Me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Ae(r) : qn(Ae(Yn(r, t)));
}
function Xt(e, t, n) {
  if (n === void 0 && (n = We), !t) throw fe(1, t);
  var r = function(o) {
    for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
    return e(t, n, z.apply(void 0, Me([o], a, !1)));
  };
  return r.attrs = function(o) {
    return Xt(e, t, G(G({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Xt(e, t, G(G({}, n), o));
  }, r;
}
var Or = function(e) {
  return Xt(Ea, e);
}, k = Or;
Ut.forEach(function(e) {
  k[e] = Or(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var lt = "__sc-".concat(Ne, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[lt] || (window[lt] = 0), window[lt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[lt] += 1);
var Se;
function Ve(e, t) {
  return e[t];
}
function $a(e = [], t, n = 0) {
  return [...e.slice(0, n), t, ...e.slice(n)];
}
function Oa(e = [], t, n = "id") {
  const r = e.slice(), o = Ve(t, n);
  return o ? r.splice(r.findIndex((a) => Ve(a, n) === o), 1) : r.splice(r.findIndex((a) => a === t), 1), r;
}
function Zn(e) {
  return e.map((t, n) => {
    const r = Object.assign(Object.assign({}, t), { sortable: t.sortable || !!t.sortFunction || void 0 });
    return t.id || (r.id = n + 1), r;
  });
}
function Je(e, t) {
  return Math.ceil(e / t);
}
function zt(e, t) {
  return Math.min(e, t);
}
(function(e) {
  e.ASC = "asc", e.DESC = "desc";
})(Se || (Se = {}));
const L = () => null;
function Pr(e, t = [], n = []) {
  let r = {}, o = [...n];
  return t.length && t.forEach((a) => {
    if (!a.when || typeof a.when != "function") throw new Error('"when" must be defined in the conditional style object and must be function');
    a.when(e) && (r = a.style || {}, a.classNames && (o = [...o, ...a.classNames]), typeof a.style == "function" && (r = a.style(e) || {}));
  }), { conditionalStyle: r, classNames: o.join(" ") };
}
function bt(e, t = [], n = "id") {
  const r = Ve(e, n);
  return r ? t.some((o) => Ve(o, n) === r) : t.some((o) => o === e);
}
function ct(e, t) {
  return t ? e.findIndex((n) => Qe(n.id, t)) : -1;
}
function Qe(e, t) {
  return e == t;
}
function Pa(e, t) {
  const n = !e.toggleOnSelectedRowsChange;
  switch (t.type) {
    case "SELECT_ALL_ROWS": {
      const { keyField: r, rows: o, rowCount: a, mergeSelections: i } = t, l = !e.allSelected, c = !e.toggleOnSelectedRowsChange;
      if (i) {
        const h = l ? [...e.selectedRows, ...o.filter((u) => !bt(u, e.selectedRows, r))] : e.selectedRows.filter((u) => !bt(u, o, r));
        return Object.assign(Object.assign({}, e), { allSelected: l, selectedCount: h.length, selectedRows: h, toggleOnSelectedRowsChange: c });
      }
      return Object.assign(Object.assign({}, e), { allSelected: l, selectedCount: l ? a : 0, selectedRows: l ? o : [], toggleOnSelectedRowsChange: c });
    }
    case "SELECT_SINGLE_ROW": {
      const { keyField: r, row: o, isSelected: a, rowCount: i, singleSelect: l } = t;
      return l ? a ? Object.assign(Object.assign({}, e), { selectedCount: 0, allSelected: !1, selectedRows: [], toggleOnSelectedRowsChange: n }) : Object.assign(Object.assign({}, e), { selectedCount: 1, allSelected: !1, selectedRows: [o], toggleOnSelectedRowsChange: n }) : a ? Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length > 0 ? e.selectedRows.length - 1 : 0, allSelected: !1, selectedRows: Oa(e.selectedRows, o, r), toggleOnSelectedRowsChange: n }) : Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length + 1, allSelected: e.selectedRows.length + 1 === i, selectedRows: $a(e.selectedRows, o), toggleOnSelectedRowsChange: n });
    }
    case "SELECT_MULTIPLE_ROWS": {
      const { keyField: r, selectedRows: o, totalRows: a, mergeSelections: i } = t;
      if (i) {
        const l = [...e.selectedRows, ...o.filter((c) => !bt(c, e.selectedRows, r))];
        return Object.assign(Object.assign({}, e), { selectedCount: l.length, allSelected: !1, selectedRows: l, toggleOnSelectedRowsChange: n });
      }
      return Object.assign(Object.assign({}, e), { selectedCount: o.length, allSelected: o.length === a, selectedRows: o, toggleOnSelectedRowsChange: n });
    }
    case "CLEAR_SELECTED_ROWS": {
      const { selectedRowsFlag: r } = t;
      return Object.assign(Object.assign({}, e), { allSelected: !1, selectedCount: 0, selectedRows: [], selectedRowsFlag: r });
    }
    case "SORT_CHANGE": {
      const { sortDirection: r, selectedColumn: o, clearSelectedOnSort: a } = t;
      return Object.assign(Object.assign(Object.assign({}, e), { selectedColumn: o, sortDirection: r, currentPage: 1 }), a && { allSelected: !1, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n });
    }
    case "CHANGE_PAGE": {
      const { page: r, paginationServer: o, visibleOnly: a, persistSelectedOnPageChange: i } = t, l = o && i, c = o && !i || a;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { currentPage: r }), l && { allSelected: !1 }), c && { allSelected: !1, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n });
    }
    case "CHANGE_ROWS_PER_PAGE": {
      const { rowsPerPage: r, page: o } = t;
      return Object.assign(Object.assign({}, e), { currentPage: o, rowsPerPage: r });
    }
  }
}
const ka = z`
	pointer-events: none;
	opacity: 0.4;
`, Da = k.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({ disabled: e }) => e && ka};
	${({ theme: e }) => e.table.style};
`, Aa = z`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`, Na = k.div`
	display: flex;
	width: 100%;
	${({ $fixedHeader: e }) => e && Aa};
	${({ theme: e }) => e.head.style};
`, Ia = k.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({ theme: e }) => e.headRow.style};
	${({ $dense: e, theme: t }) => e && t.headRow.denseStyle};
`, kr = (e, ...t) => z`
		@media screen and (max-width: ${599}px) {
			${z(e, ...t)}
		}
	`, Ta = (e, ...t) => z`
		@media screen and (max-width: ${959}px) {
			${z(e, ...t)}
		}
	`, _a = (e, ...t) => z`
		@media screen and (max-width: ${1280}px) {
			${z(e, ...t)}
		}
	`, ja = (e) => (t, ...n) => z`
			@media screen and (max-width: ${e}px) {
				${z(t, ...n)}
			}
		`, Ye = k.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({ theme: e, $headCell: t }) => e[t ? "headCells" : "cells"].style};
	${({ $noPadding: e }) => e && "padding: 0"};
`, Dr = k(Ye)`
	flex-grow: ${({ button: e, grow: t }) => t === 0 || e ? 0 : t || 1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({ maxWidth: e }) => e || "100%"};
	min-width: ${({ minWidth: e }) => e || "100px"};
	${({ width: e }) => e && z`
			min-width: ${e};
			max-width: ${e};
		`};
	${({ right: e }) => e && "justify-content: flex-end"};
	${({ button: e, center: t }) => (t || e) && "justify-content: center"};
	${({ compact: e, button: t }) => (e || t) && "padding: 0"};

	/* handle hiding cells */
	${({ hide: e }) => e && e === "sm" && kr`
    display: none;
  `};
	${({ hide: e }) => e && e === "md" && Ta`
    display: none;
  `};
	${({ hide: e }) => e && e === "lg" && _a`
    display: none;
  `};
	${({ hide: e }) => e && Number.isInteger(e) && ja(e)`
    display: none;
  `};
`, Fa = z`
	div:first-child {
		white-space: ${({ $wrapCell: e }) => e ? "normal" : "nowrap"};
		overflow: ${({ $allowOverflow: e }) => e ? "visible" : "hidden"};
		text-overflow: ellipsis;
	}
`, Ha = k(Dr).attrs((e) => ({ style: e.style }))`
	${({ $renderAsCell: e }) => !e && Fa};
	${({ theme: e, $isDragging: t }) => t && e.cells.draggingStyle};
	${({ $cellStyle: e }) => e};
`;
var Ma = s.memo(function({ id: e, column: t, row: n, rowIndex: r, dataTag: o, isDragging: a, onDragStart: i, onDragOver: l, onDragEnd: c, onDragEnter: h, onDragLeave: u }) {
  const { conditionalStyle: p, classNames: m } = Pr(n, t.conditionalCellStyles, ["rdt_TableCell"]);
  return s.createElement(Ha, { id: e, "data-column-id": t.id, role: "cell", className: m, "data-tag": o, $cellStyle: t.style, $renderAsCell: !!t.cell, $allowOverflow: t.allowOverflow, button: t.button, center: t.center, compact: t.compact, grow: t.grow, hide: t.hide, maxWidth: t.maxWidth, minWidth: t.minWidth, right: t.right, width: t.width, $wrapCell: t.wrap, style: p, $isDragging: a, onDragStart: i, onDragOver: l, onDragEnd: c, onDragEnter: h, onDragLeave: u }, !t.cell && s.createElement("div", { "data-tag": o }, function(f, y, $, b) {
    return y ? $ && typeof $ == "function" ? $(f, b) : y(f, b) : null;
  }(n, t.selector, t.format, r)), t.cell && t.cell(n, r, t, e));
});
const Xn = "input";
var Ar = s.memo(function({ name: e, component: t = Xn, componentOptions: n = { style: {} }, indeterminate: r = !1, checked: o = !1, disabled: a = !1, onClick: i = L }) {
  const l = t, c = l !== Xn ? n.style : ((u) => Object.assign(Object.assign({ fontSize: "18px" }, !u && { cursor: "pointer" }), { padding: 0, marginTop: "1px", verticalAlign: "middle", position: "relative" }))(a), h = s.useMemo(() => function(u, ...p) {
    let m;
    return Object.keys(u).map((f) => u[f]).forEach((f, y) => {
      typeof f == "function" && (m = Object.assign(Object.assign({}, u), { [Object.keys(u)[y]]: f(...p) }));
    }), m || u;
  }(n, r), [n, r]);
  return s.createElement(l, Object.assign({ type: "checkbox", ref: (u) => {
    u && (u.indeterminate = r);
  }, style: c, onClick: a ? L : i, name: e, "aria-label": e, checked: o, disabled: a }, h, { onChange: L }));
});
const La = k(Ye)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;
function za({ name: e, keyField: t, row: n, rowCount: r, selected: o, selectableRowsComponent: a, selectableRowsComponentProps: i, selectableRowsSingle: l, selectableRowDisabled: c, onSelectedRow: h }) {
  const u = !(!c || !c(n));
  return s.createElement(La, { onClick: (p) => p.stopPropagation(), className: "rdt_TableCell", $noPadding: !0 }, s.createElement(Ar, { name: e, component: a, componentOptions: i, checked: o, "aria-checked": o, onClick: () => {
    h({ type: "SELECT_SINGLE_ROW", row: n, isSelected: o, keyField: t, rowCount: r, singleSelect: l });
  }, disabled: u }));
}
const Wa = k.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({ theme: e }) => e.expanderButton.style};
`;
function Ba({ disabled: e = !1, expanded: t = !1, expandableIcon: n, id: r, row: o, onToggled: a }) {
  const i = t ? n.expanded : n.collapsed;
  return s.createElement(Wa, { "aria-disabled": e, onClick: () => a && a(o), "data-testid": `expander-button-${r}`, disabled: e, "aria-label": t ? "Collapse Row" : "Expand Row", role: "button", type: "button" }, i);
}
const Va = k(Ye)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({ theme: e }) => e.expanderCell.style};
`;
function Ga({ row: e, expanded: t = !1, expandableIcon: n, id: r, onToggled: o, disabled: a = !1 }) {
  return s.createElement(Va, { onClick: (i) => i.stopPropagation(), $noPadding: !0 }, s.createElement(Ba, { id: r, row: e, expanded: t, expandableIcon: n, disabled: a, onToggled: o }));
}
const Ua = k.div`
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.expanderRow.style};
	${({ $extendedRowStyle: e }) => e};
`;
var Ya = s.memo(function({ data: e, ExpanderComponent: t, expanderComponentProps: n, extendedRowStyle: r, extendedClassNames: o }) {
  const a = ["rdt_ExpanderRow", ...o.split(" ").filter((i) => i !== "rdt_TableRow")].join(" ");
  return s.createElement(Ua, { className: a, $extendedRowStyle: r }, s.createElement(t, Object.assign({ data: e }, n)));
});
const Wt = "allowRowEvents";
var Ct, Kt, Kn;
(function(e) {
  e.LTR = "ltr", e.RTL = "rtl", e.AUTO = "auto";
})(Ct || (Ct = {})), function(e) {
  e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center";
}(Kt || (Kt = {})), function(e) {
  e.SM = "sm", e.MD = "md", e.LG = "lg";
}(Kn || (Kn = {}));
const qa = z`
	&:hover {
		${({ $highlightOnHover: e, theme: t }) => e && t.rows.highlightOnHoverStyle};
	}
`, Za = z`
	&:hover {
		cursor: pointer;
	}
`, Xa = k.div.attrs((e) => ({ style: e.style }))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.rows.style};
	${({ $dense: e, theme: t }) => e && t.rows.denseStyle};
	${({ $striped: e, theme: t }) => e && t.rows.stripedStyle};
	${({ $highlightOnHover: e }) => e && qa};
	${({ $pointerOnHover: e }) => e && Za};
	${({ $selected: e, theme: t }) => e && t.rows.selectedHighlightStyle};
	${({ $conditionalStyle: e }) => e};
`;
function Ka({ columns: e = [], conditionalRowStyles: t = [], defaultExpanded: n = !1, defaultExpanderDisabled: r = !1, dense: o = !1, expandableIcon: a, expandableRows: i = !1, expandableRowsComponent: l, expandableRowsComponentProps: c, expandableRowsHideExpander: h, expandOnRowClicked: u = !1, expandOnRowDoubleClicked: p = !1, highlightOnHover: m = !1, id: f, expandableInheritConditionalStyles: y, keyField: $, onRowClicked: b = L, onRowDoubleClicked: E = L, onRowMouseEnter: O = L, onRowMouseLeave: w = L, onRowExpandToggled: x = L, onSelectedRow: D = L, pointerOnHover: v = !1, row: g, rowCount: A, rowIndex: U, selectableRowDisabled: Y = null, selectableRows: Q = !1, selectableRowsComponent: ae, selectableRowsComponentProps: j, selectableRowsHighlight: he = !1, selectableRowsSingle: Re = !1, selected: me, striped: ie = !1, draggingColumnId: Te, onDragStart: Z, onDragOver: de, onDragEnd: ue, onDragEnter: F, onDragLeave: be }) {
  const [X, pe] = s.useState(n);
  s.useEffect(() => {
    pe(n);
  }, [n]);
  const K = s.useCallback(() => {
    pe(!X), x(!X, g);
  }, [X, x, g]), we = v || i && (u || p), se = s.useCallback((M) => {
    M.target.getAttribute("data-tag") === Wt && (b(g, M), !r && i && u && K());
  }, [r, u, i, K, b, g]), ee = s.useCallback((M) => {
    M.target.getAttribute("data-tag") === Wt && (E(g, M), !r && i && p && K());
  }, [r, p, i, K, E, g]), Ee = s.useCallback((M) => {
    O(g, M);
  }, [O, g]), J = s.useCallback((M) => {
    w(g, M);
  }, [w, g]), B = Ve(g, $), { conditionalStyle: tt, classNames: nt } = Pr(g, t, ["rdt_TableRow"]), At = he && me, Nt = y ? tt : {}, It = ie && U % 2 == 0;
  return s.createElement(s.Fragment, null, s.createElement(Xa, { id: `row-${f}`, role: "row", $striped: It, $highlightOnHover: m, $pointerOnHover: !r && we, $dense: o, onClick: se, onDoubleClick: ee, onMouseEnter: Ee, onMouseLeave: J, className: nt, $selected: At, $conditionalStyle: tt }, Q && s.createElement(za, { name: `select-row-${B}`, keyField: $, row: g, rowCount: A, selected: me, selectableRowsComponent: ae, selectableRowsComponentProps: j, selectableRowDisabled: Y, selectableRowsSingle: Re, onSelectedRow: D }), i && !h && s.createElement(Ga, { id: B, expandableIcon: a, expanded: X, row: g, onToggled: K, disabled: r }), e.map((M) => M.omit ? null : s.createElement(Ma, { id: `cell-${M.id}-${B}`, key: `cell-${M.id}-${B}`, dataTag: M.ignoreRowClick || M.button ? null : Wt, column: M, row: g, rowIndex: U, isDragging: Qe(Te, M.id), onDragStart: Z, onDragOver: de, onDragEnd: ue, onDragEnter: F, onDragLeave: be }))), i && X && s.createElement(Ya, { key: `expander-${B}`, data: g, extendedRowStyle: Nt, extendedClassNames: nt, ExpanderComponent: l, expanderComponentProps: c }));
}
const Ja = k.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
	${({ $sortDirection: e }) => e === "desc" && "transform: rotate(180deg)"};
`, Qa = ({ sortActive: e, sortDirection: t }) => R.createElement(Ja, { $sortActive: e, $sortDirection: t }, "▲"), ei = k(Dr)`
	${({ button: e }) => e && "text-align: center"};
	${({ theme: e, $isDragging: t }) => t && e.headCells.draggingStyle};
`, ti = z`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({ $sortActive: e }) => !e && z`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`, ni = k.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({ disabled: e }) => !e && ti};
`, ri = k.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
var oi = s.memo(function({ column: e, disabled: t, draggingColumnId: n, selectedColumn: r = {}, sortDirection: o, sortIcon: a, sortServer: i, pagination: l, paginationServer: c, persistSelectedOnSort: h, selectableRowsVisibleOnly: u, onSort: p, onDragStart: m, onDragOver: f, onDragEnd: y, onDragEnter: $, onDragLeave: b }) {
  s.useEffect(() => {
    typeof e.selector == "string" && console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`);
  }, []);
  const [E, O] = s.useState(!1), w = s.useRef(null);
  if (s.useEffect(() => {
    w.current && O(w.current.scrollWidth > w.current.clientWidth);
  }, [E]), e.omit) return null;
  const x = () => {
    if (!e.sortable && !e.selector) return;
    let j = o;
    Qe(r.id, e.id) && (j = o === Se.ASC ? Se.DESC : Se.ASC), p({ type: "SORT_CHANGE", sortDirection: j, selectedColumn: e, clearSelectedOnSort: l && c && !h || i || u });
  }, D = (j) => s.createElement(Qa, { sortActive: j, sortDirection: o }), v = () => s.createElement("span", { className: [o, "__rdt_custom_sort_icon__"].join(" ") }, a), g = !(!e.sortable || !Qe(r.id, e.id)), A = !e.sortable || t, U = e.sortable && !a && !e.right, Y = e.sortable && !a && e.right, Q = e.sortable && a && !e.right, ae = e.sortable && a && e.right;
  return s.createElement(ei, { "data-column-id": e.id, className: "rdt_TableCol", $headCell: !0, allowOverflow: e.allowOverflow, button: e.button, compact: e.compact, grow: e.grow, hide: e.hide, maxWidth: e.maxWidth, minWidth: e.minWidth, right: e.right, center: e.center, width: e.width, draggable: e.reorder, $isDragging: Qe(e.id, n), onDragStart: m, onDragOver: f, onDragEnd: y, onDragEnter: $, onDragLeave: b }, e.name && s.createElement(ni, { "data-column-id": e.id, "data-sort-id": e.id, role: "columnheader", tabIndex: 0, className: "rdt_TableCol_Sortable", onClick: A ? void 0 : x, onKeyPress: A ? void 0 : (j) => {
    j.key === "Enter" && x();
  }, $sortActive: !A && g, disabled: A }, !A && ae && v(), !A && Y && D(g), typeof e.name == "string" ? s.createElement(ri, { title: E ? e.name : void 0, ref: w, "data-column-id": e.id }, e.name) : e.name, !A && Q && v(), !A && U && D(g)));
});
const ai = k(Ye)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;
function ii({ headCell: e = !0, rowData: t, keyField: n, allSelected: r, mergeSelections: o, selectedRows: a, selectableRowsComponent: i, selectableRowsComponentProps: l, selectableRowDisabled: c, onSelectAllRows: h }) {
  const u = a.length > 0 && !r, p = c ? t.filter((y) => !c(y)) : t, m = p.length === 0, f = Math.min(t.length, p.length);
  return s.createElement(ai, { className: "rdt_TableCol", $headCell: e, $noPadding: !0 }, s.createElement(Ar, { name: "select-all-rows", component: i, componentOptions: l, onClick: () => {
    h({ type: "SELECT_ALL_ROWS", rows: p, rowCount: f, mergeSelections: o, keyField: n });
  }, checked: r, indeterminate: u, disabled: m }));
}
function Nr(e = Ct.AUTO) {
  const t = typeof window == "object", [n, r] = s.useState(!1);
  return s.useEffect(() => {
    if (t) if (e !== "auto") r(e === "rtl");
    else {
      const o = !(!window.document || !window.document.createElement), a = document.getElementsByTagName("BODY")[0], i = document.getElementsByTagName("HTML")[0], l = a.dir === "rtl" || i.dir === "rtl";
      r(o && l);
    }
  }, [e, t]), n;
}
const si = k.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({ theme: e }) => e.contextMenu.fontColor};
	font-size: ${({ theme: e }) => e.contextMenu.fontSize};
	font-weight: 400;
`, li = k.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`, Jn = k.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({ $rtl: e }) => e && "direction: rtl"};
	${({ theme: e }) => e.contextMenu.style};
	${({ theme: e, $visible: t }) => t && e.contextMenu.activeStyle};
`;
function ci({ contextMessage: e, contextActions: t, contextComponent: n, selectedCount: r, direction: o }) {
  const a = Nr(o), i = r > 0;
  return n ? s.createElement(Jn, { $visible: i }, s.cloneElement(n, { selectedCount: r })) : s.createElement(Jn, { $visible: i, $rtl: a }, s.createElement(si, null, ((l, c, h) => {
    if (c === 0) return null;
    const u = c === 1 ? l.singular : l.plural;
    return h ? `${c} ${l.message || ""} ${u}` : `${c} ${u} ${l.message || ""}`;
  })(e, r, a)), s.createElement(li, null, t));
}
const di = k.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({ theme: e }) => e.header.style}
`, ui = k.div`
	flex: 1 0 auto;
	color: ${({ theme: e }) => e.header.fontColor};
	font-size: ${({ theme: e }) => e.header.fontSize};
	font-weight: 400;
`, pi = k.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`, gi = ({ title: e, actions: t = null, contextMessage: n, contextActions: r, contextComponent: o, selectedCount: a, direction: i, showMenu: l = !0 }) => s.createElement(di, { className: "rdt_TableHeader", role: "heading", "aria-level": 1 }, s.createElement(ui, null, e), t && s.createElement(pi, null, t), l && s.createElement(ci, { contextMessage: n, contextActions: r, contextComponent: o, direction: i, selectedCount: a }));
function Ir(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  }
  return n;
}
const fi = { left: "flex-start", right: "flex-end", center: "center" }, hi = k.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({ align: e }) => fi[e]};
	flex-wrap: ${({ $wrapContent: e }) => e ? "wrap" : "nowrap"};
	${({ theme: e }) => e.subHeader.style}
`, mi = (e) => {
  var { align: t = "right", wrapContent: n = !0 } = e, r = Ir(e, ["align", "wrapContent"]);
  return s.createElement(hi, Object.assign({ align: t, $wrapContent: n }, r));
}, bi = k.div`
	display: flex;
	flex-direction: column;
`, wi = k.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({ $responsive: e, $fixedHeader: t }) => e && z`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t ? "auto" : "hidden"};
			min-height: 0;
		`};

	${({ $fixedHeader: e = !1, $fixedHeaderScrollHeight: t = "100vh" }) => e && z`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({ theme: e }) => e.responsiveWrapper.style};
`, Qn = k.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${(e) => e.theme.progress.style};
`, yi = k.div`
	position: relative;
	width: 100%;
	${({ theme: e }) => e.tableWrapper.style};
`, vi = k(Ye)`
	white-space: nowrap;
	${({ theme: e }) => e.expanderCell.style};
`, xi = k.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({ theme: e }) => e.noData.style};
`, Ci = () => R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, R.createElement("path", { d: "M7 10l5 5 5-5z" }), R.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), Si = k.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`, Ri = k.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`, Ei = (e) => {
  var { defaultValue: t, onChange: n } = e, r = Ir(e, ["defaultValue", "onChange"]);
  return s.createElement(Ri, null, s.createElement(Si, Object.assign({ onChange: n, defaultValue: t }, r)), s.createElement(Ci, null));
}, d = { columns: [], data: [], title: "", keyField: "id", selectableRows: !1, selectableRowsHighlight: !1, selectableRowsNoSelectAll: !1, selectableRowSelected: null, selectableRowDisabled: null, selectableRowsComponent: "input", selectableRowsComponentProps: {}, selectableRowsVisibleOnly: !1, selectableRowsSingle: !1, clearSelectedRows: !1, expandableRows: !1, expandableRowDisabled: null, expandableRowExpanded: null, expandOnRowClicked: !1, expandableRowsHideExpander: !1, expandOnRowDoubleClicked: !1, expandableInheritConditionalStyles: !1, expandableRowsComponent: function() {
  return R.createElement("div", null, "To add an expander pass in a component instance via ", R.createElement("strong", null, "expandableRowsComponent"), ". You can then access props.data from this component.");
}, expandableIcon: { collapsed: R.createElement(() => R.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, R.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), R.createElement("path", { d: "M0-.25h24v24H0z", fill: "none" })), null), expanded: R.createElement(() => R.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, R.createElement("path", { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" }), R.createElement("path", { d: "M0-.75h24v24H0z", fill: "none" })), null) }, expandableRowsComponentProps: {}, progressPending: !1, progressComponent: R.createElement("div", { style: { fontSize: "24px", fontWeight: 700, padding: "24px" } }, "Loading..."), persistTableHead: !1, sortIcon: null, sortFunction: null, sortServer: !1, striped: !1, highlightOnHover: !1, pointerOnHover: !1, noContextMenu: !1, contextMessage: { singular: "item", plural: "items", message: "selected" }, actions: null, contextActions: null, contextComponent: null, defaultSortFieldId: null, defaultSortAsc: !0, responsive: !0, noDataComponent: R.createElement("div", { style: { padding: "24px" } }, "There are no records to display"), disabled: !1, noTableHead: !1, noHeader: !1, subHeader: !1, subHeaderAlign: Kt.RIGHT, subHeaderWrap: !0, subHeaderComponent: null, fixedHeader: !1, fixedHeaderScrollHeight: "100vh", pagination: !1, paginationServer: !1, paginationServerOptions: { persistSelectedOnSort: !1, persistSelectedOnPageChange: !1 }, paginationDefaultPage: 1, paginationResetDefaultPage: !1, paginationTotalRows: 0, paginationPerPage: 10, paginationRowsPerPageOptions: [10, 15, 20, 25, 30], paginationComponent: null, paginationComponentOptions: {}, paginationIconFirstPage: R.createElement(() => R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, R.createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), R.createElement("path", { fill: "none", d: "M24 24H0V0h24v24z" })), null), paginationIconLastPage: R.createElement(() => R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, R.createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), R.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" })), null), paginationIconNext: R.createElement(() => R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, R.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), R.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), paginationIconPrevious: R.createElement(() => R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, R.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), R.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), dense: !1, conditionalRowStyles: [], theme: "default", customStyles: {}, direction: Ct.AUTO, onChangePage: L, onChangeRowsPerPage: L, onRowClicked: L, onRowDoubleClicked: L, onRowMouseEnter: L, onRowMouseLeave: L, onRowExpandToggled: L, onSelectedRowsChange: L, onSort: L, onColumnOrderChange: L }, $i = { rowsPerPageText: "Rows per page:", rangeSeparatorText: "of", noRowsPerPage: !1, selectAllRowsItem: !1, selectAllRowsItemText: "All" }, Oi = k.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({ theme: e }) => e.pagination.style};
`, dt = k.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({ theme: e }) => e.pagination.pageButtonsStyle};
	${({ $isRTL: e }) => e && "transform: scale(-1, -1)"};
`, Pi = k.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${kr`
    width: 100%;
    justify-content: space-around;
  `};
`, Tr = k.span`
	flex-shrink: 1;
	user-select: none;
`, ki = k(Tr)`
	margin: 0 24px;
`, Di = k(Tr)`
	margin: 0 4px;
`;
var Ai = s.memo(function({ rowsPerPage: e, rowCount: t, currentPage: n, direction: r = d.direction, paginationRowsPerPageOptions: o = d.paginationRowsPerPageOptions, paginationIconLastPage: a = d.paginationIconLastPage, paginationIconFirstPage: i = d.paginationIconFirstPage, paginationIconNext: l = d.paginationIconNext, paginationIconPrevious: c = d.paginationIconPrevious, paginationComponentOptions: h = d.paginationComponentOptions, onChangeRowsPerPage: u = d.onChangeRowsPerPage, onChangePage: p = d.onChangePage }) {
  const m = (() => {
    const j = typeof window == "object";
    function he() {
      return { width: j ? window.innerWidth : void 0, height: j ? window.innerHeight : void 0 };
    }
    const [Re, me] = s.useState(he);
    return s.useEffect(() => {
      if (!j) return () => null;
      function ie() {
        me(he());
      }
      return window.addEventListener("resize", ie), () => window.removeEventListener("resize", ie);
    }, []), Re;
  })(), f = Nr(r), y = m.width && m.width > 599, $ = Je(t, e), b = n * e, E = b - e + 1, O = n === 1, w = n === $, x = Object.assign(Object.assign({}, $i), h), D = n === $ ? `${E}-${t} ${x.rangeSeparatorText} ${t}` : `${E}-${b} ${x.rangeSeparatorText} ${t}`, v = s.useCallback(() => p(n - 1), [n, p]), g = s.useCallback(() => p(n + 1), [n, p]), A = s.useCallback(() => p(1), [p]), U = s.useCallback(() => p(Je(t, e)), [p, t, e]), Y = s.useCallback((j) => u(Number(j.target.value), n), [n, u]), Q = o.map((j) => s.createElement("option", { key: j, value: j }, j));
  x.selectAllRowsItem && Q.push(s.createElement("option", { key: -1, value: t }, x.selectAllRowsItemText));
  const ae = s.createElement(Ei, { onChange: Y, defaultValue: e, "aria-label": x.rowsPerPageText }, Q);
  return s.createElement(Oi, { className: "rdt_Pagination" }, !x.noRowsPerPage && y && s.createElement(s.Fragment, null, s.createElement(Di, null, x.rowsPerPageText), ae), y && s.createElement(ki, null, D), s.createElement(Pi, null, s.createElement(dt, { id: "pagination-first-page", type: "button", "aria-label": "First Page", "aria-disabled": O, onClick: A, disabled: O, $isRTL: f }, i), s.createElement(dt, { id: "pagination-previous-page", type: "button", "aria-label": "Previous Page", "aria-disabled": O, onClick: v, disabled: O, $isRTL: f }, c), !x.noRowsPerPage && !y && ae, s.createElement(dt, { id: "pagination-next-page", type: "button", "aria-label": "Next Page", "aria-disabled": w, onClick: g, disabled: w, $isRTL: f }, l), s.createElement(dt, { id: "pagination-last-page", type: "button", "aria-label": "Last Page", "aria-disabled": w, onClick: U, disabled: w, $isRTL: f }, a)));
});
const Oe = (e, t) => {
  const n = s.useRef(!0);
  s.useEffect(() => {
    n.current ? n.current = !1 : e();
  }, t);
};
function Ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ii = function(e) {
  return /* @__PURE__ */ function(t) {
    return !!t && typeof t == "object";
  }(e) && !function(t) {
    var n = Object.prototype.toString.call(t);
    return n === "[object RegExp]" || n === "[object Date]" || function(r) {
      return r.$$typeof === Ti;
    }(t);
  }(e);
}, Ti = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function et(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Ge((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
  var n;
}
function _i(e, t, n) {
  return e.concat(t).map(function(r) {
    return et(r, n);
  });
}
function er(e) {
  return Object.keys(e).concat(function(t) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.propertyIsEnumerable.call(t, n);
    }) : [];
  }(e));
}
function tr(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function ji(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && er(e).forEach(function(o) {
    r[o] = et(e[o], n);
  }), er(t).forEach(function(o) {
    (function(a, i) {
      return tr(a, i) && !(Object.hasOwnProperty.call(a, i) && Object.propertyIsEnumerable.call(a, i));
    })(e, o) || (tr(e, o) && n.isMergeableObject(t[o]) ? r[o] = function(a, i) {
      if (!i.customMerge) return Ge;
      var l = i.customMerge(a);
      return typeof l == "function" ? l : Ge;
    }(o, n)(e[o], t[o], n) : r[o] = et(t[o], n));
  }), r;
}
function Ge(e, t, n) {
  (n = n || {}).arrayMerge = n.arrayMerge || _i, n.isMergeableObject = n.isMergeableObject || Ii, n.cloneUnlessOtherwiseSpecified = et;
  var r = Array.isArray(t);
  return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : ji(e, t, n) : et(t, n);
}
Ge.all = function(e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function(n, r) {
    return Ge(n, r, t);
  }, {});
};
var Jt = Ni(Ge);
const nr = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)" }, background: { default: "#FFFFFF" }, context: { background: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, divider: { default: "rgba(0,0,0,.12)" }, button: { default: "rgba(0,0,0,.54)", focus: "rgba(0,0,0,.12)", hover: "rgba(0,0,0,.12)", disabled: "rgba(0, 0, 0, .18)" }, selected: { default: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, highlightOnHover: { default: "#EEEEEE", text: "rgba(0, 0, 0, 0.87)" }, striped: { default: "#FAFAFA", text: "rgba(0, 0, 0, 0.87)" } }, Ce = { default: nr, light: nr, dark: { text: { primary: "#FFFFFF", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(0,0,0,.12)" }, background: { default: "#424242" }, context: { background: "#E91E63", text: "#FFFFFF" }, divider: { default: "rgba(81, 81, 81, 1)" }, button: { default: "#FFFFFF", focus: "rgba(255, 255, 255, .54)", hover: "rgba(255, 255, 255, .12)", disabled: "rgba(255, 255, 255, .18)" }, selected: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, highlightOnHover: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, striped: { default: "rgba(0, 0, 0, .87)", text: "#FFFFFF" } } };
function Qi(e = "default", t, n = "default") {
  return Ce[e] || (Ce[e] = Jt(Ce[n], t || {})), Ce[e] = Jt(Ce[e], t || {}), Ce[e];
}
function Fi(e, t, n, r) {
  const [o, a] = s.useState(() => Zn(e)), [i, l] = s.useState(""), c = s.useRef("");
  Oe(() => {
    a(Zn(e));
  }, [e]);
  const h = s.useCallback((b) => {
    var E, O, w;
    const { attributes: x } = b.target, D = (E = x.getNamedItem("data-column-id")) === null || E === void 0 ? void 0 : E.value;
    D && (c.current = ((w = (O = o[ct(o, D)]) === null || O === void 0 ? void 0 : O.id) === null || w === void 0 ? void 0 : w.toString()) || "", l(c.current));
  }, [o]), u = s.useCallback((b) => {
    var E;
    const { attributes: O } = b.target, w = (E = O.getNamedItem("data-column-id")) === null || E === void 0 ? void 0 : E.value;
    if (w && c.current && w !== c.current) {
      const x = ct(o, c.current), D = ct(o, w), v = [...o];
      v[x] = o[D], v[D] = o[x], a(v), t(v);
    }
  }, [t, o]), p = s.useCallback((b) => {
    b.preventDefault();
  }, []), m = s.useCallback((b) => {
    b.preventDefault();
  }, []), f = s.useCallback((b) => {
    b.preventDefault(), c.current = "", l("");
  }, []), y = function(b = !1) {
    return b ? Se.ASC : Se.DESC;
  }(r), $ = s.useMemo(() => o[ct(o, n == null ? void 0 : n.toString())] || {}, [n, o]);
  return { tableColumns: o, draggingColumnId: i, handleDragStart: h, handleDragEnter: u, handleDragOver: p, handleDragLeave: m, handleDragEnd: f, defaultSortDirection: y, defaultSortColumn: $ };
}
var Hi = s.memo(function(e) {
  const { data: t = d.data, columns: n = d.columns, title: r = d.title, actions: o = d.actions, keyField: a = d.keyField, striped: i = d.striped, highlightOnHover: l = d.highlightOnHover, pointerOnHover: c = d.pointerOnHover, dense: h = d.dense, selectableRows: u = d.selectableRows, selectableRowsSingle: p = d.selectableRowsSingle, selectableRowsHighlight: m = d.selectableRowsHighlight, selectableRowsNoSelectAll: f = d.selectableRowsNoSelectAll, selectableRowsVisibleOnly: y = d.selectableRowsVisibleOnly, selectableRowSelected: $ = d.selectableRowSelected, selectableRowDisabled: b = d.selectableRowDisabled, selectableRowsComponent: E = d.selectableRowsComponent, selectableRowsComponentProps: O = d.selectableRowsComponentProps, onRowExpandToggled: w = d.onRowExpandToggled, onSelectedRowsChange: x = d.onSelectedRowsChange, expandableIcon: D = d.expandableIcon, onChangeRowsPerPage: v = d.onChangeRowsPerPage, onChangePage: g = d.onChangePage, paginationServer: A = d.paginationServer, paginationServerOptions: U = d.paginationServerOptions, paginationTotalRows: Y = d.paginationTotalRows, paginationDefaultPage: Q = d.paginationDefaultPage, paginationResetDefaultPage: ae = d.paginationResetDefaultPage, paginationPerPage: j = d.paginationPerPage, paginationRowsPerPageOptions: he = d.paginationRowsPerPageOptions, paginationIconLastPage: Re = d.paginationIconLastPage, paginationIconFirstPage: me = d.paginationIconFirstPage, paginationIconNext: ie = d.paginationIconNext, paginationIconPrevious: Te = d.paginationIconPrevious, paginationComponent: Z = d.paginationComponent, paginationComponentOptions: de = d.paginationComponentOptions, responsive: ue = d.responsive, progressPending: F = d.progressPending, progressComponent: be = d.progressComponent, persistTableHead: X = d.persistTableHead, noDataComponent: pe = d.noDataComponent, disabled: K = d.disabled, noTableHead: we = d.noTableHead, noHeader: se = d.noHeader, fixedHeader: ee = d.fixedHeader, fixedHeaderScrollHeight: Ee = d.fixedHeaderScrollHeight, pagination: J = d.pagination, subHeader: B = d.subHeader, subHeaderAlign: tt = d.subHeaderAlign, subHeaderWrap: nt = d.subHeaderWrap, subHeaderComponent: At = d.subHeaderComponent, noContextMenu: Nt = d.noContextMenu, contextMessage: It = d.contextMessage, contextActions: M = d.contextActions, contextComponent: Fr = d.contextComponent, expandableRows: rt = d.expandableRows, onRowClicked: an = d.onRowClicked, onRowDoubleClicked: sn = d.onRowDoubleClicked, onRowMouseEnter: ln = d.onRowMouseEnter, onRowMouseLeave: cn = d.onRowMouseLeave, sortIcon: Hr = d.sortIcon, onSort: Mr = d.onSort, sortFunction: dn = d.sortFunction, sortServer: Tt = d.sortServer, expandableRowsComponent: Lr = d.expandableRowsComponent, expandableRowsComponentProps: zr = d.expandableRowsComponentProps, expandableRowDisabled: un = d.expandableRowDisabled, expandableRowsHideExpander: pn = d.expandableRowsHideExpander, expandOnRowClicked: Wr = d.expandOnRowClicked, expandOnRowDoubleClicked: Br = d.expandOnRowDoubleClicked, expandableRowExpanded: gn = d.expandableRowExpanded, expandableInheritConditionalStyles: Vr = d.expandableInheritConditionalStyles, defaultSortFieldId: Gr = d.defaultSortFieldId, defaultSortAsc: Ur = d.defaultSortAsc, clearSelectedRows: fn = d.clearSelectedRows, conditionalRowStyles: Yr = d.conditionalRowStyles, theme: hn = d.theme, customStyles: mn = d.customStyles, direction: qe = d.direction, onColumnOrderChange: qr = d.onColumnOrderChange, className: Zr, ariaLabel: bn } = e, { tableColumns: wn, draggingColumnId: yn, handleDragStart: vn, handleDragEnter: xn, handleDragOver: Cn, handleDragLeave: Sn, handleDragEnd: Rn, defaultSortDirection: Xr, defaultSortColumn: Kr } = Fi(n, qr, Gr, Ur), [{ rowsPerPage: ye, currentPage: ne, selectedRows: _t, allSelected: En, selectedCount: $n, selectedColumn: le, sortDirection: _e, toggleOnSelectedRowsChange: Jr }, $e] = s.useReducer(Pa, { allSelected: !1, selectedCount: 0, selectedRows: [], selectedColumn: Kr, toggleOnSelectedRowsChange: !1, sortDirection: Xr, currentPage: Q, rowsPerPage: j, selectedRowsFlag: !1, contextMessage: d.contextMessage }), { persistSelectedOnSort: On = !1, persistSelectedOnPageChange: ot = !1 } = U, Pn = !(!A || !ot && !On), Qr = J && !F && t.length > 0, eo = Z || Ai, to = s.useMemo(() => ((C = {}, N = "default", q = "default") => {
    const re = Ce[N] ? N : q;
    return Jt({ table: { style: { color: (S = Ce[re]).text.primary, backgroundColor: S.background.default } }, tableWrapper: { style: { display: "table" } }, responsiveWrapper: { style: {} }, header: { style: { fontSize: "22px", color: S.text.primary, backgroundColor: S.background.default, minHeight: "56px", paddingLeft: "16px", paddingRight: "8px" } }, subHeader: { style: { backgroundColor: S.background.default, minHeight: "52px" } }, head: { style: { color: S.text.primary, fontSize: "12px", fontWeight: 500 } }, headRow: { style: { backgroundColor: S.background.default, minHeight: "52px", borderBottomWidth: "1px", borderBottomColor: S.divider.default, borderBottomStyle: "solid" }, denseStyle: { minHeight: "32px" } }, headCells: { style: { paddingLeft: "16px", paddingRight: "16px" }, draggingStyle: { cursor: "move" } }, contextMenu: { style: { backgroundColor: S.context.background, fontSize: "18px", fontWeight: 400, color: S.context.text, paddingLeft: "16px", paddingRight: "8px", transform: "translate3d(0, -100%, 0)", transitionDuration: "125ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", willChange: "transform" }, activeStyle: { transform: "translate3d(0, 0, 0)" } }, cells: { style: { paddingLeft: "16px", paddingRight: "16px", wordBreak: "break-word" }, draggingStyle: {} }, rows: { style: { fontSize: "13px", fontWeight: 400, color: S.text.primary, backgroundColor: S.background.default, minHeight: "48px", "&:not(:last-of-type)": { borderBottomStyle: "solid", borderBottomWidth: "1px", borderBottomColor: S.divider.default } }, denseStyle: { minHeight: "32px" }, selectedHighlightStyle: { "&:nth-of-type(n)": { color: S.selected.text, backgroundColor: S.selected.default, borderBottomColor: S.background.default } }, highlightOnHoverStyle: { color: S.highlightOnHover.text, backgroundColor: S.highlightOnHover.default, transitionDuration: "0.15s", transitionProperty: "background-color", borderBottomColor: S.background.default, outlineStyle: "solid", outlineWidth: "1px", outlineColor: S.background.default }, stripedStyle: { color: S.striped.text, backgroundColor: S.striped.default } }, expanderRow: { style: { color: S.text.primary, backgroundColor: S.background.default } }, expanderCell: { style: { flex: "0 0 48px" } }, expanderButton: { style: { color: S.button.default, fill: S.button.default, backgroundColor: "transparent", borderRadius: "2px", transition: "0.25s", height: "100%", width: "100%", "&:hover:enabled": { cursor: "pointer" }, "&:disabled": { color: S.button.disabled }, "&:hover:not(:disabled)": { cursor: "pointer", backgroundColor: S.button.hover }, "&:focus": { outline: "none", backgroundColor: S.button.focus }, svg: { margin: "auto" } } }, pagination: { style: { color: S.text.secondary, fontSize: "13px", minHeight: "56px", backgroundColor: S.background.default, borderTopStyle: "solid", borderTopWidth: "1px", borderTopColor: S.divider.default }, pageButtonsStyle: { borderRadius: "50%", height: "40px", width: "40px", padding: "8px", margin: "px", cursor: "pointer", transition: "0.4s", color: S.button.default, fill: S.button.default, backgroundColor: "transparent", "&:disabled": { cursor: "unset", color: S.button.disabled, fill: S.button.disabled }, "&:hover:not(:disabled)": { backgroundColor: S.button.hover }, "&:focus": { outline: "none", backgroundColor: S.button.focus } } }, noData: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: S.text.primary, backgroundColor: S.background.default } }, progress: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: S.text.primary, backgroundColor: S.background.default } } }, C);
    var S;
  })(mn, hn), [mn, hn]), no = s.useMemo(() => Object.assign({}, qe !== "auto" && { dir: qe }), [qe]), V = s.useMemo(() => {
    if (Tt) return t;
    if (le != null && le.sortFunction && typeof le.sortFunction == "function") {
      const C = le.sortFunction, N = _e === Se.ASC ? C : (q, re) => -1 * C(q, re);
      return [...t].sort(N);
    }
    return function(C, N, q, re) {
      return N ? re && typeof re == "function" ? re(C.slice(0), N, q) : C.slice(0).sort((S, jt) => {
        const Fe = N(S), ve = N(jt);
        if (q === "asc") {
          if (Fe < ve) return -1;
          if (Fe > ve) return 1;
        }
        if (q === "desc") {
          if (Fe > ve) return -1;
          if (Fe < ve) return 1;
        }
        return 0;
      }) : C;
    }(t, le == null ? void 0 : le.selector, _e, dn);
  }, [Tt, le, _e, t, dn]), Ze = s.useMemo(() => {
    if (J && !A) {
      const C = ne * ye, N = C - ye;
      return V.slice(N, C);
    }
    return V;
  }, [ne, J, A, ye, V]), ro = s.useCallback((C) => {
    $e(C);
  }, []), oo = s.useCallback((C) => {
    $e(C);
  }, []), ao = s.useCallback((C) => {
    $e(C);
  }, []), io = s.useCallback((C, N) => an(C, N), [an]), so = s.useCallback((C, N) => sn(C, N), [sn]), lo = s.useCallback((C, N) => ln(C, N), [ln]), co = s.useCallback((C, N) => cn(C, N), [cn]), je = s.useCallback((C) => $e({ type: "CHANGE_PAGE", page: C, paginationServer: A, visibleOnly: y, persistSelectedOnPageChange: ot }), [A, ot, y]), uo = s.useCallback((C) => {
    const N = Je(Y || Ze.length, C), q = zt(ne, N);
    A || je(q), $e({ type: "CHANGE_ROWS_PER_PAGE", page: q, rowsPerPage: C });
  }, [ne, je, A, Y, Ze.length]);
  if (J && !A && V.length > 0 && Ze.length === 0) {
    const C = Je(V.length, ye), N = zt(ne, C);
    je(N);
  }
  Oe(() => {
    x({ allSelected: En, selectedCount: $n, selectedRows: _t.slice(0) });
  }, [Jr]), Oe(() => {
    Mr(le, _e, V.slice(0));
  }, [le, _e]), Oe(() => {
    g(ne, Y || V.length);
  }, [ne]), Oe(() => {
    v(ye, ne);
  }, [ye]), Oe(() => {
    je(Q);
  }, [Q, ae]), Oe(() => {
    if (J && A && Y > 0) {
      const C = Je(Y, ye), N = zt(ne, C);
      ne !== N && je(N);
    }
  }, [Y]), s.useEffect(() => {
    $e({ type: "CLEAR_SELECTED_ROWS", selectedRowsFlag: fn });
  }, [p, fn]), s.useEffect(() => {
    if (!$) return;
    const C = V.filter((q) => $(q)), N = p ? C.slice(0, 1) : C;
    $e({ type: "SELECT_MULTIPLE_ROWS", keyField: a, selectedRows: N, totalRows: V.length, mergeSelections: Pn });
  }, [t, $]);
  const po = y ? Ze : V, go = ot || p || f;
  return s.createElement(Ra, { theme: to }, !se && (!!r || !!o) && s.createElement(gi, { title: r, actions: o, showMenu: !Nt, selectedCount: $n, direction: qe, contextActions: M, contextComponent: Fr, contextMessage: It }), B && s.createElement(mi, { align: tt, wrapContent: nt }, At), s.createElement(wi, Object.assign({ $responsive: ue, $fixedHeader: ee, $fixedHeaderScrollHeight: Ee, className: Zr }, no), s.createElement(yi, null, F && !X && s.createElement(Qn, null, be), s.createElement(Da, Object.assign({ disabled: K, className: "rdt_Table", role: "table" }, bn && { "aria-label": bn }), !we && (!!X || V.length > 0 && !F) && s.createElement(Na, { className: "rdt_TableHead", role: "rowgroup", $fixedHeader: ee }, s.createElement(Ia, { className: "rdt_TableHeadRow", role: "row", $dense: h }, u && (go ? s.createElement(Ye, { style: { flex: "0 0 48px" } }) : s.createElement(ii, { allSelected: En, selectedRows: _t, selectableRowsComponent: E, selectableRowsComponentProps: O, selectableRowDisabled: b, rowData: po, keyField: a, mergeSelections: Pn, onSelectAllRows: oo })), rt && !pn && s.createElement(vi, null), wn.map((C) => s.createElement(oi, { key: C.id, column: C, selectedColumn: le, disabled: F || V.length === 0, pagination: J, paginationServer: A, persistSelectedOnSort: On, selectableRowsVisibleOnly: y, sortDirection: _e, sortIcon: Hr, sortServer: Tt, onSort: ro, onDragStart: vn, onDragOver: Cn, onDragEnd: Rn, onDragEnter: xn, onDragLeave: Sn, draggingColumnId: yn })))), !V.length && !F && s.createElement(xi, null, pe), F && X && s.createElement(Qn, null, be), !F && V.length > 0 && s.createElement(bi, { className: "rdt_TableBody", role: "rowgroup" }, Ze.map((C, N) => {
    const q = Ve(C, a), re = function(ve = "") {
      return typeof ve != "number" && (!ve || ve.length === 0);
    }(q) ? N : q, S = bt(C, _t, a), jt = !!(rt && gn && gn(C)), Fe = !!(rt && un && un(C));
    return s.createElement(Ka, { id: re, key: re, keyField: a, "data-row-id": re, columns: wn, row: C, rowCount: V.length, rowIndex: N, selectableRows: u, expandableRows: rt, expandableIcon: D, highlightOnHover: l, pointerOnHover: c, dense: h, expandOnRowClicked: Wr, expandOnRowDoubleClicked: Br, expandableRowsComponent: Lr, expandableRowsComponentProps: zr, expandableRowsHideExpander: pn, defaultExpanderDisabled: Fe, defaultExpanded: jt, expandableInheritConditionalStyles: Vr, conditionalRowStyles: Yr, selected: S, selectableRowsHighlight: m, selectableRowsComponent: E, selectableRowsComponentProps: O, selectableRowDisabled: b, selectableRowsSingle: p, striped: i, onRowExpandToggled: w, onRowClicked: io, onRowDoubleClicked: so, onRowMouseEnter: lo, onRowMouseLeave: co, onSelectedRow: ao, draggingColumnId: yn, onDragStart: vn, onDragOver: Cn, onDragEnd: Rn, onDragEnter: xn, onDragLeave: Sn });
  }))))), Qr && s.createElement("div", null, s.createElement(eo, { onChangePage: je, onChangeRowsPerPage: uo, rowCount: Y || V.length, currentPage: ne, rowsPerPage: ye, direction: qe, paginationRowsPerPageOptions: he, paginationIconLastPage: Re, paginationIconFirstPage: me, paginationIconNext: ie, paginationIconPrevious: Te, paginationComponentOptions: de })));
});
const Mi = () => /* @__PURE__ */ T("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ ut("table", { className: "min-w-full table-auto border border-gray-100 rounded-md", children: [
  /* @__PURE__ */ T("thead", { className: "rounded-md", children: /* @__PURE__ */ ut("tr", { className: "border-b border-gray-100", children: [
    /* @__PURE__ */ T("th", { className: "px-1 py-2 text-left", children: /* @__PURE__ */ T("div", { className: "w-full h-8 rounded-sm bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("th", { className: "px-1 py-2 text-left", children: /* @__PURE__ */ T("div", { className: "w-full h-8 rounded-sm bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("th", { className: "px-1 py-2 text-left", children: /* @__PURE__ */ T("div", { className: "w-full h-8 rounded-sm bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("th", { className: "px-1 py-2 text-left", children: /* @__PURE__ */ T("div", { className: "w-full h-8 rounded-sm bg-gray-200 animate-pulse" }) })
  ] }) }),
  /* @__PURE__ */ T("tbody", { className: "py-8", children: Array.from({ length: 5 }).map((t, n) => /* @__PURE__ */ ut("tr", { className: "border-b border-gray-50 ", children: [
    /* @__PURE__ */ T("td", { className: "pt-2 my-0 px-1", children: /* @__PURE__ */ T("div", { className: "w-full rounded-sm  h-8 bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("td", { className: "pt-2 px-1", children: /* @__PURE__ */ T("div", { className: "w-full rounded-sm h-8 bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("td", { className: "pt-2 px-1", children: /* @__PURE__ */ T("div", { className: "w-full rounded-sm h-8 bg-gray-200 animate-pulse" }) }),
    /* @__PURE__ */ T("td", { className: "py-2 px-1", children: /* @__PURE__ */ T("div", { className: "w-full rounded-sm h-8 bg-gray-200 animate-pulse" }) })
  ] }, n)) })
] }) });
var _r = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rr = R.createContext && /* @__PURE__ */ R.createContext(_r), Li = ["attr", "size", "title"];
function zi(e, t) {
  if (e == null) return {};
  var n = Wi(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Wi(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, St.apply(this, arguments);
}
function or(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? or(Object(n), !0).forEach(function(r) {
      Bi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bi(e, t, n) {
  return t = Vi(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vi(e) {
  var t = Gi(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gi(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jr(e) {
  return e && e.map((t, n) => /* @__PURE__ */ R.createElement(t.tag, Rt({
    key: n
  }, t.attr), jr(t.child)));
}
function on(e) {
  return (t) => /* @__PURE__ */ R.createElement(Ui, St({
    attr: Rt({}, e.attr)
  }, t), jr(e.child));
}
function Ui(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, i = zi(e, Li), l = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ R.createElement("svg", St({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: c,
      style: Rt(Rt({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ R.createElement("title", null, a), e.children);
  };
  return rr !== void 0 ? /* @__PURE__ */ R.createElement(rr.Consumer, null, (n) => t(n)) : t(_r);
}
function Yi(e) {
  return on({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z" }, child: [] }, { tag: "path", attr: { d: "M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z" }, child: [] }] })(e);
}
function qi(e) {
  return on({ attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z" }, child: [] }] })(e);
}
function Zi(e) {
  return on({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z" }, child: [] }, { tag: "path", attr: { d: "M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" }, child: [] }] })(e);
}
const Xi = {
  table: {
    style: {
      borderLeft: "0.2px solid #F3F4F6 !important",
      borderRight: "0.2px solid #F3F4F6 !important",
      borderTop: "0.2px solid #F3F4F6 !important",
      borderBottom: "0px solid #F3F4F6 !important"
    }
  },
  rows: {
    style: {
      minHeight: "60px",
      borderBottom: "0.2px solid #F3F4F6 !important"
    }
  },
  headCells: {
    style: {
      padding: "0 30px",
      backgroundColor: "#FAF5FF"
    }
  },
  cells: {
    style: {
      padding: "0 30px"
    }
  }
}, es = ({
  tableData: e,
  fetchData: t,
  columns: n,
  loading: r,
  onView: o,
  onEdit: a,
  onDelete: i,
  onRowClicked: l,
  onRowMouseEnter: c,
  ...h
}) => {
  const [u, p] = Dn(0), [m, f] = Dn(3), y = (b) => {
    t && t(b);
  }, $ = async (b, E) => {
    t && t(E), f(b);
  };
  return wo(() => {
    t && t(1);
  }, []), /* @__PURE__ */ T("div", { ...h, children: /* @__PURE__ */ T(
    Hi,
    {
      title: "",
      columns: [
        {
          name: "Index",
          selector: (b, E) => `${E ?? 1}`
        },
        ...n,
        {
          name: "Actions",
          cell: (b) => /* @__PURE__ */ ut("div", { className: "flex gap-1 ", children: [
            /* @__PURE__ */ T(
              qi,
              {
                onClick: () => o && o(b),
                size: 35,
                className: "hover:text-secondary-500 hover:bg-secondary-50 rounded-full p-2 cursor-pointer"
              }
            ),
            /* @__PURE__ */ T(
              Zi,
              {
                onClick: () => a && a(b),
                size: 35,
                className: "hover:text-red-500 hover:bg-red-50 rounded-full p-2 cursor-pointer"
              }
            ),
            /* @__PURE__ */ T(
              Yi,
              {
                onClick: () => i && i(b),
                size: 35,
                className: "hover:text-red-500 hover:bg-red-50 rounded-full p-2 cursor-pointer"
              }
            )
          ] })
        }
      ],
      data: e ?? [],
      progressPending: r,
      pagination: !0,
      onRowClicked: l,
      onRowMouseEnter: c,
      paginationServer: !0,
      paginationTotalRows: u,
      onChangeRowsPerPage: $,
      onChangePage: y,
      progressComponent: /* @__PURE__ */ T(Mi, {}),
      customStyles: Xi,
      paginationComponentOptions: {
        rowsPerPageText: "Rows per page",
        rangeSeparatorText: "of",
        selectAllRowsItem: !0,
        selectAllRowsItemText: "All"
      },
      noDataComponent: /* @__PURE__ */ T("div", { className: "flex justify-center items-center h-[40vh] w-full bg-secondary-50 rounded-sm", children: /* @__PURE__ */ T("p", { children: "No data to display" }) })
    }
  ) });
};
export {
  Kt as Alignment,
  es as AppTable,
  Ct as Direction,
  Kn as Media,
  Wt as STOP_PROP_TAG,
  Qi as createTheme,
  Ce as defaultThemes
};
