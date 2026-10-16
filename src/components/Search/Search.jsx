import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import "./search.css";
import SearchItem from "./SearchItem";
import useDebounce from "../../hooks/useDebounce.js";

export default function Search({ setWeather }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const searchRef = useRef(null);
  const debouncedText = useDebounce(searchText, 1000);
  function handleClick() {
    flushSync(() => {
      setShowSearch(true);
    });
    searchRef.current.focus();
  }

  const searchListMap = searchList.map(
    ({ name, state, country, lon, lat }, index) => (
      <SearchItem
        setShowSearch={setShowSearch}
        setWeather={setWeather}
        setSearchText={setSearchText}
        key={`${lat}-${lon}-${index}`}
        {...{ name, state, country, lat, lon }}
      />
    ),
  );

  async function findSearchResults(search) {
    const key = import.meta.env.VITE_OPENWEATHER_KEY;
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${key}`,
      );
      if (!res) {
        throw new Error("Could not fetch location data");
      }
      const data = await res.json();
      setSearchList(data);
    } catch (error) {
      console.error("Network Error", error.message);
    }
  }

  const showList = debouncedText.length > 2;

  const searchListStyles = () => {
    if (!showList || !searchList.length) {
      return {
        background:
          "linear-gradient(45deg, rgba(0, 149, 255, 0.5),rgba(255, 0, 0, 0.5))",
        color: "whitesmoke",
        backdropFilter: "blur(5px)",
      };
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (showList) {
      findSearchResults(debouncedText);
    }
  }, [debouncedText]);

  return (
    <>
      <div
        style={{ display: showSearch ? "block" : "none" }}
        className="search-container"
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowSearch(false);
          }
        }}
      >
        <input
          ref={searchRef}
          type="search"
          className="searchInput"
          name="searchName"
          id="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {
          <ul className="search-list" style={searchListStyles()}>
            {searchText ? (
              showList && searchListMap.length ? (
                searchListMap
              ) : (
                <p className="noSearch-p">No Result</p>
              )
            ) : (
              <p className="noSearch-p">Enter Location</p>
            )}
          </ul>
        }
      </div>
      {!showSearch && (
        <button onClick={handleClick} className="searchButton" type="button">
          <svg
            className="search-icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
          </svg>
        </button>
      )}
    </>
  );
}

/*[
  {
    name: "Srinagar",
    local_names: {
      en: "Srinagar",
      fa: "سرینگر",
      mr: "श्रीनगर",
      ks: "سِری نَگَر",
      ne: "श्रीनगर",
      ml: "ശ്രീനഗർ",
      cs: "Šrínagar",
      ar: "سرينغر",
      bn: "শ্রীনগর",
      hi: "श्रीनगर",
      ur: "سری نگر",
      zh: "斯利那加",
      ja: "シュリーナガル",
      uk: "Срінаґар",
      lt: "Šrinagaras",
      eo: "Srinagaro",
      pl: "Śrinagar",
      ko: "스리나가르",
      ps: "سري نگر",
      pa: "ਸ੍ਰੀਨਗਰ",
      ru: "Сринагар",
      kn: "ಶ್ರೀನಗರ",
      ta: "சிறிநகர்",
      te: "శ్రీనగర్",
      de: "Srinagar",
      he: "סרינגאר",
    },
    lat: 34.0747444,
    lon: 74.8204443,
    country: "IN",
    state: "Jammu and Kashmir",
  },
 
    name: "Srinagar",
    local_names: { hi: "श्रीनगर", pa: "ਸ੍ਰੀਨਗਰ" },
    lat: 30.2238064,
    lon: 78.7879045,
    country: "IN",
    state: "Uttarakhand",
  },
  {
    name: "Srinagar",
    lat: 24.78249615,
    lon: 78.89722035659501,
    country: "IN",
    state: "Madhya Pradesh",
  },
  {
    name: "Srinagar",
    lat: 30.2312408,
    lon: 78.80466191403389,
    country: "IN",
    state: "Uttarakhand",
  },
  {
    name: "Srinagar",
    lat: 25.9440372,
    lon: 87.4012291,
    country: "IN",
    state: "Bihar",
  },
]; */

/* [
    {
      name: "London",
      local_names: {
        ms: "London",
        gu: "લંડન",
        is: "London",
        wa: "Londe",
        mg: "Lôndôna",
        gl: "Londres",
        om: "Landan",
        ku: "London",
        tw: "London",
        mk: "Лондон",
        ee: "London",
        fj: "Lodoni",
        gd: "Lunnainn",
        ky: "Лондон",
        yo: "Lọndọnu",
        zu: "ILondon",
        bg: "Лондон",
        tk: "London",
        co: "Londra",
        sh: "London",
        de: "London",
        kl: "London",
        bi: "London",
        km: "ឡុងដ៍",
        lt: "Londonas",
        fi: "Lontoo",
        fy: "Londen",
        ba: "Лондон",
        sc: "Londra",
        feature_name: "London",
        ja: "ロンドン",
        am: "ለንደን",
        sk: "Londýn",
        mr: "लंडन",
        es: "Londres",
        sq: "Londra",
        te: "లండన్",
        br: "Londrez",
        uz: "London",
        da: "London",
        sw: "London",
        fa: "لندن",
        sr: "Лондон",
        cu: "Лондонъ",
        ln: "Lóndɛlɛ",
        na: "London",
        wo: "Londar",
        ig: "London",
        to: "Lonitoni",
        ta: "இலண்டன்",
        mt: "Londra",
        ar: "لندن",
        su: "London",
        ab: "Лондон",
        ps: "لندن",
        bm: "London",
        mi: "Rānana",
        kn: "ಲಂಡನ್",
        kv: "Лондон",
        os: "Лондон",
        bn: "লন্ডন",
        li: "Londe",
        vi: "Luân Đôn",
        zh: "伦敦",
        eo: "Londono",
        ha: "Landan",
        tt: "Лондон",
        lb: "London",
        ce: "Лондон",
        hu: "London",
        it: "Londra",
        tl: "Londres",
        pl: "Londyn",
        sm: "Lonetona",
        en: "London",
        vo: "London",
        el: "Λονδίνο",
        sn: "London",
        fr: "Londres",
        cs: "Londýn",
        io: "London",
        hi: "लंदन",
        et: "London",
        pa: "ਲੰਡਨ",
        av: "Лондон",
        ko: "런던",
        bh: "लंदन",
        yi: "לאנדאן",
        sa: "लन्डन्",
        sl: "London",
        hr: "London",
        si: "ලන්ඩන්",
        so: "London",
        gn: "Lóndyre",
        ay: "London",
        se: "London",
        sd: "لنڊن",
        af: "Londen",
        ga: "Londain",
        or: "ଲଣ୍ଡନ",
        ia: "London",
        ie: "London",
        ug: "لوندۇن",
        nl: "Londen",
        gv: "Lunnin",
        qu: "London",
        be: "Лондан",
        an: "Londres",
        fo: "London",
        hy: "Լոնդոն",
        nv: "Tooh Dineʼé Bikin Haalʼá",
        bo: "ལོན་ཊོན།",
        ascii: "London",
        id: "London",
        lv: "Londona",
        ca: "Londres",
        no: "London",
        nn: "London",
        ml: "ലണ്ടൻ",
        my: "လန်ဒန်မြို့",
        ne: "लन्डन",
        he: "לונדון",
        cy: "Llundain",
        lo: "ລອນດອນ",
        jv: "London",
        sv: "London",
        mn: "Лондон",
        tg: "Лондон",
        kw: "Loundres",
        cv: "Лондон",
        az: "London",
        oc: "Londres",
        th: "ลอนดอน",
        ru: "Лондон",
        ny: "London",
        bs: "London",
        st: "London",
        ro: "Londra",
        rm: "Londra",
        ff: "London",
        kk: "Лондон",
        uk: "Лондон",
        pt: "Londres",
        tr: "Londra",
        eu: "Londres",
        ht: "Lonn",
        ka: "ლონდონი",
        ur: "علاقہ لندن",
      },
      lat: 51.5073219,
      lon: -0.1276474,
      country: "GB",
      state: "England",
    },
    {
      name: "City of London",
      local_names: {
        es: "City de Londres",
        ru: "Сити",
        ur: "لندن شہر",
        zh: "倫敦市",
        en: "City of London",
        pt: "Cidade de Londres",
        fr: "Cité de Londres",
        uk: "Лондонське Сіті",
        he: "הסיטי של לונדון",
        hi: "सिटी ऑफ़ लंदन",
        ko: "시티 오브 런던",
        lt: "Londono Sitis",
      },
      lat: 51.5156177,
      lon: -0.0919983,
      country: "GB",
      state: "England",
    },
    {
      name: "London",
      local_names: {
        el: "Λόντον",
        fr: "London",
        oj: "Baketigweyaang",
        en: "London",
        bn: "লন্ডন",
        be: "Лондан",
        ko: "런던",
        he: "לונדון",
        ru: "Лондон",
        lt: "Londonas",
        hy: "Լոնտոն",
        ga: "Londain",
        ja: "ロンドン",
        yi: "לאנדאן",
        cr: "ᓬᐊᐣᑕᐣ",
        iu: "ᓚᓐᑕᓐ",
        ar: "لندن",
        lv: "Landona",
        fa: "لندن",
        ug: "لوندۇن",
        th: "ลอนดอน",
        ka: "ლონდონი",
      },
      lat: 42.9832406,
      lon: -81.243372,
      country: "CA",
      state: "Ontario",
    },
    {
      name: "Chelsea",
      local_names: {
        id: "Chelsea, London",
        uk: "Челсі",
        hi: "चेल्सी, लंदन",
        ga: "Chelsea",
        es: "Chelsea",
        de: "Chelsea",
        af: "Chelsea, Londen",
        vi: "Chelsea, Luân Đôn",
        pl: "Chelsea",
        pt: "Chelsea",
        da: "Chelsea",
        ko: "첼시",
        sv: "Chelsea, London",
        nl: "Chelsea",
        az: "Çelsi",
        it: "Chelsea",
        hu: "Chelsea",
        no: "Chelsea",
        fr: "Chelsea",
        he: "צ'לסי",
        eu: "Chelsea",
        ru: "Челси",
        ar: "تشيلسي",
        en: "Chelsea",
        el: "Τσέλσι",
        tr: "Chelsea, Londra",
        zh: "車路士",
        sh: "Chelsea, London",
        ja: "チェルシー",
        ur: "چیلسی، لندن",
        sk: "Chelsea",
        fa: "چلسی",
        et: "Chelsea",
      },
      lat: 51.4875167,
      lon: -0.1687007,
      country: "GB",
      state: "England",
    },
    {
      name: "London",
      lat: 37.1289771,
      lon: -84.0832646,
      country: "US",
      state: "Kentucky",
    },
  ] */
