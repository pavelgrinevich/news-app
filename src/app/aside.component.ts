import { Component } from '@angular/core';

@Component({
  selector: 'aside',
  template:
    `<section>
      <h3>set filter</h3>
      <div class="filter">
        <form action="" method="post">
          <div>
            <label for="q">Keywords or phrases to search for:</label>
          </div>
          <div>
            <input id="q" type="text" name="q">
          </div>
          <div>Sources:</div>
          <div class="sources">choose sources</div>
          <div class="sources-window">
            <form action="" method="post">
              <label for="category">Сategory:</label>
              <select id="category">
                <option>any</option>
                <option>business</option>
                <option>entertainment</option>
                <option>general</option>
                <option>health</option>
              </select>
              <label for="language">Language:</label>
              <select id="language">       
                <option>any</option>
                <option>ar</option>
                <option>de</option>
                <option>en</option>
                <option>es</option>
              </select>
              <label for="country">Country:</label>
              <select id="country">
                <option>any</option>
                <option>ae</option>
                <option>ar</option>
                <option>at</option>
                <option>au</option>
              </select>
              <input type="submit" value="show">
            </form>
            <form action="" method="post">
              <h4>Sources:</h4>
              <div>
                <div>
                  <input id="abc-news-au" type="checkbox" value="abc-news-au">
                  <label for="abc-news-au">ABC News (AU)</label>
                  <p>Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.</p>
                </div>
                <div>
                  <input id="aftenposten" type="checkbox" value="aftenposten">
                  <label for="aftenposten">Aftenposten</label>
                  <p>Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.</p>
                </div>
                <div>
                  <input id="al-jazeera-englis" type="checkbox" value="al-jazeera-englis">
                  <label for="al-jazeera-englis">Al Jazeera English </label>
                  <p>News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.</p>
                </div>
                <div>
                  <input id="ansa" type="checkbox" value="ansa">
                  <label for="ansa">ANSA.it </label>
                  <p>Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.</p>
                </div>
              </div>
              <input type="submit" value="choose">
              <input type="submit" value="cancel">
            </form>
          </div>
          <div>
            <label for="language">Language:</label>
          </div>
          <div> 
            <select id="language">       
              <option>any</option>
              <option>ar</option>
              <option>de</option>
              <option>en</option>
              <option>es</option>
              <option>fr</option>
              <option>he</option>
              <option>it</option>
              <option>nl</option>
              <option>no</option>
              <option>pt</option>
              <option>ru</option>
              <option>se</option>
              <option>ud</option>
              <option>zh</option>
            </select>
          </div>
          <div>
            <label for="from">From:</label>
          </div>
          <div>
            <input id="from" type="date" name="from">
          </div>
          <div>
            <label for="to">To:</label>
          </div>
          <div>
            <input id="to" type="date" name="to">
          </div>
          <div>
            <input type="submit" value="search">
          </div>
        </form>
      </div>
    </section>`
  })

export class AsideComponent { }
