import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Suresh Kaleyannan. I am a Web Developer specializing in building responsive, user-friendly websites and modern web applications using the latest technologies.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web Development / Graphic Designing  / Multimodal Learning"
      },
{
  id: "about-who-cares",
  title: "who-cares.txt",
  type: "file",
  content:
    "I'm passionate about Web Development and Graphic Design, creating modern websites and visually engaging digital experiences. Open to creative collaborations and freelance opportunities."
},
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:hello@suresh.app"
                target="_blank"
                rel="noreferrer"
              >
                hello@suresh.app
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/sureshapps"
                target="_blank"
                rel="noreferrer"
              >
                @sureshapps
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                className="text-blue-300"
                href="https://instagram.com/sureshksmy"
                target="_blank"
                rel="noreferrer"
              >
                sureshksmy
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://suresh.app"
                target="_blank"
                rel="noreferrer"
              >
                https://suresh.app
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
