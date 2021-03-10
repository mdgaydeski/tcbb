import React from 'react';
import marked from 'marked';

const Markdown = ({ input }) => {
    return <div dangerouslySetInnerHTML={{__html: marked(input)}} />
}

export default Markdown;