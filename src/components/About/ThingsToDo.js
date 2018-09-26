import React, { Component } from 'react';

class ThingsToDo extends Component {
  render() {
    const thingsToDo = this.props.thingsToDo;

    let thingsToDoList;

    if(thingsToDo) {
      thingsToDoList = Object.entries(thingsToDo).map(([index, thingToDo]) => {
        return (
          <div key={index} className="thing-to-do">
            <h4>{thingToDo.name}</h4>
            <img src={thingToDo.image.thumb_photo_url}/>
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
        {thingsToDoList}
      </section>
    );
  }
}

export default ThingsToDo;
