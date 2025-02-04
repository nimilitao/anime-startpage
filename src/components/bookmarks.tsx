import React from 'react'

interface SectionData {
  title: string
  items: { label: string; link: string }[]
}

interface SocialLinksProps {
  sections: SectionData[]
}

const Bookmarks: React.FC<SocialLinksProps> = ({ sections }) => {
  return (
    <div className="flex flex-row justify-between font-inter">
      {sections.map((section, index) => (
        <section
          key={index}
          className="flex flex-col items-start text-left font-normal"
        >
          <p
            className="mb-2 text-left font-normal text-medium"
            style={{ marginTop: '20px' }}
          >
            {section.title}
          </p>
          <ul className="space-y-2 list-none text-left">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="text-left text-lowercase"
                style={{ marginTop: '10px' }}
              >
                <span className="text-[#686868]">└ </span>{' '}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-[#686868] hover:text-[#A1A1A1]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default Bookmarks
