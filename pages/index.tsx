import styles from "./index.module.css";
import Link from "next/link";

function Heading(props) {
  return (
    <div>
      <h1 className="title" style={{ fontSize: "100px" }}>
        {props.heading}
      </h1>
      <button className={styles.border}>Hello</button>
      <Link href="/page1">Go to Page 1</Link>
      <style jsx>
        {`
          .title {
            color: red;s
          }

          .title:hover{
            color:green;
            cursor:pointer;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading="Title Doomsda" />
      <h1 className="title farther">This is title too</h1>
    </div>
  );
}
