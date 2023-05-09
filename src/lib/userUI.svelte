<script>
// @ts-nocheck
  import { userQuizSelections, failedQuestions, useMarkdown, trivia} from "./conf";
  import { marked } from 'marked';
  import highlight from 'highlight.js';
  import 'highlight.js/styles/monokai.css';

  let markDown = code => 
  {
    code = code.replaceAll('&amp;', '&')
    code = code.replaceAll('&lt;', '<')
    code = code.replaceAll('&gt;', '>')
    code = code.replaceAll('&quot;', '"')
    code = code.replaceAll('&#39;', "'")
    code = code.replaceAll('&#x2F;', '/')

    return $useMarkdown ? marked(
    code,
    {
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartypants: false,
      xhtml: false,
      highlight: (code, language) => 
      {
        const highlightedCode = language ? highlight.highlight(code, {language}).value : code;
        return language ? `<pre><code class="hljs ${language}">${highlightedCode}</code></pre>` : code;
      }
    }) : code;
  }
  let auth = localStorage.getItem("auth")
  let f = async (data) => await fetch('https://utmquizz.kroko.ro/writeJSONS.php',
  {
      method: 'POST',
      headers:
      {
          Authorization: auth
      },
      body: JSON.stringify(data)
  })
  .then((/** @type {any} */response) => 
  {
      const reader = response.body.getReader();
      return new ReadableStream(
      {
          start(controller) 
          {
              // The following function handles each data chunk
              function push() 
              {
                  // "done" is a Boolean and value a "Uint8Array"
                  reader.read().then((/** @type {any} */{ done, value }) => 
                  {
                      // If there is no more data to read
                      if (done) 
                      {
                          controller.close();
                          return;
                      }
                      // Get the data and send it to the browser via the controller
                      controller.enqueue(value);
                      push();
                  });
              }
              push();
          },
      });
  })
  .then(async stream => 
  {
    let r = JSON.parse(await (new Response(stream, { headers: { "Content-Type": "application/json" } }).text()))
    console.log(r)
    return r
  })
  let test = (code) => highlight.highlightAuto(code).value;
  /**
   * @type {string[]}
   */
  export let correct_answers = [];
  export let showAnswers = false;
  export let generateAnswered = false;
  export let index = 0;
  export let question = "Ai uitat sa pui titlul intrebarii";
  export let answers = [
    "lipsa rasp 1",
    "lipsa rasp 2",
    "lipsa rasp 3",
    "lipsa rasp 4",
  ];
  export let course = '';
  export let id = '';
  /**
   * @type {string}
   */
  const compiledQuestion = markDown(question);
  
  // if needed add this to compiledQuestion
  /*
    + ` <span class="required" /><span style="color: #014446;">(5 Points)</span>`
  */
  /**
   * @type {string}
   */
  let type = correct_answers.length == 1 ? "radio" : "checkbox"
/**
   * @type {string[]}
   */
  let userSelectedAnswers = [];

  /**
   * @type {("wrong"|"correct"|"")[]}
   */
  let errors = [];
  /**
   * @type {[]}
   */
  let checked = [];
  let unmodifiedQuestion = '';
  let unmodifiedAnswers = [];
  let modifiedQuestion = '';
  let modifiedAnswers = [];
  $userQuizSelections[index] = { userSelectedAnswers };
  if (generateAnswered) 
  {
    answers.forEach((val, index) => 
    {
      if (correct_answers.includes(val)) {
        userSelectedAnswers.push(val);
        errors[index] = "correct";
      }
    });
    errors = [...errors];
  }
  let checker = false;
  let showThisAnswer = false;
  /**
   * @type {string[]}
   */
  
  $: if (showAnswers || showThisAnswer) 
  {
    $userQuizSelections[index] = { userSelectedAnswers };
    answers.forEach((val, index) => 
    {
      const userSelected = userSelectedAnswers.includes(val);
      const answerIsCorrect = correct_answers.includes(val);
      checked.push(userSelected ? "checked" : "");
      if ((answerIsCorrect && !userSelected) || (!answerIsCorrect && userSelected)) checker = true;

      if (answerIsCorrect) errors[index] = "correct";
      if (userSelected && !answerIsCorrect) errors[index] = "wrong";
    });
    errors = [...errors];
    let sERRORS = localStorage.getItem(`errors${index}`)
    let sCHECKED = localStorage.getItem(`checked${index}`)
    if (!generateAnswered && !sERRORS) localStorage.setItem(`errors${index}`, JSON.stringify(errors))
    if (!generateAnswered && !sCHECKED) localStorage.setItem(`checked${index}`, JSON.stringify(checked))
    if(checker) failedQuestions.update(n => n + 1);
  }
  // https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding
  const handleInput = (e, i, a) => 
  {
    // // in here, you can switch on type and implement
    // // whatever behaviour you need
    // console.log(document.querySelectorAll(`input[name=${a}]`)[i].value)
    let localSelection = []
    document.querySelectorAll(`input[name=${a}]:checked`).forEach(inputE => localSelection.push(inputE.value))
    userSelectedAnswers = localSelection
    $userQuizSelections[index] = { userSelectedAnswers };
  };
  const issueRightClick = (c, qid, v) =>
  {
    // let cid = document.querySelector('#context-menu-holder').getAttribute("cid"), qid = document.querySelector('#context-menu-holder').getAttribute("qid")
    document.querySelector(`#course_${c}_${qid} #context-menu-holder`).style.visibility = 'hidden'
    let element;
    if (v == "expl")
      element  = document.querySelector(`#course_${c}_${qid} .q-index`)
    else if (v == "q")
      element = document.querySelector(`#course_${c}_${qid} .question-title pre`)
    else
      element = document.querySelectorAll(`#course_${c}_${qid} .answer-wrapper pre[qid]`)[v]
    var e = element.ownerDocument.createEvent('MouseEvents');
    e.initMouseEvent('contextmenu', true, true,
    element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
    false, false, false,2, null);
    element.dispatchEvent(e)
  }
</script>
{#if index == 0}
  <section id="question-proof-container">
    <section class='content' id='question-proof-text'>
      <header id='content-title-bar'>
        <article id='content-title'>Explicație pentru întrebarea <span id='course-q-id'></span> din cursul <span id='course-id'></span></article>
        <article id='content-title-bar-controls'><button class='cancel-btn' on:click|preventDefault={() => 
        {
          document.querySelector('#question-proof-container').style.display = "none"
          document.querySelector('#question-explanation-code').setAttribute("contenteditable", false);
          document.querySelector("#content-control-buttons .markdown").disabled = false;
          document.querySelector("#content-control-buttons .previz").disabled = true;
        }}>X</button></article>
      </header>
      <section class='content-text' on:keydown={event => 
      {
        if (event.key === 'Enter') 
        {
          event.preventDefault()
          document.execCommand('insertLineBreak')
        }
        if (event.key == 'Tab' && event.shiftKey) 
        {
          event.preventDefault();
          document.execCommand("outdent");
        } 
        else if (event.key == 'Tab') 
        {
          event.preventDefault();
          document.execCommand("indent");
        }
      }}>
      <pre id="question-explanation-code" contenteditable="true"></pre>
      </section>
      <footer>
        <article id='content-control-buttons'>
          <button class='submit-btn markdown' on:click|preventDefault={(e) =>
          {
            let target = e.target;
            target.disabled = true;
            document.querySelector("#content-control-buttons .previz").disabled = false;
            let course_id = document.querySelector('#course-id')?.textContent;
            let course_q_id = document.querySelector('#course-q-id')?.textContent;
            let t = document.querySelector('#question-explanation-code')
            t.setAttribute("contenteditable", true);
            t.focus();
            t.textContent = trivia[course_id][course_q_id-1]['explanation'] ? trivia[course_id][course_q_id-1]['explanation'] : '';
          }}>Editare</button>
          <button class='submit-btn previz' on:click|preventDefault={(e) =>
          {
            let target = e.target;
            target.disabled = true;
            document.querySelector("#content-control-buttons .markdown").disabled = false;
            let course_id = document.querySelector('#course-id')?.textContent;
            let course_q_id = document.querySelector('#course-q-id')?.textContent;
            let t = document.querySelector('#question-explanation-code');
            t.setAttribute("contenteditable", false);
            trivia[course_id][course_q_id - 1]['explanation'] = t.textContent;
            t.innerHTML = markDown(t.textContent);
          }} disabled>Previzualizare</button>
          <button class='submit-btn submit' on:click|preventDefault={async () =>
          {
            let course_id = document.querySelector('#course-id')?.textContent;
            let course_q_id = document.querySelector('#course-q-id')?.textContent;
            let exp = document.querySelector("#content-control-buttons .markdown").disabled ? document.querySelector('#question-explanation-code').textContent : trivia[course_id][course_q_id - 1]['explanation'];
            document.querySelector("#content-control-buttons .markdown").disabled = false;
            document.querySelector("#content-control-buttons .previz").disabled = true;
            let data = {"course": course_id, "id": course_q_id, "explanation": exp, "q": '', "a": []}
            let out = await f(data);
            if (out["DATA"]["phpmessage"] != "No errors")
              alert(`Explicația pentru ${course_id}, intrebarea ${course_q_id}, nu a fost salvata. Eroare la salvarea JSON-ului: ${out["DATA"]["phpmessage"]}`)
            else trivia[course_id][course_q_id - 1]['explanation'] = exp;
            document.querySelector('#question-proof-container').style.display = "none"
          }}>Salvare</button>
        </article>
      </footer>
    </section>
  </section>
{/if}

<div id="course_{course.replaceAll("+", "p")}_{id}" class="question-wrapper">
  <section id="context-menu-holder" style='display: grid;position: fixed;top: 0'>
    <button class="submit-btn" on:click|preventDefault={() => issueRightClick(course, id, "expl")}>Explicație</button>
    <button class="submit-btn" on:click|preventDefault={() => issueRightClick(course, id, "q")}>Enunț</button>
    {#each answers as answer2, i2}
      <button class="submit-btn" on:click|preventDefault={() => issueRightClick(course, id, i2)}>Editare răspuns {i2 + 1}</button>
    {/each}
  </section>
  <div class="question-title" style='display:inline-flex;'>
    <div class='edit-buttons'>
      <button class='submit-btn save-btn'>✓</button>
      <button class='submit-btn cancel-btn'>X</button>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="q-index" 
    on:contextmenu|preventDefault={() =>
    {
      document.querySelector("#question-proof-container").style.display = "block";
      document.querySelector('#course-id').textContent = course
      document.querySelector('#course-q-id').textContent = id
      document.querySelector("#question-explanation-code").setAttribute("contenteditable", false)
      document.querySelector("#question-explanation-code").innerHTML = markDown(trivia[course][id - 1]['explanation'] ? trivia[course][id - 1]['explanation'] : '');
    }}
    on:click|preventDefault={() => 
    {
      localStorage.setItem("userSelections", JSON.stringify($userQuizSelections));
      showThisAnswer = true
    }}>{index + 1}.</p>
    <span style='display:inline-block;cursor: pointer; padding: 0 10px 0px 10px;height:10px;' on:click|preventDefault={(e) =>
    {
      document.querySelector(`#course_${course}_${id} #context-menu-holder`).style.visibility = 'visible'
      document.querySelector(`#course_${course}_${id} #context-menu-holder`).setAttribute("qid", id)
      document.querySelector(`#course_${course}_${id} #context-menu-holder`).setAttribute("cid", course)
    }}>⁞</span>
    <pre
    on:keydown={event => 
    {
      if (event.key === 'Enter') 
      {
        event.preventDefault()
        document.execCommand('insertLineBreak')
      }
      if (event.key == 'Tab' && event.shiftKey) 
      {
        event.preventDefault();
        document.execCommand("outdent");
      } 
      else if (event.key == 'Tab') 
      {
        event.preventDefault();
        document.execCommand("indent");
      }
    }}
    on:contextmenu|preventDefault=
    {
      (e) => 
      {
        let cssID = `#course_${course.replaceAll("+", "p")}_${id}`
        let target = document.querySelector(cssID), pre = target.querySelector("pre"), edits = target.querySelector(".edit-buttons");
        let filter = trivia[course].filter(obj =>  {return obj.questionNumber === id })[0];
        let lH = JSON.parse(localStorage.getItem("history"))
        unmodifiedQuestion = filter.question
        unmodifiedAnswers = filter.answers
        pre.textContent = unmodifiedQuestion
        pre.setAttribute("contenteditable", true)
        pre.focus()
        edits.style = "visibility:visible;"
        console.log(`editing question ${id}`)
        let saveQ = async (e) => 
        {
          e.preventDefault();
          edits.style = "visibility:hidden"
          pre.setAttribute("contenteditable", false)
          let data = {"course": course, "id": id, "q": modifiedQuestion, "a": modifiedAnswers}
          if (modifiedQuestion) 
          {
            pre.innerHTML = markDown(modifiedQuestion);
            let out = await f(data);
            if (out["DATA"]["phpmessage"] != "No errors")
              alert(`Modificarea pentru ${course}, intrebarea ${id}, nu a fost salvata. Eroare la salvarea JSON-ului: ${out["DATA"]["phpmessage"]}`)
            else 
            {
              trivia[course][id - 1]['question'] = modifiedQuestion;
              lH.forEach((value, key) => 
              {
                if (value.id === id && value.course === course) lH[key]['question'] = modifiedQuestion
              })
              localStorage.setItem("history", JSON.stringify(lH))
            }
          }
          modifiedAnswers = []
          modifiedQuestion = ''
          console.log("here save", id, course)
          edits.querySelector(`.save-btn`).removeEventListener("click", saveQ)
          edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelQ)
        },
        cancelQ = (e) => 
        {
          e.preventDefault();
          edits.style = "visibility:hidden"
          pre.innerHTML = markDown(unmodifiedQuestion);
          pre.setAttribute("contenteditable", false)
          modifiedAnswers = []
          modifiedQuestion = ''
          console.log("here cancel", unmodifiedQuestion)
          edits.querySelector(`.save-btn`).removeEventListener("click", saveQ)
          edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelQ)
        }
        edits.querySelector(`.save-btn`).removeEventListener("click", saveQ)
        edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelQ)
        edits.querySelector(`.save-btn`).addEventListener("click", saveQ, { once: true })
        edits.querySelector(`.cancel-btn`).addEventListener("click", cancelQ, { once: true })
        console.log(`This is from ${course}, question ${id}`, trivia);
      }
    } 
    on:input={(e) => 
    {
      const newText = e.target.textContent
      modifiedQuestion = newText;
    }}>{@html compiledQuestion}</pre></div>
  
  <div class="answer-wrapper">
    {#each answers as answer, i}
      <div class="{type} {localStorage.getItem(`errors${index}`) ? JSON.parse(localStorage.getItem(`errors${index}`))[i] : errors[i]}">
        <label>
        <input
            type={type}
            on:input={e => handleInput(e, i, `answers${index}`)}
            name="answers{index}"
            value={answer}
            disabled={showAnswers || showThisAnswer}
            checked={localStorage.getItem(`checked${index}`) ? JSON.parse(localStorage.getItem(`checked${index}`))[i] : ""}
          />
          <span on:contextmenu|preventDefault=
          {
            (e) =>
            {
              let cssID = `#course_${course.replaceAll("+", "p")}_${id} .answer-wrapper`
              let target = document.querySelector(cssID), pre = target.querySelectorAll("pre[qid]")[i], edits = document.querySelector(`#course_${course.replaceAll("+", "p")}_${id} .edit-buttons`);
              let filter = trivia[course].filter(obj =>  {return obj.questionNumber === id})[0];
              let lH = JSON.parse(localStorage.getItem("history"))
              unmodifiedQuestion = filter.question
              unmodifiedAnswers = filter.answers
              pre.setAttribute("contenteditable", true)
              pre.textContent = unmodifiedAnswers[i];
              pre.focus()
              edits.style = "visibility:visible;"
              console.log(`editing question ${id} answer ${i}`)
              let saveA = async (e, ii2 = i) => 
              {
                e.preventDefault();
                edits.style = "visibility:hidden"
                console.log(`saved A ${i} from q ${id}`, pre)
                let data = {"course": course, "id": id, "q": modifiedQuestion, "a": modifiedAnswers}
                if (modifiedAnswers[i]) 
                {
                  pre.innerHTML = markDown(modifiedAnswers[i])
                  let out = await f(data);
                  if (out["DATA"]["phpmessage"] != "No errors")
                    alert(`Modificarea pentru ${course}, intrebarea ${id}, raspunsul ${i} nu a fost salvata. Eroare la salvarea JSON-ului: ${out["DATA"]["phpmessage"]}`)
                  else 
                  {
                    trivia[course][id - 1]['answers'][i] = out['DATA']['toBeWrittenToJSON']['answers'][i]
                    lH.forEach((value, key) => 
                    {
                      if (value.id === id && value.course === course) lH[key]['answers'][i] = out['DATA']['toBeWrittenToJSON']['answers'][i]
                    })
                    localStorage.setItem("history", JSON.stringify(lH))
                  }
                };
                pre.setAttribute("contenteditable", false)
                modifiedAnswers = []
                modifiedQuestion = ''
                edits.querySelector(`.save-btn`).removeEventListener("click", saveA)
                edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelA)
              },
              cancelA = (e) => 
              {
                e.preventDefault();
                edits.style = "visibility:hidden"
                console.log(`canceled A ${i} from q ${id}`, pre)
                pre.innerHTML = markDown(unmodifiedAnswers[i]);
                pre.setAttribute("contenteditable", false)
                modifiedAnswers = []
                modifiedQuestion = ''
                edits.querySelector(`.save-btn`).removeEventListener("click", saveA)
                edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelA)
              } 
              edits.querySelector(`.save-btn`).removeEventListener("click", saveA)
              edits.querySelector(`.cancel-btn`).removeEventListener("click", cancelA)
              edits.querySelector(`.save-btn`).addEventListener("click", saveA, { once: true })
              edits.querySelector(`.cancel-btn`).addEventListener("click", cancelA, { once: true })
            }
          }
          on:keydown={event => 
          {
            if (event.key === 'Enter') 
            {
              event.preventDefault()
              document.execCommand('insertLineBreak')
            }
            if (event.key == 'Tab' && event.shiftKey) 
            {
              event.preventDefault();
              document.execCommand("outdent");
            } 
            else if (event.key == 'Tab') 
            {
              event.preventDefault();
              document.execCommand("indent");
            }
          }}
          on:input|preventDefault={(e) => 
          {
            const target = e.target, newText = target.textContent
            modifiedAnswers[i] = newText;
          }}><pre qid={i}>{@html markDown(answer)}</pre></span></label></div>
    {/each}</div></div>

<style lang="scss">
  .q-index:hover 
  {
    color: green;
    cursor: pointer;
  }
  pre {
    margin: 0!important;
    display: inline-block;
    padding-left: 3px;
  }
  .wrong {
    color: red;
    background: pink;
  }
  .correct {
    color: green;
    background: #abe388;
  }
  
  label {
    display: flex;
    font-size: 14px;
    span {
      margin-top: 2px;
      margin-left: 8px;
    }
  }
  .required {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;

    &::before {
      content: "*";
      color: #ae1515;
      position: absolute;
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
    }
  }
  .question-title {
    position: relative;
    margin-left: 20px;

    .q-index {
      position: absolute;
      right: 100%;
      top: 0;
      padding-right: 3px;
    }
  }

  .answer-wrapper {
    display: flex;
    flex-direction: column;
    // row-gap: 20px;
    margin-left: 20px;
    // margin-top: 20px;

    pre {
      margin: 0px!important;
      font-size: 14px;
    }
  }

  .question-wrapper {
    padding: 35px 20px;
  }

  input {
    line-height: normal;
  }

  input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  input[type="radio"] {
    line-height: normal;
    margin: 4px 0 0;
    margin-top: 1px\9;
  }

  input[type="radio"]:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  .radio {
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  fieldset[disabled] .radio label {
    cursor: not-allowed;
  }

  .radio label {
    cursor: pointer;
    font-weight: 400;
    margin-bottom: 0;
    min-height: 20px;
    padding-left: 20px;
  }

  .radio input[type="radio"] {
    margin-left: -20px;
    margin-top: 4px\9;
  }

  .radio + .radio {
    margin-top: -5px;
  }

  .radio input[type="radio"] {
    bottom: 0;
    height: 18px;
    outline-offset: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .radio input[type="radio"]:focus {
    outline: 1px dashed;
  }
  .save-btn {background: #03787c; border: 0px solid};
  .save-btn:hover {background: #014446};
  .cancel-btn {border: 0px;background: #ff4237}
  .cancel-btn:hover {background: #64221d}
  .edit-buttons {display: inline-flex;}
  .edit-buttons, #context-menu-holder {z-index: 1;visibility: hidden; position: absolute;left: 0px;top: -67px;}
  #context-menu-holder {top: -34px;}
  #question-explanation-code
  {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 20px;
  }
  .content-text
  {
    width: 100%; 
    height: 100%;
    padding: 20px;
    display: inline-block;
  }
  #content-title
  {
    position: absolute;
    top: 0px;
    left: 0px;
    padding-left: 10px;
  }
  #content-title-bar-controls
  {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .content footer
  {
    position: absolute;
    bottom: 0px;
  }
  .content 
  {
    padding: 20px 0px 20px 0px;
    width: 80%;
    height: 80%;
    background-color: white;
    position: absolute; 
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
  #question-proof-container
  {
    z-index: 1;
    background: rgba(0,0,0,0.5);
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
  }
</style>
