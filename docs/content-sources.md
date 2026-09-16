# Portfolio content sources

## Primary source

`app/resume/SohHongYu_Resume_caa20260917.pdf`, uploaded by Hong Yu.

- NUS: Bachelor of Computing, Computer Science, August 2026 to May 2030.
- Singapore Polytechnic: Applied Artificial Intelligence and Analytics diploma, April 2021 to April 2024; CGPA 3.97/4.00, 15 Distinctions, 7 As, Singapore Digital Scholarship and Director's Honour Roll.
- GovTech Singapore, Cybersecurity Group: Software Engineer, April 2023 to June 2024. React/Elasticsearch security dashboards and Terraformer reverse-IaC integration.
- Ministry of Education: Relief Corporate Support Officer, September 2021 to November 2022. RPA/VBA workflows reduced processing time by 67%+, from about three hours to under one; PDF and web tools for educators.
- Overcooked IRL: 80+ participants, six physical game stations, real-time shared state.
- L.A.R.P.: Localised Amendment Resilience Platform; document dependencies, human review, prioritisation, comparisons and AI diffs; Next.js, Cloudflare R2, LLMs.
- PickMe: React, FastAPI, OpenAI API. Winner of the **Rezolve AI Consumerism Challenge**, not a claim of winning LifeHack overall.
- Hack&Roll award names, PolyFinTech API 100 and Singapore FinTech Festival results.
- President, Singapore Polytechnic School of Computing Club, 2022–2023.

The original PDF is served byte-for-byte at `/resume/document` (inline) and `/resume/download` (attachment). `/resume` is a preview page, not a separately authored CV.

## Public project sources

Sources were reviewed from the `UltraRaptorYT` GitHub account. Project entries are curated; this is not an automatic dump of every repository or fork.

| Project                        | Source                                                                                                                                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FilmGram                       | [README](https://github.com/UltraRaptorYT/FilmGram#readme): a code-first Node/TypeScript pipeline, not a verified Next.js editing app; HyperFrames, FFmpeg, local Ollama and Kokoro |
| Enchanted Notebook             | [README](https://github.com/UltraRaptorYT/EnchantedNotebook#readme): canvas handwriting, Gemini, cursive responses and recent-page memory                                           |
| Overcooked IRL                 | [README](https://github.com/UltraRaptorYT/Overcooked#readme) and resume; ZO Camp June 2026, Supabase Realtime, voice orders and six stations                                        |
| Atelier                        | [README](https://github.com/UltraRaptorYT/Atelier#readme): specialist agents, Three.js, OpenAI, E2B and Blender                                                                     |
| TaskGoblin                     | [README](https://github.com/UltraRaptorYT/TaskGoblin#readme): Telegram-native AI project management                                                                                 |
| AirMouse                       | [README](https://github.com/UltraRaptorYT/AirMouse#readme): multiplayer phone-motion quiz                                                                                           |
| Cursor Tag                     | [README](https://github.com/UltraRaptorYT/CursorTag#readme): phone-controlled browser tag game                                                                                      |
| Path of Xuanzang               | [README](https://github.com/UltraRaptorYT/Path-of-Xuanzang#readme): camera-controlled event with local pose processing                                                              |
| Live WebGPU Transcription      | [README](https://github.com/UltraRaptorYT/Parakeet-WebGPU#readme): currently uses **Whisper**, despite the repository name; Parakeet integration is not claimed                     |
| ReRemote                       | [README](https://github.com/UltraRaptorYT/ReRemote#readme): Arduino code for ReWired 2024                                                                                           |
| Singen                         | [Repository](https://github.com/UltraRaptorYT/Singen), original portfolio brief and resume award; the AI-video description came from Hong Yu's brief                                |
| AI Platformer                  | [README](https://github.com/UltraRaptorYT/AI-Platformer#readme): TypeScript/Webpack experiment; no performance or model capability claims added                                     |
| Machine Failure Classification | [Repository description](https://github.com/UltraRaptorYT/Machine-Failure-Classification): supervised learning for failure detection                                                |
| Credit Card Fraud Detection    | [Repository](https://github.com/UltraRaptorYT/Credit-Card-Fraud-Detection): notebook-based learning project; no accuracy claims                                                     |
| Air Pollution Forecasting      | [Repository](https://github.com/UltraRaptorYT/Air-Pollution-Forecasting): notebook-based learning project; no accuracy claims                                                       |
| Tether                         | [README](https://github.com/UltraRaptorYT/Tether#readme): Appetizer Hackathon project                                                                                               |

Archive years follow the supplied brief/resume or the repository creation year when a build year is not documented. Website links come from public repository homepage fields; a link does not imply a currently maintained or fully operational deployment.

## User-supplied information retained

- Current FilmGram work, Summer 2027 opportunity interest, volunteer since 13, occasional tank technician and the personal copy came from the original brief.
- L.A.R.P.'s SMU LegalTech runner-up result and Agent Launchpad's description/stack came from the original brief. They are not independently established by the uploaded resume. No public project URL was located for L.A.R.P. or Agent Launchpad, so those entries use an email CTA.

## Beacons

`https://beacons.ai/UltraRaptor` returned a Cloudflare 403 in both the fetch tool and a normal browser session. Hong Yu then pasted its rendered HTML, providing the visible project names, captions and destination links.

The visible links were transcribed into `app/lib/beacons-projects.ts` and merged with the previously reviewed GitHub collection. The raw HTML, browser-extension styles, opaque payloads and session tokens were not stored. App/video variants of A Unicorn's Adventure and app/admin variants of MediPill share one entry with additional links. Community, social and general video links appear separately under “Beyond the code.” Legacy deployment URLs are retained as source links; availability and every application's behaviour have not been independently verified.

Confirmed corrections and additions:

- **PickMe:** Beacons says “2nd Place Consumerism Track”, while the resume says “Winner, Rezolve AI Consumerism Challenge”. Asked Hong Yu directly; he selected **Challenge winner**. The portfolio uses that confirmed wording. The supplied demo URL is `https://pickme-lifehack.vercel.app/`.
- **Atelier:** project site is `https://atelier-architecture-studio.z3e0.chatgpt.site/` (GPT-6 Astra Hackathon caption).
- **TaskGoblin:** Telegram entry point is `https://t.me/taskgoblin_launch_bot`; the existing web app remains linked too.
- **Hack&Roll:** the supplied HTML connects A Brilliant Cobra Duel to the 2024 Best Pre-University award, Art-ificial Failure to the 2025 award, and Shape Up! to 2026 Most Entertaining Hack.
- **Singen:** the HTML specifies the Generative AI category at PolyFinTech and connects the same project to the Singapore FinTech Festival first-runner-up result.
- **ReRemote:** first runner-up at NUS ReWired 2024, with its supplied video link.
- Additional project names, event captions and links from 2020 onward are retained conservatively. Where only a name/event is supplied, the entry does not invent a feature description or technology stack.
- DR Go, RoboTech Chatbot and RUBI Chatbot have no confirmed project year in the visible captions or reviewed repository metadata; they are shown as undated.

## Illustration disclosure

The four featured visuals are original concept illustrations, not screenshots or recordings of the applications. They are labelled accordingly.
