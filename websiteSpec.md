# Dylan's Website Plan

## 1. Purpose and Audience

- Build a public personal showcase for Dylan's friends and family.
- Keep the experience fun, expressive, and centered on Dylan's interests.
- Write in Dylan's casual first-person voice.
- Do not publish Dylan's age, surname, school, location, contact details, social profiles, gamer tags, or routine information.
- Discourage search-engine indexing with `noindex, nofollow`.
- Do not add analytics, advertising, tracking pixels, comments, chat, or contact forms.

## 2. Experience Overview

- One scrolling web page with separate HTML, CSS, JavaScript, image, font, and video files.
- Use semantic HTML, modern CSS, and lightweight vanilla JavaScript.
- Support current and previous major versions of Chrome, Edge, Firefox, and Safari.
- Support responsive layouts from 360px-wide phones through large desktops.
- Target WCAG 2.2 AA.
- Prioritize visual fidelity while retaining baseline performance safeguards:
  - Responsive, appropriately compressed images in modern formats.
  - Lazy-load below-the-fold media.
  - Defer the biking video until its section is near the viewport.
  - Avoid render-blocking third-party scripts.
  - Test the experience on a typical mobile connection.

## 3. Navigation

### Desktop

- Use a slim, fixed left navigation rail.
- Show clear text labels, a Home control, and a visible active-section state.
- Smooth-scroll to each page section.
- Update the active state as the visitor scrolls.

### Mobile

- Replace the side rail with a fixed top bar and accessible menu button.
- Open navigation in a full-screen menu drawer.
- Support keyboard use, visible focus, focus trapping, Escape-to-close, and correct expanded-state announcements.

## 4. Page Structure and Content

The page order is:

1. Hero
2. About Me
3. Hobbies
4. Basketball Corner
5. Mountain Biking
6. Billie

### Hero

- Use a full-screen action photo of Dylan mountain biking.
- Dylan's approved hero photo will be supplied before final implementation.
- Use concise introductory text over the image; final wording will come from the content interview.
- Provide enough overlay contrast for readable text in both themes.
- Preserve a sensible focal point at desktop and mobile crops.

### About Me

- Keep the copy short, casual, and in first person.
- Build the final copy from a Dylan interview, then have Dylan approve it.
- Cover:
  - Personality in three words.
  - One fun fact.
  - One future goal.
- Do not display Dylan's age.

### Hobbies

- Use interactive, expandable cards.
- Include two hobbies here; basketball and mountain biking have their own sections.

#### Fishing

- Use one of Dylan's own approved fishing photos.
- Add a short first-person note about why he enjoys fishing.
- Do not name fishing spots or exact locations.

#### Video Games

- Show game titles only:
  - NBA 2K
  - Rocket League
  - Minecraft
  - Rainbow Six Siege
- Do not include gamer tags, profiles, ranks, stats, schedules, or external account links.

### Basketball Corner

- Keep the content evergreen; do not integrate live scores, schedules, rosters, or an NBA API.
- Cover:
  - Why Dylan supports the Golden State Warriors: Stephen Curry is the biggest reason.
  - Favorite player: Stephen Curry, because Dylan considers him the NBA's best three-point shooter.
  - Dylan's own interest: "I enjoy playing basketball because it's a team sport and there are lots of different positions."
- Link to the official Warriors site: <https://www.nba.com/warriors>.
- Clearly indicate that the external link opens in a new tab and use safe `rel` attributes.
- Use original, custom, or licensed visuals rather than unverified NBA photography or logos.

### Mountain Biking

- Make this a video-led section.
- Use Dylan's own self-hosted biking video.
- The video may autoplay muted on supported larger screens, subject to these safeguards:
  - Provide a visible pause/play control.
  - Pause when the video is off-screen.
  - Use a poster instead when reduced-motion or data-saving preferences apply.
  - Do not autoplay on narrow/mobile screens.
  - Add captions or a transcript if the final video contains speech.
- Add three compact cards below the video:
  - Trick Riding
  - Trail Riding
  - City Riding
- Give each card one short personal sentence.
- Identify Dylan's bike as a Santa Cruz Hightower.
- Link to the manufacturer page: <https://www.santacruzbicycles.com/en-ca/collections/hightower>.
- Clearly indicate that the external link opens in a new tab and use safe `rel` attributes.
- Use Dylan's own bike and riding photos in the final site.

### Billie

- Create a dedicated but minimal section using an abstract graphic rather than a personal photo.
- Content may include:
  - Billie's first name only.
  - A short relationship note.
  - One or two shared interests.
  - A general favorite memory without dates or locations.
  - A small personal bio limited to non-identifying preferences such as hobbies, favorite music, or favorite color.
- Do not include Billie's surname, age, birthday, school, team or club, neighborhood, social profiles, contact details, routines, or location information.
- Publication is blocked until Billie and her parent or guardian approve the exact final content.
- Omit the entire section until that approval is received.

### Footer

- Show Dylan's first name and the current year.
- Include a Back to Top control.
- Include access to the theme control.
- Do not include contact information.

## 5. Themes

- Default to the visitor's system light or dark preference.
- Provide a manual theme override and remember it locally without tracking.
- Retain a recognizable red-and-black identity in both themes while maintaining WCAG 2.2 AA contrast.
- Phase-one prototypes may focus on dark mode.
- Both light and dark themes must be designed in phase two.

## 6. Visual Prototyping

Use the same content and licensed placeholder assets in every phase-one prototype so the visual direction is the main variable.

### Phase One: Six Directional Prototypes

Each prototype will include:

- The full-screen Hero.
- Desktop side navigation and mobile menu treatment.
- The Mountain Biking section.
- One representative hero entrance.
- One navigation transition.
- One content interaction.

Create these six distinct directions:

1. **Matte Neon** - charcoal surfaces, electric-red accents, off-white text, metallic gray, and restrained red glow.
2. **Cyberpunk** - intense neon, layered digital effects, energetic type, and controlled glitch motifs.
3. **Sport Tech** - clean athletic styling, bold red panels, speed-inspired geometry, and high-impact statistics-style typography.
4. **Minimal Dark** - reduced visual effects, strong spacing, crisp typography, and photography-led composition.
5. **Industrial Trail-Tech** - bike-component details, topographic lines, rugged textures, and technical UI motifs.
6. **Cinematic Editorial** - dramatic full-bleed photography, large editorial type, minimal interface chrome, and film-inspired transitions.

Use Google Fonts during prototyping and for the selected final direction.

### Phase-One Decision

- Dylan chooses based primarily on overall impression.
- Dylan may select individual ideas from multiple prototypes.
- Do not merge every selected idea into one inconsistent design; group compatible ideas into coherent directions for phase two.

### Phase Two: Two Composite Prototypes

- Create two coherent, higher-fidelity composite directions.
- Build the complete page for desktop and mobile.
- Design both system-driven light and dark variants.
- Include representative final motion and interaction behavior.
- Dylan chooses the final direction after comparing both complete experiences.

## 7. Motion

- Let the prototype rounds determine the final motion intensity and style.
- Every direction must still:
  - Honor `prefers-reduced-motion`.
  - Avoid flashing or disorienting effects.
  - Keep navigation and content usable without animation.
  - Provide controls for persistent motion such as video.

## 8. Assets and Content Inputs

### Required Before Final Implementation

- Approved hero action photo of Dylan.
- Approved fishing photo.
- Approved bike and riding photos.
- Optimized self-hosted mountain biking video and poster image.
- Dylan's answers for About Me.
- One sentence for each riding style.
- Final Billie copy and required approval.
- Final theme copy, labels, alt text, and captions.

### Asset Rules

- Use licensed placeholders during prototyping.
- Use Dylan's own media and custom graphics wherever possible in the final site.
- Evaluate third-party assets individually; if reuse rights are not established, keep the licensed placeholder or omit the asset.
- Treat the Warriors and Santa Cruz URLs as external references, not permission to copy their media.
- No separate photo/video privacy-review or metadata-removal gate is currently in scope.

## 9. Implementation Sequence

1. Gather initial copy and licensed placeholder assets.
2. Build the six phase-one prototype slices.
3. Review with Dylan and record the preferred elements.
4. Build two full-page phase-two composite prototypes in desktop/mobile and light/dark variants.
5. Have Dylan select the final direction.
6. Gather and approve final copy, personal media, video, and Billie content.
7. Implement the production page in semantic HTML, CSS, and vanilla JavaScript.
8. Complete responsive, browser, keyboard, screen-reader, reduced-motion, theme, media, and mobile-connection testing.
9. Select hosting and publish; hosting remains undecided and does not block prototyping.

## 10. Completion Criteria

- All six sections are complete and reachable through desktop and mobile navigation.
- Smooth scrolling and active-section tracking work without obscuring focused content.
- Interactive cards and menus work with keyboard, mouse, and touch.
- Light/dark system preference and the remembered manual override work.
- The site meets WCAG 2.2 AA requirements.
- Reduced-motion behavior and all video safeguards work.
- Personal contact, social, gaming-account, school, age, and location details are absent.
- Billie content is either approved as specified or omitted.
- External Warriors and Santa Cruz links are clearly identified and safe.
- The site uses no analytics or tracking and discourages search indexing.
- The layout works in supported modern browsers from 360px through large desktop sizes.
- Final media and content are supplied and approved before launch.

## Decisions after prototyping Phase 1

 - I like sport tech generally, but the fonts from matte-neon are preferred
 - Some fonts, like in the nav are too small, they need to be increased a bit.
 - The cards in sport tech are great.  Instead of a click to open, can you please have them just open always.