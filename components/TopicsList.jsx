import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    // console.log(process.env.NEXT_PUBLIC_API_URL , 'helo world');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      // throw new Error("Failed to fetch topics");
      return { topics: [] };
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  // const topics = [
  //   {
  //     _id: "1",
  //     title: "First Topic",
  //     description: "This is the first topic",
  //   },
  //   {
  //     _id: "2",
  //     title: "Second Topic",
  //     description: "This is the second topic",
  //   },
  //   {
  //     _id: "3",
  //     title: "Third Topic",
  //     description: "This is the third topic",
  //   }
  // ]

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
