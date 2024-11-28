import Navbar from "@/components/Navbar/Navbar";
import TextList from "@/components/TextList/TextList";
import imageAny from "@/public/anybrowser.png";
import imageChess from "@/public/chess.png";
import "./styles.css";

export default async function HomePage() {
  return (
    <>
      <Navbar pagePath="/works" />
      <TextList>
        <TextList.Field>
          <img
            className="works__img"
            src={imageAny.src}
            alt="a screenshot of anyobjects.ru"
          />
        </TextList.Field>
        <TextList.Field>
          <img
            className="works__img"
            src={imageChess.src}
            alt="a screenshot of anyobjects.ru"
          />
        </TextList.Field>
      </TextList>
    </>
  );
}
