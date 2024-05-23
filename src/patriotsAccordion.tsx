import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function PatriotsAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex flex-col bolder text-black">
            When will Drake Maye start for the Patriots?
            <img src="https://a.espncdn.com/photo/2024/0518/r1334566_1296x518_5-2.jpg"></img>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <p>
            When NFL executive vice president of media distribution Hans
            Schroeder analyzed the league's 2024 schedule in a conference call
            with reporters last week, he noted the top three picks in the NFL
            draft being showcased.
          </p>
          <p>
            "Some of the new faces -- Caleb Williams, Jayden Daniels, Drake Maye
            -- you'll see them in the first few weeks of the season as you look
            at the schedule with appearances for Chicago, Washington and New
            England all in national windows," Schroeder said. "It's one of the
            benefits of having moved the schedule release to after the draft."
          </p>
          <p>
            Schroeder's remarks highlight how the NFL is always anxious to
            promote its next generation of hopeful stars. Williams and the Bears
            visit the Texans on Sunday night in Week 2, Maye and the Patriots
            travel to face the Jets on Thursday night in Week 3, and Daniels and
            the Commanders visit the Bengals on Monday night in Week 3.
          </p>
          <p>This assumes, of course, that Maye is playing at all.</p>
          <p>
            First-year Patriots head coach Jerod Mayo has been clear about his
            quarterback plans: He subscribes to Bill Belichick's philosophy that
            not many rookies are ready to play immediately, saying it will be an
            open competition with veteran Jacoby Brissett (48 career starts),
            Maye, 2022 fourth-round pick Bailey Zappe and 2024 sixth-rounder Joe
            Milton III to determine the best signal-caller.
          </p>
          <p>
            Specific to Maye, he said the night the Patriots drafted him: "They
            try to put timetables on it, but you just never know when that time
            is going to be."
          </p>
          <p>
            The Bears already determined that the time is now for Williams,
            having named him the Day 1 starter. Many project the Commanders will
            ultimately do the same with the 23-year-old Daniels, in part because
            he is well-seasoned entering the NFL with 55 career starts in
            college. Meanwhile, the 21-year-old Maye started 26 games at North
            Carolina and thus some believe he will benefit from watching behind
            Brissett, while others -- such as ESPN analyst and former NFL
            quarterback Tim Hasselbeck -- subscribe to the philosophy that the
            best way for a quarterback to learn is to play.
          </p>
          <p>
            Mayo's decision of when to insert Maye into the lineup, which is the
            primary intrigue surrounding a team that otherwise had no prime-time
            appeal to the league, will be among the most important of his young
            coaching career.
          </p>
          <p>
            The hope that Maye provides the Patriots has similarities to 1993
            when quarterback Drew Bledsoe -- who like Maye was among the
            youngest prospects at the position that year -- was selected No. 1
            overall in the NFL draft. Then coach Bill Parcells notably said at
            the time: "I promise you I will not throw him to the wolves."
          </p>
          <p>
            Bledsoe, of course, was thrown to the wolves. The team went 5-11,
            but in winning the final four games showed an arc of improvement to
            indicate better days were ahead for the franchise. The Patriots went
            10-6 the following year and played in the Super Bowl in the 1996
            season.
          </p>
          <p>
            Bledsoe, in an interview with ESPN.com, was asked if he sees a link
            between those days and the current Patriots setup.
          </p>
          <p>
            "It's different in that the Patriots never really had a ton of
            success [when I got there]. They went to the one Super Bowl [in
            1985], but other than that had not been consistently relevant.
            Whereas it wasn't that long ago that they were running the world, so
            there still is a lingering level of expectation that exists from all
            that success. That part is a little bit different. But shoot, they
            earned the right to pick where they picked; it wasn't much to look
            at last year, that's for sure," he said.
          </p>
          <p>
            "You have the new coaching staff and new rookie quarterback coming
            in, so there are also some obvious parallels for sure. I don't think
            it's crazy at all. Now it will be super interesting to see where it
            goes from here, whether they can rebuild that championship culture
            and start to rise again."
          </p>
          <p>
            Bledsoe said offensive coordinator Alex Van Pelt, who was his backup
            with the Bills in 2002 and 2003, will be a key asset for Maye
            because of his "football knowledge and demeanor."
          </p>
          <p>
            As for his advice for Maye, Bledsoe said: "He's going to have to
            have thick skin and be patient. It's not going to happen
            immediately. He's going to have to be very mentally and emotionally
            tough to get through some of the hard times -- if they even start
            him right away. You have Jacoby there; they're not in a situation
            where they have to throw him on the field right away. So I'll be
            curious to see what they do."
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex flex-col bolder text-black">
            Jacoby Brissett on Drake Maye
            <img src="https://primary-cdn-shortstop.espn.net/8ef83d6e-8ec4-460a-9152-961bccfc86d9.png"></img>
          </div>
        </AccordionHeader>
        <AccordionBody>
          "He has a lot of talent. He can make all the throws. He wants to learn
          football. He wants to get better. That's what you want, in not only
          your quarterback, but anybody on the team. "I'm excited to work with
          him. I remember when I was following Tom [Brady] around; anywhere I
          could learn, and he's already texting me about plays and ‘how do I
          think about this' and cadence — all the little nuances of being in
          this position at this level."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex flex-col bolder text-black">
            Patriots sign David Andrews to 1 year extension
            <img src="https://a.espncdn.com/photo/2020/0424/r692328_2_1296x518_5-2.jpg"></img>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <p>
            The New England Patriots signed starting center David Andrews, a
            seven-time team captain, to a one-year contract extension that
            includes $8 million fully guaranteed, league sources told ESPN on
            Thursday.
          </p>
          <p>
            Andrews was entering the final year of his contract and scheduled to
            earn a base salary of $4.5 million. Under the new deal, Andrews will
            earn a base value of $12 million over the next two seasons, with a
            maximum value of $13 million, a source told ESPN's Field Yates.
          </p>
          <p>
            Andrews, 31, is one of the oldest starting centers in the NFL and
            recognized by teammates as a pillar in the locker room.
          </p>
          <p>
            "He's a staple in the Patriot Way. When I think about the culture,
            he is that," veteran quarterback Jacoby Brissett said Thursday,
            shortly after news of the extension broke. "He's a worker and a guy
            that has fought throughout his career to get to where he is now. I
            think a lot of players on our team can look up to him."
          </p>
          <p>
            Andrews made the roster in 2015 as an undrafted free agent out of
            the University of Georgia, as former New England coach Bill
            Belichick had personally worked him out before the draft.
          </p>
          <p>
            He was part of two Super Bowl championship teams and has played in
            120 career regular-season games, with 118 starts. Andrews has also
            appeared in 12 postseason games (10 starts).
          </p>
          <p>
            After the Patriots' 4-13 season in 2023, in which Andrews was often
            the first member of the organization to answer questions from
            reporters after gut-wrenching losses, he took time to assess his
            future.
          </p>
          <p>
            "It was a long year and a lot to take in, with the new change [in
            coaches from Belichick to Jerod Mayo]. It's not about loving the
            game; I'll be 65 and still loving the game. It was just making sure
            I can still do all the things I need to do to prepare and be ready
            to go on Sunday," Andrews said last week. "I got away, spent time
            with my family, and that desire was still down in there."
          </p>
          <p>
            The Patriots, who selected North Carolina quarterback Drake Maye
            third overall in the NFL draft, are in the midst of a rebuilding
            phase -- something that Andrews noted also intrigued him.
          </p>
          <p>
            "I was very excited to be part of something new, a change, and
            hopefully trying to figure it out and start something good," he
            said.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}
