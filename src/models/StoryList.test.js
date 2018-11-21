import { Storylist, StorylistItem } from "./StorylistStore";

it("can create an instance of StorylistItem", () => {
    const item = StorylistItem.create({
        "title" :  "This is not a passport photo",
        "image" : "http://image.png",
        "projectLead" : "Stephanie Simpson",
        "isAwarded" : true,
        "inTop20Perc" : true,
        "inTop50Perc" : true,
        "videoLink": "n0NDv45gn-E",
        "id": 92
    });
    
    expect(item.title).toBe('This is not a passport photo');
});


it("can create an empty instance of Storylist", () => {
    const list = Storylist.create({
        // items: []
    });

    expect(list.items).toEqual([]);
});

it("can create an instance of Storylist", () => {
    const item = StorylistItem.create({
        "title" :  "This is not a passport photo",
        "image" : "http://image.png",
        // "projectLead" : "Stephanie Simpson",
        // "isAwarded" : true,
        // "inTop20Perc" : true,
        // "inTop50Perc" : true,
        // "videoLink": "n0NDv45gn-E",
        "id": "92"
    });
    
    const list = Storylist.create({
        items: [item]
    });

    expect(list.items[0]).toEqual(item);
    expect(list.items.length).toBe(1);
});