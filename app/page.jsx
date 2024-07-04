import Announcement from "./src/components/Main/Home/Announcement/Announcement";
import Cover from "./src/components/Main/Home/Cover";
import History from "./src/components/Main/Home/History";
export default function Home() {
  return (
    <main>
     <Cover />
     <Announcement />
     <Cover />
      <History />
    </main>
  );
}
