import * as React from 'react';

type Props = {
  thingsToDo: {
    image: {
      thumb_photo_url: string;
    };
    name: string;
    description: string;
    website_url: string;
  }[]
}

class ThingsToDo extends React.Component<Props> {
  render() {
    const thingsToDo = this.props.thingsToDo;

    let thingsToDoList;

    if (thingsToDo) {
      thingsToDoList = Object.entries(thingsToDo).map(([index, thingToDo]) => {
        let image = thingToDo.image || {};

        return (
          <div key={index} className="thing-to-do">
            <h4>{thingToDo.name}</h4>
            <img src={image.thumb_photo_url || "./images/placeholder-image.jpg"} />
            <p>{thingToDo.description}</p>
            <p><a
              href={thingToDo.website_url}
              target="_blank">{thingToDo.website_url}</a></p>
          </div>
        );
      });
    }

    return (
      <section className="things-to-do">
        <h2>Things to do</h2>
        {thingsToDoList}
      </section>
    );
  }
}

export default ThingsToDo;
