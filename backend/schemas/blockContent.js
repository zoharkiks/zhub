export default {
  name: "blockContent",
  type: "array",
  title: "Block Content",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        {
          title: "Normal",
          value: "normal",
        },
        {
          title: "H1",
          value: "h1",
        },
        {
          title: "H2",
          value: "h2",
        },
        {
          title: "H3",
          value: "h3",
        },
        {
          title: "H4",
          value: "h4",
        },
        {
          title: "quote",
          value: "blockQuote",
        },
      ],
      lists: [
        {
          title: "Bullet List",
          value: "bullet",
        },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            value: "link",
            type: "object",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
            ],
          },
        ],
      },
    },

    {
        type:'image',
        options:{
            hotspot:true
        }
    }
  ],
};
