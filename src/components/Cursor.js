import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  let { x, y } = useMousePosition();
  const { cursorType } = useContext(CursorContext);
  const { hoverMenu, hoverNav } = cursorType;

  useEffect(() => {
    const cursor = cursorRef.current;
    cursor.classList.remove("hover");
    if (hoverNav) {
      cursor.classList.add("hover");
    }
    cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px,${
      y - cursor.offsetHeight / 2
    }px)`;
    cursor.style.willChange = `transform `;
    return () => {
      cursor.style.willChange = `none`;
    };
  }, [hoverNav, x, y]);

  return <div ref={cursorRef} className="cursor"></div>;
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mousePosition;
}

export const CursorContext = createContext({
  cursorType: {},
  cursorChangeHandler: () => {},
});

export const CursorContextProvider = (props) => {
  const [cursorType, setCursorType] = useState({
    hoverNav: false,
    hoverMenu: false,
    hoverSocial: false,
  });
  const cursorChangeHandler = (newCursorType) => {
    setCursorType({
      ...cursorType,
      ...newCursorType,
    });
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </CursorContext.Provider>
  );
};
