import React from 'react'

interface SectionData {
  title: string
  items: { label: string; link: string }[]
}

interface SocialLinksProps {
  sections: SectionData[]
  textColor?: string
}

const Bookmarks: React.FC<SocialLinksProps> = ({
  sections,
  textColor = '#636363',
}) => {
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
                <span className="text-[#636363]">└ </span>
                <a
                  href={item.link}
                  className="no-underline transition-all duration-300"
                  style={{
                    color:'#686868',
                    textShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = textColor
                    e.currentTarget.style.textShadow = `0 0 15px ${textColor}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#636363'
                    e.currentTarget.style.textShadow = 'none'
                  }}
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
