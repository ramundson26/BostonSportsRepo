import React from "react";

import { useState } from "react";

import { Button } from "@material-tailwind/react";

import { PatriotsAccordion } from "./patriotsAccordion";

import PatriotsDraft from "./patriotsDraft";

import PatriotsStandings from "./patriotsStandings";

import PatriotsSchedule from "./patriotsSchedule";

function App() {
  const [whichPage, setWhichPage] = useState(0);

  return (
    <div className="h-lvh w-auto">
      <div>
        {whichPage === 0 ? (
          <div className=" grid place-content-center ml-4">
            <div>Main Page</div>
            <Button onClick={() => setWhichPage(1)}>Page 1</Button>
          </div>
        ) : whichPage === 1 ? (
          <>
            <div className=" flex flex-row underline-offset-1">
              <span>
                <img
                  className="w-[200px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAACZCAMAAAB631M/AAAA8FBMVEX///8AIkTAAB2wt7zGDDAAIEO9AAAAIUQAHkIAADW3vsIAADAAADQAAC0AG0AAADIAFz4ADzoAEzwACDgAACu+AA6+AAnEAB/q7O4ADTr29/j78fIAACe/ABjFACfFACvN0NXW2d3TcXinrrTg4uWMk55qc4O/w8nw0tTkrbFOWm7s7vB5gY9EUWcpO1Z1foxfaXoaME7ipqremZ7rwsXXgYaUmqT13+HUdnzWbHny1dgtPlifp67PYWnMUFoAACE4R1/KRVDEIjLejZfLNkzour7FLDrLS1X46OrKKELEJzbTXm3OQ1bjoKjmrbQAAA6GZ6f/AAAOj0lEQVR4nO2d+1uiTBvHNUM5CHLSxNIwRQtPUIkd2Na27XnaZ3d7////5p0ZTwgogwfI4vPDXletGX675z7NPZBKJSQkJCQkJCTESKXSKZebM8qVuK/nYOg01XbD0gYtvdcnqQLDsizjgGUL/FgfaI12M9HUh0693dAGel8BshUoShFEnudIIp1Le8gRJC8qUp5hld7AbjfjvvQPQlNtaEafYpm8pIg8kC4EBCcqeYZ5HNjqF7bOSj2jGaYMBBR4Mox8HgslRakgmy1bjfsjRU65bRlpmaG2VHAJggdqjrt0Oe4PFxHltqYX2LzAh1rDuHAixZKtxqd3m7TBs8AM9yHhAgKIybUyn9QyR1ffwL82sxc79BfT7LY/WQQaXX/LAi5BhGai0RFBinm2Z3+WVf52BUUsHh0dZW/Al1JEFjmDUxiy245bhK25HdYmIkKKT+A7xp79ow+EWGCNzOEu8rfrp2y2VD1akAXftaXIhQTkeErWAxd5p92io1AmDJcvPxamOBcSOMl6lE5yCV5iKMNaUU921MbAlKnvnYh1Ws/thcsUZ0JCJ8n41M7RiSmAetI0ulaDbqtqva6q7YyttcYSW5BEMk2acUu3oPL6zWuKTiepczEKCcmRvChIVL4AycPuCD+7JKEbt3xT1qk4c5KWEKuMa8l/jPD++rRWRSjkQyqlFuKWazXyBwjtAbY4FfIaWO1Z3HKthOvFrSKMLoEqQicJq8T+7vo9O0axYlXx8g5PRUgJvL4rxi3YKph6fCqOXo6yJUwV4doepVI0FbdgKyCkuFQ8vf4nm/XJF9cIeZVKldm4hArIF/hWPDLCIB1KRUDxAvxgjkDbVyQHIUkiogydNBvK2hdQmRhUvMQMLy6qR+BnW2esXODM/rjX640fzXRBhvteIrffvlBObnbWrwU58vpw9FLdQMVqMZvN1k7B2m66r7hTb9tdXWTzwv7KHqYR0MMj+9GqCB2jXyG9XsQScAPfri/Xv3W5rY1laj99NgE6wLU9PEGLRL8pt99CO8YqMMR/hq9veL+g0m4pe5CSQ+2IteVpQd2jbss8DMM6Rria/725DFN5Vcpqa0slSUpyb1EyyJu082t+itmTam7ebmphMsaJiE83Aat5RgXOq7T0PgUDz7Y6juu2IbKUuCih5Ek3Yl3mxRt7FG/B1XOoJV1FIj7gvHOzbbXGeRi3BXFH0wIirJnLma4pT8WkZu5vTbSRGvtTbwYspfFVhIHlGcsS641Bn2EoRdx1rBam3YdOG4kpzpsR+mpjZ/e9DT4aFkM4RrCea8PbYJ9YaWs9lpHEPTUwFH3+m6CY8+vRVqbke26Ov938wM91oCl+u8KJzvWxXBC4fVY0DiWdrI42+0x+KmEcIzDFH0OM9Tx6vwd+cf89Sck3dnRW/uL9JT+vITJGoOLTdbApvr3fnxRPYJt8z+UghPJtQehy3ted5PaU/OB2ao9QgC7d3Qa/5cPLr9JJ7fj4+OQvKLcj6EnmB36XUWkvgrmDvSQ/ITq1QMX/XjCynMvhefHk/BhRe0qlMlH0JJlVbq9DIzGdq2L3yc8lCNKYeTdY0M8YCxoURLVi7XhBETjJSHqSrL36osqZlsAI83gn7zb5QSriOUYYoV9Pg9/y7eV4SUVAFcQkMZJZqrP1EyhNi5wqudPk53JYwlQR1y2mTq9/lmYrekHtBTjJSGaphLWer66Zsz/n7pIfNGWCu6B/4LhF8J6/s14VAee/UqlGFE6S5NapyDHCfFnsJvk5vcLZk56p+C+OW4SO8aRa81ERUjqNxkmerdoVrGtph4og+WG3V3F084ypIlzQF69YHbHTv79Kq1SECdBrJE6y4L9N3bRMVlj+7bx/HYTP7fAIL+uG1d9PvG4OSOV/+zjGJSd5H4WTFH3V6aRZxZORb5X8jP6650DXrOejO5wIDbm8q65c0gslgZN0DJzmSI7nRQTP7aqNQZK+1+c7McNuOmd++npRxFrQaMMKrxEBGXlzHV+Ko4mTJHiBKjAyY/aM1qDb7Q5ahv5IyUyB2noXLHe2Qhyf4z2bJT+nr0M4TBtsimjD6uJqhPvGb+sd45KTBFWiRBVk09AyqveIa1ltaHqeobY50sQubVI7foXPfGb45OcNiRi8nqGG2ecX3A2rFMwY/wQ4RufKLv5JpaygY5hNVHtsuNIlR6Fdtsff1flXmncDLFzy83B9cRQsIlrL2echviGm4Ng9voq1k9IxtsOFOTOzSX+DH8/eAagoS1z6bK6Vt8zH7/yMXofP2fXLuVpECmaf765v8e0QvfmNX/WySsTa/Xu4t0/VB0zoszmENDH2ptWHKkJkdfZ+ntMAWJ2fhyukob8hVoF8JaRftvZ0d/P6gGsocy6Hx3gqnteqpeP79zB2Pqdic1Q4KZFqwJodmQ4xV1J2v3p98nN6efXyVEUiFSeUANklqv88XQxvrm5HoQWEvL3/LlZrwSqe106K2Z8v2MvZD7ofRknFSqmwAlzyr4Q8rXPG7mizpvPzdnvzMkTc3V1MuLuDX77cXF9fvd7ePozetvlcMPQfT9q0QRpWs8f315iZvINKs97ONCxNG7RASqQboc5CmJrICB7lZ0p2XdEmtjMhQMRfpUBThHZY+nX/9zLcH6xSp62ubhZYppCnJEWAN7YAcOHSSv/6k2CRku5oE+3Mz5SH6/vjABHPa8AMS7Wn4XtIO2y2NYNk4TY3T+5ng5FAs83uA7oRzvwgHt6HP0vFNcsZ2OAJiF6/fr+8hzTDVEq1DAkeiN9zJ2OipOvsWWEfavkBw9bv4yzQ0GuI58D+kH6l0vmfe6BgyNwG0rR1tqDsW8OZkk13tIlo5gfq+H5z9/vncTFbKqHoX51nAdmTX39+37/8fb8NnzhNaXdFRuGjO54IbXL5WAUVwcyPi9PTt9HoATIagai/VdhH0Aabj2bzxqEk22wsnXSOfuB5xwAVqQhNcaGkZDktMuqB5x3TjklFxNLKjiX52RG0weRjU9FN1MnPruhk4rRFHyJLfnaJasFDCx9IxQiTn11RUS2YLcZ99wAPsZz22ph2i/rfd5/Nuw/AwSU/zbZlmHLBc2wjZrjHuIXZiIpqGyQoqT+OacZ81H0rOu1uf8XY7MZwoqAoEkBRhFCHQ+M86r4LJmOzO5q14BRS71q23QDYljYwTOx93PiOuu+QcsMoFLavtHlJt2iazswBXzQGJt49ccSYjrrvHLWb23jnGkFQRsMh4kLM7vJfiPQ7i5ITv3+M+/zsBLhz7d1fwYQ3ba+MwCLhXs/CcYC139M9TfecIHcPLfcJoK6RG00BpMWej4wgzUL3MJ+9iKB0Gyz38bLh5wT2s8mIUAcMFbrqEXWPjrTVd6WqBG/BV9HLY4TAGj/ATaf2Q6Ynh1vi3Niro0G5PG5Omi5+58iP+IllhDQ1KR/CLHnvsh57PITQnaq9aIvz8uAzLuplMmNWxOwOiV23QdK6R0fCnL2InpoqJxuf9LbaLuotWcFa4Yo7YNOa966z4mAuZA8qSbK9A69lQlDRKKyZKWngUtLncRlUYy4zjDbkWI3700WLTeYx0nTh0ZmM056b1+XSZH/xAg38t3jAGzQbkjELwVKSksNP0mlKmkEhBJJwGC2MNh/pHrqRQWNImVPGDqNszMigihvhsFiYSB5cH3cn4EjJeYP3ClBt80Fuohs5mXRw2JF6GSwpaXg/r0Pexd4OW1KC8kqO17CUhNEm/rvoxocmBzU0CErHEdKGt6rJx/1xYqTSOgsqHPmcFWyUNKyZmM/yUJaNqI+9jxMieEER5js/BGUEKomiDfXhnmoRLRnRtXcgmi3LtgZjabZZwZtBRvnFo82MruxY3zlqgFJE8E/XnA4eEFQrQElY+nDbnsw+fJrjxbMJqEWcpmmtP+1yiGZjrZAo2lBxf44PQGO2IeFKwukuN2l/C+42hgt4LmTvN+U7BCoGi2yP05e3DumMLsFsk/PZw3G+rP+FaxsXbQUZJae4bI/W4MHPnLBeSAO4WeGAh1R2ydQoc4IrSNM27EYq1lohYbQ5uIHIvdGWxGnmuCxTgyPS/PrAbSnwkXRxf4APQ0WfnIHj08tGaVNp8tF37GIO3Itgv2QnzZ/MJKd0ZY50V0pTPut5/GhC4NwK/Kkk2jjoPE5OuIr9pc0GnRc0z3KmOJIgCcgkd0pqmyW0M6QLqThbaLQpekpuzj11wB/mkO7eUKcPIljqVjQor5MENaRTSspMlvYyld58eS9MUpN9Yo1mzs8BiMyae3N+WabLm+MW0ZvW/TJJWntESnJnrU8987MxamEavR21t+0j5CQVJ5jx15myCEmnL3gdpZ+QAz5NpA/qbFLUtCbJubCqXUHblgbQuaQTGYA9cZR831/HVl4RBAE+VSMRMoCpo+R8u7q9xQ5FImQQ5clJdpLzzPnZJsg1CRKSCIlDDw1GEoqrs6YpPC9Q5iPE/NKzAdhMQg5BOZWkjTN+3NIaqO3TNomko4uDJedcm2IZDWk4/cJSdv0Qgc9KBgXvHOU/BkT3uMRFYqJO9sV8lAR2aVPp/BcfscCnOTnxRLnmJbtadzAYk8l+Nj4dgvdRsiuLPE+mxW7cl3dAVEykZH5pddMt9OA5So376g6KR9HrJyfHmA78zl2RMxZ8lHyEzpNJGuOhQMV1jlqucUwyGQwIjT6xySUlGwTxOW5fESk6Ci6Ks1NOw+dqy8kuQ0iQTRLikpLASzJJiRgW5CcJouEQ0iSSUZUN6KGEx3SYpJRO7+CxXl8PdCcBbr77ADcRk0RyI1CNw89uegFXdlIjbkQlDZPw6e1saAMYKKPGfU2HSUeCsxUC3O+mNQp4zHTcV3SoNNFhMaVFIx3Thehv2/5ZUM8mTTWNysHAE/flHDAZ9CglETWE5C99lnNbtPlRsbOk9bMVhjLVMRmf2pJHmE5ycmKP21IRiLRkJv5xe+pnZ0lFsxMyyZBuQkJCQkJCQgIG/wfFmZgTDkAyvAAAAABJRU5ErkJggg=="
                ></img>
              </span>
              <span className="flex text-[70px] ml-[20px]">Patriots</span>
            </div>
            <div className="flex justify-between space-x-6">
              <div className="flex flex-col ml-5">
                <Button onClick={() => setWhichPage(0)}>Home</Button>
                <Button onClick={() => setWhichPage(2)}>Red Sox</Button>
                <Button onClick={() => setWhichPage(3)}>Bruins</Button>
                <Button onClick={() => setWhichPage(4)}>Celtics</Button>
                <PatriotsSchedule />
              </div>
              <div className="flex flex-col place-content-center w-[750px]">
                <PatriotsAccordion />
              </div>
              <div className="flex flex-col w-auto mr-5">
                <div className="bolder text-center">Patriots 2024 Draft</div>
                <PatriotsDraft />
                <br />
                <div className="bolder text-center">AFC East Standings</div>
                <PatriotsStandings />
              </div>
            </div>
          </>
        ) : whichPage === 2 ? (
          <div className="flex flex-col ml-5">
            <div>Red Sox</div>
            <Button onClick={() => setWhichPage(0)}>Home</Button>
            <Button onClick={() => setWhichPage(1)}>Patriots</Button>
            <Button onClick={() => setWhichPage(3)}>Bruins</Button>
            <Button onClick={() => setWhichPage(4)}>Celtics</Button>
          </div>
        ) : whichPage === 3 ? (
          <div className="flex flex-col ml-5">
            <div>Bruins</div>
            <Button onClick={() => setWhichPage(0)}>Home</Button>
            <Button onClick={() => setWhichPage(1)}>Patriots</Button>
            <Button onClick={() => setWhichPage(2)}>Red Sox</Button>
            <Button onClick={() => setWhichPage(4)}>Celtics</Button>
          </div>
        ) : (
          <div className="flex flex-col ml-5">
            <div>Celtics</div>
            <Button onClick={() => setWhichPage(0)}>Home</Button>
            <Button onClick={() => setWhichPage(1)}>Patriots</Button>
            <Button onClick={() => setWhichPage(2)}>Red Sox</Button>
            <Button onClick={() => setWhichPage(3)}>Bruins</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
