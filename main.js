btnNo = document.querySelector('#btn_no')
btnNo.addEventListener('click', () => {
  createModal(TextsReject.getText(TextsReject.step))
})

btnYes = document.querySelector('#btn_yes')
btnYes.addEventListener('click', () => {
  createModal({
    titleText: "(｡♥‿♥｡)",
    bodyText: "Você tem certeza? Ao aceitar você estará namorando comigo. Pense bem. É namorar comigo. Você se odeia tanto assim?",
    acceptText: "Eu quero você!",
    closeText: "Vou pensar",
    rejectCallback: () => {
      resetButtons()
    },
    acceptCallback: () => {
      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };

      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });

      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });
      resetButtons()

      const duration = 60 * 1000,
        animationEnd = Date.now() + duration;

      let skew = 1;

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      (function frame() {
        const timeLeft = animationEnd - Date.now(),
          ticks = Math.max(200, 500 * (timeLeft / duration));

        skew = Math.max(0.8, skew - 0.001);

        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2,
          },
          colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
          shapes: ["heart"],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(1, 4),
          drift: randomInRange(-0.4, 0.4),
        });

        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      })();

      createModal({
        titleText: "Para minha garotinha",
        bodyText: `
          Emilly,<br/>
          Eu sou muito feliz ao seu lado e quero continuar sempre com você.<br/>
          Entendo que não sou de me expressar muito, mas ao seu lado sou feliz e tudo fica mais leve. Busco melhorar nisso porque quero que você se sinta amada e eu quero mostrar o quanto eu amo você.<br/>
          Se você se sentir solitária, saiba que estou aqui por você!<br/>
          Então, querida. Do fundo do meu coração, eu te amo e quero você! Estando bem ou mal, estando boa ou ruim, eu escolhi você e continuarei escolhendo você.<br/>
          Seu sorriso aquece meu coração, suas piadas me divertem, sua felicidade me contagia e lutarei para que você continue sendo essa doce garota.
        `,
        acceptText: "Sim",
        closeText: "Não",
        callback: ({ footerCloseButton }) => {
          footerCloseButton.style.display = "none"
          document.querySelector('#box_buttons').style.display = "none"

          const p = document.createElement('p')
          p.innerHTML = 'Oficialmente namorados'
          document.querySelector('#box').append(p)
        }
      })
    }
  })
})

const resetButtons = () => {
  document.querySelector('#btn_yes').style.cssText = ""
  document.querySelector('#btn_no').style.cssText = ""
  document.querySelector('#box_buttons').style.cssText = ""
}

class TextsReject {
  static step = 0;

  static getText(step = 0) {
    switch (step) {
      case 0:
        return {
          titleText: "Que isso??",
          bodyText: "Clicou sem querer, né? ಠ_ರೃ",
          acceptText: "Sim",
          closeText: "Não",
          rejectCallback: () => {
            resetButtons()
            TextsReject.step++
          },
          acceptCallback: () => resetButtons()
        }
      case 1:
        return {
          titleText: "De novo?!",
          bodyText: "Tá meio suspeito tudo isso aqui, mas vamos tentar de novo. Dessa vez clica em \"Sim\". ",
          acceptText: "Ok",
          closeText: "Não",
          rejectCallback: () => {
            resetButtons()
            TextsReject.step++
          },
          acceptCallback: () => resetButtons()
        }
      case 2:
        return {
          titleText: "Muito engraçado HAHAHA (ง'̀-'́)ง",
          bodyText: "Acho que você não entendeu direito. É para clicar no botão VERDE!",
          acceptText: "Errei, fui mlk",
          closeText: "Não quero!",
          rejectCallback: () => {
            resetButtons()
            TextsReject.step++
          },
          acceptCallback: () => resetButtons()
        }
      case 3:
        return {
          titleText: "ಥ‿ಥ",
          bodyText: "Ok, você deve ser meio bilutetéia. Vou facilitar para você.",
          acceptText: "Obrigado",
          closeText: "Não",
          callback: ({ footer, footerAcceptButton, footerCloseButton }) => {
            footer.style.flexDirection = "column"
            footerAcceptButton.style.width = "90%"
            footerCloseButton.style.width = "60px"
            document.querySelector('#btn_yes').style.fontSize = "40px"
            document.querySelector('#btn_no').style.fontSize = "14px"
            document.querySelector('#btn_no').style.width = "90%"
            document.querySelector('#btn_no').style.width = "60px"
          },
          rejectCallback: () => {
            TextsReject.step++
          },
        }
      case 4:
        return {
          titleText: "(⌐▀͡ ̯ʖ▀)",
          bodyText: "Seguinte, acabou a brincadeira. Aceita agora ou então vai sofrer graves consequências! (⌐■_■)",
          acceptText: "Vou aceitar",
          closeText: "Foda-se! Não quero",
          rejectCallback: () => {
            resetButtons()
            TextsReject.step++
          },
          acceptCallback: () => resetButtons()
        }
      case 5:
        return {
          titleText: "（＾ω＾）",
          bodyText: "Pronto. Agora não tem mais o botão!! Como vai recusar agora??",
          acceptText: "Gênio demais",
          closeText: "Vou procurar!",
          rejectCallback: () => {
            resetButtons()
            document.querySelector('#btn_no').style.position = 'absolute'
            document.querySelector('#btn_no').style.bottom = '5px'
            document.querySelector('#btn_no').style.right = '5px'
            document.querySelector('#btn_no').style.width = "60px"
            TextsReject.step++
          },
          acceptCallback: () => resetButtons()
        }
      case 6:
        return {
          titleText: "༽◺_◿༼",
          bodyText: "Estou começando a suspeitar que você não quer mesmo...",
          acceptText: "Quero sim",
          closeText: "Quero não",
          rejectCallback: () => {
            resetButtons()
            TextsReject.step++
            document.querySelector('#box_buttons').style.flexDirection = "column-reverse"
          },
          acceptCallback: () => resetButtons()
        }
      default:
        return {
          titleText: "=＾● ⋏ ●＾=",
          bodyText: "Certo. Tome sua decisão",
          acceptText: "Ok",
          closeText: "Ok",
          rejectCallback: () => resetButtons(),
          acceptCallback: () => resetButtons()
        }
    }
  }
}

// https://getbootstrap.com/docs/5.3/components/modal/