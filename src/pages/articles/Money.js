import React from 'react';
import Background from '../../components/Background';
import Article from '../../components/Article';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import './styles/article.scss';

const Money = () => {
  return (
    <Background>
      <NavBar />
      <Header />
      <Article>
        <div className="article-wrapper">
          <div className="article-container">
            <h1 className="title">What You Should Know About Money</h1>
            <p className="date">August 2, 2019</p>
            <p className="text">
              Money is a real hush topic. Like most people I know, I grew up not
              being taught about money. In fact, conversations about money were
              actively avoided. Avoidance created obscurity; obscurity prevents
              focus and accomplishment. Things changed when I got a wealthy
              mentor. Here are the three components of money everyone should
              know: control your income, explore the world, be open and curious.
            </p>
            <p>
              There are two ways to create income: earn it or make it. You
              should make money, not earn it. Money is earned by trading your
              time for pay. This can be in the form of a salary or hourly pay.
              Most people make the mistake of believing a salary is better than
              hourly pay. There are marginal benefits to receiving a salary, but
              it is still trading time for a capped amount of money. Let's take
              an accountant at a corporate firm for example. This accountant is
              paid an annual salary to ensure that the firm's financial records
              are compliant with laws and the business is run efficiently. No
              matter how much money they save the firm, their salary is set.
            </p>
            <p>
              Money is made by delivering outcomes for pay. This is usually in
              the form of commissions. Many people shy away from
              commission-based pay, due to irregularity, but it is the only way
              to control your income. When you're paid by the outcomes you
              produce, there is no cap on your income. Let's take a salesperson
              for example. This person sells a $25,000 product and receives a
              20% commission. If they want to make $250,000/yr, they need to
              sell roughly 4 products per month. If they want to make $500,000
              in income, they need to sell double. The salesperson just needs to
              decide on the income they want to take home for the year and do
              the math on the type of outcomes they need to produce.
            </p>
            <p>
              Making money gives you direct control on the amount of income you
              receive. It is not easy, but it is simple.
            </p>
            <p>
              To properly grasp making money and its benefits, you must explore
              the world. People attract what they believe. To create higher
              quality beliefs, you must know what exists. Exploring the world
              can mean traveling outside of your city, talking to people who
              have what you want, visiting places you want to live, etc. The
              exposure you get will refine your taste.
            </p>
            <p>
              Dreams and desires of any size require money. But how do you talk
              about money if it's a bad thing?
            </p>
            <p>
              Money--more specifically, wealth creation--is not a zero-sum game.
              A successful business owner is not taking all the money from
              working-class people. Without one the other cannot exist.
              Understanding this opens up the door for conversations about
              money. Questions to ask yourself and people close to you: "How
              much money is enough?", "How do you budget?", "How much money do
              you have?", "How much money do you make?".
            </p>
            <p>
              Asking someone how much they make or how much money they have is
              culturally taboo. While it's not absolutely essential to know, it
              does give you a starting point for assessing where you are and
              where you want to be. This can be helpful when someone close to
              youhas a lifestyle similar to the one you want. To increase trust
              and willingness to answer, you'll want to answer those questions
              also.
            </p>
            <p>
              It's not every person's goal to become wealthy. But when you know
              how money works, you can use it to achieve whatever financial
              goals you do have.
            </p>
          </div>
        </div>
      </Article>
    </Background>
  );
};

export default Money;
