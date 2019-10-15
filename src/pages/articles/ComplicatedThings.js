import React from 'react';
import Background from '../../components/Background';
import Article from '../../components/Article';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import './article.scss';

const ComplicatedThings = () => {
  return (
    <Background>
      <NavBar />
      <Header />
      <Article>
        <div className="article-wrapper">
          <div className="article-container">
            <h1 className="title">Why We Complicate Things</h1>
            <p className="date">August 22, 2019</p>
            <p className="text">
              Paul Graham mentions one of the{' '}
              <a href="http://www.paulgraham.com/newthings.html">
                principles to making new things
              </a>{' '}
              is to find a simple solution. For startups, the simple solution
              is: "don't run out of money". For writers, the simple solution is:
              "write like you talk". For programmers, the simple solution is:
              "write readable code". Why, then, do so many people try to start
              with complex solutions when the simple one is available (and
              correct)?
            </p>
            <p>
              It seems like our natural tendency to hunt for silver bullets to
              our problems. Silver bullets come in the form of layers of complex
              fixes. Once a person finds out that there's no singular fix to
              their problems, they try to synthesize multiple fixes to create a
              patch. There are two reasons people complicate things: lack of
              basic skill and status games.
            </p>
            <p>
              Lack of basic skill is the reason most people come up with complex
              solutions. Without basic skills, people try top-layer
              consequences, rather than solving low-level issues. I've seen this
              a lot in music. Less-skilled musicians often try get through hard
              Hanon exercises by playing faster. The best solution it is to play
              slow and with a metronome. But playing slow requires an agonizing
              amount of focus. That is, until it becomes intuitive. Richard
              Feynman even captured the essence of true knowledge as being able
              to explain complex topics in a way a child could understand.
              Without that basic understanding and skill, the only available
              option is to string things together.
            </p>
            <p>
              Status games are different. People playing status games tend to
              have skill, lots of it, but know that simple solutions don't seem
              as impressive. This can start as a seemingly innocent question.
              "If X was working on this problem, what would they do?" Trying to
              solve a problem like X stymies your own creativity, but it also
              subtly enlists in a status game that requires you to compete for
              approval from X. This is the inherent danger of peer review
              systems, like seen in academics and science. It forces people to
              win clout, rather than built the best solution. Status games are
              zero-sum. To maintain status, you must be better than someone
              else; to win, someone must lose.
            </p>
            <p>
              When you start building complex solutions, it is hard to correct
              course because of sunk costs. Whether an individual lacks basic
              skills or is playing status games, once they've created something
              that complicated, the cost cannot be recovered and they are
              further incentivized to continue down the same path. Take for
              example a programmer that hacks a program together. When a bug in
              the software appears, the only solutions are to create another
              patch or rewrite the entire software. Given the amount of time
              already invested and the amount of time necessary to rewrite the
              software, the programmer will likely choose to continue patch
              bugs. This cycle continues until someone rewrites the code or the
              product is beyond repair.
            </p>
            <p>
              The upfront cost for a simple approach is more expensive than
              trying to duct-tape things together. The time and energy necessary
              to develop are taxing, so people are sometimes motivated to cut
              corners. Common startup advice like "launch quickly" can be partly
              blamed here. Problems from corner-cutting grow as production
              grows. Similarly, simple solutions have increasing marginal
              returns. As the amount of production increases, so does the
              per-unit returns. They are orders of magnitude better. There are
              even emotional benefits. A person that focuses on simplicity never
              has to worry about the impending beast that will soon devour them
              due to unnecessary complication.
            </p>
            <p>
              <a href="https://twitter.com/naval/status/752796426208325632?lang=en">
                Naval Ravikant said
              </a>
              , "It is the mark of charlatan to explain a simple concept in a
              complex way". To extend that aphorism, it's probably the mark of a
              charlatan to provide a complex solution when a simple one exists.
              Though the word charlatan seems a bit strong, it is the eventual
              consequence of a person that does not scrutinize their process for
              arriving to a solution.
            </p>
            <p>
              To know if a solution is unnecessarily complex, break it down into
              small components. Is each individual component independently
              legible? If not, go back to the drawing board. This isn't always
              the case, but most often it is. In either case, it's likely that
              the first try isn't the simplest solution. Find the easiest
              solution first then try to make it simpler.
            </p>
          </div>
        </div>
      </Article>
    </Background>
  );
};

export default ComplicatedThings;
