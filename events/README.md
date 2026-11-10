# Event pages

This folder contains one detail page per event. The events listing lives in
[`../pages/events.html`](../pages/events.html); add a card there when adding a
new event.

## Adding an event

1. Copy the structure of the closest existing event page.
2. Save the page here with a descriptive lowercase camel-case name, such as
   `pythonWorkshop.html`.
3. Keep the event's poster, gallery, and report in a matching folder under
   `../images/`.
4. Use root-relative asset paths (`/images/events/...`, `/css/...`, `/js/...`) so the
   page works when hosted on GitHub Pages.
5. Add the page link and poster to `../pages/events.html`.

There should be only one canonical detail page for each event. Do not create
numbered or alternate copies of an event page.
