var icPlayUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiklEQVRIx+2UzQ1AQBQGJW7OGlACPeiCKqiCLqhCEUpYDTi7SUb27Hflc7JTwCT7dt4LAo9nD5lKtNISKUSWiVwjsvTEGhHMlBqRZSDRiGChJlSILOOLKDjGPQrOcYuCa55HcSPqFCKjeNpKoxj2SKoIslIEKVmRmUKxtJ3ijBjFYXP/6I+Pv+cPbFrkcdWH6mjQAAAAAElFTkSuQmCC";
var icPauseUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAMElEQVRIx2NgGAWjABn8b0BAYsRxG4QEiBEfNWjUoFGDRg0aNWgADaJW4T8KRg4AABfpAict00b7AAAAAElFTkSuQmCC";
let switchStyle = "img[src*='data:image'] {width:22px; height: 22px;}.switch {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 20px;\n  margin: 2px 0;}\n\n/* Hide default HTML checkbox */\n.switch input {opacity: 0; width: 0; height: 0;}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0px;\n  padding: 5px;\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  background-color: #ccc;\n  border-radius: 34px;\n  transition: .2s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 16px;\n  left: 2px;\n  bottom: 1px;\n  background-color: white;\n  border-radius: 50%;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(14px);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\n.edit_text {\n  border-bottom: 2px solid #555;\n  background: #000;\n  font-size: 12px;\n  height: 100px;\n  outline: none;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none !important;\n    background:white;\n    height:3px;\n}\n.edit_text:focus {\n  border-bottom: 2px solid #2196F3;\n}\n\n.btn-equip {\n  color: #338899;\n  display: inline-block;\n  margin: 0 5px 3px 0;\n  padding: 2px 4px;\n  font-size: 12px;\n  text-decoration: none;\n}";
var TYPE_SWITCH = 1;
var TYPE_TIMEOUT_SCENES = 2;
var TYPE_SCENES = 3;
window.onpopstate = function (_0x5899c2) {
  document.body.innerHTML = _0x5899c2.state.html;
  lib.onload();
};
var modules = {
  battle: {
    name: "Ведение боя",
    description: "Автоматическое ведение боя, <br /><font color=\"#FFFF33\">*Задержка способностей</font> - задерживает срабатывание способностей Точный выстрел, Первая помощь, Инъекция и Обстрел на 2сек<br /><font color=\"#FFFF33\">*Перебинтовать раны</font> - лечит персонаж перед каждой волной за 1 цент при менее 2/3 хп<br /><font color=\"#FFFF33\">*Автоожидание боя</font> - обновляет страницу в команде пока лидер не начнет бой<br /><font color=\"#FFFF33\">*Возвращение в бой</font> - возвращается в бой после смерти и автоперехода в больницу (бесплатно)<br /><font color=\"#FFFF33\">*Забирать все вещи</font> - выбирает \"Надо\" при дележке вещей<br /><font color=\"#FFFF33\">*Автопродолжение боя</font> - продолжает бой при доступности<br /><font color=\"#FFFF33\">*Использовать гаджет</font> - позволяет автоматически использовать гаджет в бою<br /><font color=\"#FFFF33\">*Автопочинка</font> - чинит всю экипировку игрока при доступности во время боя<br /><font color=\"#FFFF33\">*Задержка</font> - задержка между действиями игрока во время боя",
    type: TYPE_SCENES,
    enabled: true,
    settings: [{
      name: "Задержка способностей",
      type: "checkbox",
      key: "skill_timeout",
      value: false
    }, {
      name: "Перебинтовать раны",
      type: "checkbox",
      key: "heal_link",
      value: true
    }, {
      name: "Автоожидание боя",
      type: "checkbox",
      key: "auto_wait",
      value: false
    }, {
      name: "Возвращение в бой",
      type: "select",
      key: "return_battle",
      value: 2,
      list: ["откл", "бесп", "полн"]
    }, {
      name: "Забирать все вещи",
      type: "checkbox",
      key: "get_all_items",
      value: false
    }, {
      name: "Автопродолжение боя",
      type: "checkbox",
      key: "battle_auto_continue",
      value: true
    }, {
      name: "Использовать гаджет",
      type: "checkbox",
      key: "enable_gadget",
      value: false
    }, {
      name: "стим 1",
      type: "checkbox",
      key: "enable_belt_1",
      value: false
    }, {
      name: "стим 2",
      type: "checkbox",
      key: "enable_belt_2",
      value: false
    }, {
      name: "стим 3",
      type: "checkbox",
      key: "enable_belt_3",
      value: false
    }, {
      name: "стим 4",
      type: "checkbox",
      key: "enable_belt_4",
      value: false
    }, {
      name: "Автопочинка",
      type: "checkbox",
      key: "auto_repair",
      value: true
    }, {
      name: "Авто - \"Ждать\"",
      type: "checkbox",
      key: "auttime",
      value: false
    }, {
      name: "Отключить Яд",
      type: "checkbox",
      key: "poison_off",
      value: false
    }, {
      name: "Травить всех",
      type: "checkbox",
      key: "randomer",
      value: false
    }, {
      name: "Быстрая ПП",
      type: "checkbox",
      key: "fast_heal",
      value: false
    }, {
      name: "Правильный стим",
      type: "checkbox",
      key: "enable_belt_combined",
      value: false
    }, {
      name: "Задержка",
      type: "range",
      key: "attack_timeout",
      maxvalue: 2000,
      value: 300
    }],
    getNextScene: function () {
      var _0x56d794 = bratki.getCombatLinks();
      if (lib.findLinksByUrlComponent("rebornLink").length > 0 && lib.getCookie("return_battle") !== 0) {
        this.returnLink = document.location.href;
        return [{
          click: lib.findLinksByUrlComponent("rebornLink")[0]
        }];
      }
      if (typeof this.returnLink != "undefined" && typeof this.heal == "undefined" && parseInt(lib.getCookie("return_battle")) == 2) {
        var _0x514137 = lib.findLinksByUrlComponent("healLink");
        this.heal = true;
        if (_0x514137.length > 0) {
          return [{
            click: _0x514137[0]
          }];
        }
      }
      if ((this.heal || lib.getCookie("return_battle") != 2) && typeof this.returnLink != "undefined" && lib.getCookie("return_battle") !== 0) {
        var _0x514137 = document.querySelector("a");
        delete this.heal;
        _0x514137.href = this.returnLink;
        delete this.returnLink;
        return [{
          click: _0x514137
        }];
      }
      if (lib.findLinksByUrlComponent("rebornLink").length > 0 && document.body.innerHTML.includes("Сложность заказухи") && lib.getCookie("return_battle") != 1) {
        try {
          lib.setCookie(modules.autoMissions.settings[lib.getCookie("current_mission")].key, 0);
          modules.autoMissions.settings[lib.getCookie("current_mission")].sb.setSelection(0);
        } catch (_0x433e34) {}
        ;
      }
      if (lib.getCookie("heal_link") == 1 && lib.findLinksByUrlComponent("healLink").length > 0 && bratki.getMyHp() && bratki.getMyHp().type < 2) {
        var _0x514137 = lib.findLinksByUrlComponent("healLink")[0];
        return [{
          click: _0x514137
        }];
      }
      var _0x99296f = document.body.innerHTML.indexOf("<h2>Союзники</h2>") != -1 || document.body.innerHTML.indexOf("<span>Команда</span>") != -1 || document.body.innerHTML.indexOf("ID заказухи") != -1;
      var _0x2c8317 = document.body.innerHTML.includes("Заказуха выполнена");
      if (!_0x2c8317 && _0x99296f && lib.getCookie("auto_wait") == 1 && lib.findLinksByText("Обновить").length > 0) {
        var _0x514137 = lib.findLinksByText("Обновить")[0];
        _0x514137.setAttribute("timeout", 300);
        return [{
          click: _0x514137
        }];
      }
      if (lib.getCookie("auto_repair") == 1 && _0x56d794.length > 0) {
        if (document.body.innerHTML.includes("не хватает")) {
          var _0x99a9bc = document.querySelector("#auto_repair");
          if (_0x99a9bc) {
            _0x99a9bc.click();
          } else {
            lib.setCookie("auto_repair", 0);
          }
        } else if (lib.findLinksByUrlComponent("repairLink").length > 0) {
          return [{
            click: lib.findLinksByUrlComponent("repairLink")[0]
          }];
        }
      }
      if (lib.getCookie("battle_auto_continue") == 1) {
        if (lib.findLinksByText("Продолжить бой").length > 0) {
          return [{
            click: lib.findLinksByText("Продолжить бой")[0]
          }];
        }
      }
      if (lib.getCookie("get_all_items") == 1) {
        if (lib.findLinksByText("Надо").length > 0) {
          return [{
            click: lib.findLinksByText("Надо")[0]
          }];
        }
      }
      if (document.querySelector("div.road-line")) {
        var _0x4d512b = [{
          linkt: "Газануть",
          priority: 2,
          timeout: 2820
        }, {
          linkt: "Нитро",
          priority: 3,
          timeout: 100
        }, {
          linkc: "refreshLink",
          priority: 1,
          timeout: 200
        }];
        var _0x23331f = engine.getSceneLink(_0x4d512b);
        if (_0x23331f.length > 0) {
          return _0x23331f;
        }
      }
      if (lib.getCookie("auttime") == 1) {
        if (lib.findLinksByText("Ждать").length > 0) {
          return [{
            click: lib.findLinksByText("Ждать")[0]
          }];
        }
      }
      var _0xe044bf = this.damages;
      let _0x2aa4a4 = lib.getCookie("enable_belt_combined") == 1;
      var _0x56690f = {
        random: {
          text: ["Атаковать"]
        },
        randomer: {
          text: ["Атаковать", "Любого"],
          exc: function () {
            return lib.getCookie("randomer") == 1;
          }
        },
        last: {
          urlc: ["damageLastAttackerLink"],
          exc: function (_0x58d344) {
            try {
              var _0x3ca61e = parseInt(_0x58d344.innerHTML.match(/[^()]+(?=\))/g)[0]);
              return _0x3ca61e < bratki.getEnemyHp();
            } catch (_0x51b177) {
              return true;
            }
          }
        },
        belt1: {
          urlc: ["beltBlock-0"],
          exc: function (_0x1ded5e) {
            return lib.getCookie("enable_belt_1") == 1;
          }
        },
        belt2: {
          urlc: ["beltBlock-1"],
          exc: function (_0x4acc9d) {
            return lib.getCookie("enable_belt_2") == 1;
          }
        },
        belt3: {
          urlc: ["beltBlock-2"],
          exc: function (_0x3b49bc) {
            return lib.getCookie("enable_belt_3") == 1;
          }
        },
        belt4: {
          urlc: ["beltBlock-3"],
          exc: function (_0x1b7228) {
            return lib.getCookie("enable_belt_4") == 1;
          }
        },
        belttt1: {
          urlc: ["beltBlock-0"],
          exc: function (_0x2af6c2) {
            return _0x2aa4a4;
          }
        },
        belttt2: {
          urlc: ["beltBlock-1"],
          exc: function (_0x3a0e8d) {
            let _0x58182d = document.querySelector("a[href*='beltBlock-2'] .locked-time");
            if (_0x58182d) {
              let _0x2800a5 = parseInt(_0x58182d.innerText.split(" ")[0]);
              return _0x2aa4a4 && _0x2800a5 <= 38;
            }
            return false;
          }
        },
        belttt3: {
          urlc: ["beltBlock-2"],
          exc: function (_0x58c1d6) {
            let _0x2575b8 = document.querySelector("a[href*='beltBlock-0'] .locked-time");
            if (_0x2575b8) {
              let _0x236e52 = parseInt(_0x2575b8.innerText.split(" ")[0]);
              return _0x2aa4a4 && _0x236e52 <= 39;
            }
            return false;
          }
        },
        headhsot: {
          text: ["headshot", "Точный выстрел"],
          exc: function () {
            return bratki.getLastDamage() && bratki.getLastDamage() > 0 && bratki.getEnemyHp() / bratki.getLastDamage() > 3;
          },
          timeout: 2500
        },
        rampage: {
          text: ["rampage", "Неистовство"],
          priority: 3
        },
        robot: {
          text: ["robot", "Робот"],
          priority: 1
        },
        followtarget: {
          text: ["followtarget", "Слежение за целью"],
          priority: 2
        },
        efensivestand: {
          text: ["efensivestand", "Защитная стойка"],
          priority: 1,
          exc: function (_0x5d0ecb) {
            const _0x566e20 = document.querySelector(".c-yellow");
            if (!_0x566e20) {
              return true;
            }
            const _0x4f4ada = _0x566e20.textContent;
            const _0x2b3263 = parseInt(_0x4f4ada.match(/\d+/)[0]);
            return _0x2b3263 <= 1;
          }
        },
        gadget: {
          text: ["Тепловизор"],
          exc: function (_0x11cb89) {
            return lib.getCookie("enable_gadget") == 1;
          }
        },
        gun: {
          text: ["gun_", "Обстрел"],
          priority: 2,
          timeout: 2500,
          exc: function () {
            var _0x2fc5ed = document.querySelector(".enemies-list-items");
            return _0x2fc5ed && _0x2fc5ed.children.length > 0;
          }
        },
        affect: {
          text: ["affect", "Состояние аффекта"],
          priority: 3
        },
        wait: {
          text: ["Ждать", "карту"]
        },
        firstaid: {
          text: ["firstaid", "Первая помощь"],
          exc: function (_0x1af35b) {
            return lib.getCookie("fast_heal") == 1 || bratki.getMyHp() && bratki.getMyHp().type < 2 || bratki.getTeamHp() && bratki.getTeamHp().type < 2;
          },
          timeout: 2000
        },
        medikit: {
          text: ["medikit", "Аптечка"],
          exc: function (_0x62081b) {
            return bratki.getMyHp() && bratki.getMyHp().type < 2;
          },
          timeout: 2000
        },
        poison: {
          text: ["poison", "Ядовитый укол"],
          exc: function () {
            var _0x35dce1 = document.querySelector(".enemies-list-items");
            return lib.getCookie("poison_off") == 0 && _0x35dce1 && _0x35dce1.children.length > 0;
          }
        },
        injection: {
          text: ["injection", "Инъекция"],
          timeout: 2000
        }
      };
      var _0x55109c = [];
      for (var _0x306ed9 in _0x56690f) {
        for (var _0x417d74 in _0x56d794) {
          if (typeof _0x56690f[_0x306ed9].text != "undefined") {
            for (var _0x4dcf3a in _0x56690f[_0x306ed9].text) {
              if (_0x56d794[_0x417d74].innerHTML.includes(_0x56690f[_0x306ed9].text[_0x4dcf3a]) && (typeof _0x56690f[_0x306ed9].exc == "undefined" || _0x56690f[_0x306ed9].exc(_0x56d794[_0x417d74]))) {
                _0x55109c.push({
                  name: _0x306ed9,
                  link: _0x56d794[_0x417d74],
                  timeout: _0x56690f[_0x306ed9].timeout
                });
              }
            }
          }
          if (typeof _0x56690f[_0x306ed9].urlc != "undefined") {
            for (var _0x1b57a3 in _0x56690f[_0x306ed9].urlc) {
              if (_0x56d794[_0x417d74].href.includes(_0x56690f[_0x306ed9].urlc[_0x1b57a3]) && (typeof _0x56690f[_0x306ed9].exc == "undefined" || _0x56690f[_0x306ed9].exc(_0x56d794[_0x417d74]))) {
                _0x55109c.push({
                  name: _0x306ed9,
                  link: _0x56d794[_0x417d74],
                  timeout: _0x56690f[_0x306ed9].timeout
                });
              }
            }
          }
        }
      }
      _0x55109c.sort((_0x40839b, _0x3efd9c) => _0x40839b.priority - _0x3efd9c.priority);
      if (_0x55109c.length > 0) {
        var _0x514137 = _0x55109c.pop();
        if (_0x514137.link.innerHTML.includes("Атаковать") && lib.findLinksByUrlComponent("block:blockLink").length > 0 && lib.findLinksByUrlComponent("0:targetLink").length > 0) {
          _0x514137.link = lib.findLinksByUrlComponent("0:targetLink")[0];
        }
        _0x514137.link.setAttribute("timeout", lib.getCookie("skill_timeout") == 1 && _0x514137.timeout !== undefined ? _0x514137.timeout : lib.getCookie("attack_timeout"));
        return [{
          click: _0x514137.link
        }];
      }
    }
  },
  robbery: {
    name: "Автограбежи",
    description: "Проверять доступность грабежей и выполнять их",
    type: TYPE_TIMEOUT_SCENES,
    enabled: true,
    start: 0,
    getNextScene: function () {
      if (document.body.innerHTML.includes("откроются через")) {
        return;
      }
      var _0x171817 = [{
        linkc: "/home",
        priority: 0
      }, {
        linkt: "Грабежи",
        priority: 1
      }, {
        linkt: "Патруль",
        priority: 1,
        timeout: Math.floor(Math.random() * 201) + 100
      }, {
        linkc: "robLink",
        priority: 1,
        timeout: Math.floor(Math.random() * 201) + 100
      }];
      return engine.getSceneLink(_0x171817);
    },
    timeout: 30000
  },
  tasks: {
    name: "Автонаводки",
    description: "Автоматическая проверка и выполнение заданий на прикрытие",
    type: TYPE_TIMEOUT_SCENES,
    enabled: false,
    start: 0,
    getNextScene: function () {
      if (document.body.innerHTML.includes("Задание недоступно")) {
        return;
      }
      var _0x55b9d6 = [{
        linkc: "/home",
        priority: 0
      }, {
        linkc: "/tasks",
        priority: 1
      }, {
        linkc: "/task",
        priority: 2,
        exc: function () {
          return document.body.innerHTML.includes("Постоянные проблемы");
        }
      }, {
        linkc: "acceptLinkPanel",
        priority: 3
      }, {
        linkc: "repeatLink",
        priority: 3
      }, {
        linkt: "Тони \"Фикса\"",
        priority: 1
      }, {
        linkt: "Чарли",
        priority: 1
      }, {
        linkt: "Джереми",
        priority: 1
      }];
      return engine.getSceneLink(_0x55b9d6);
    },
    timeout: 60000
  },
  autoMissions: {
    name: "Авто заказы",
    type: TYPE_TIMEOUT_SCENES,
    enabled: true,
    start: 0,
    settings: [{
      name: "Бар \"Зелень\"",
      type: "select",
      key: "GreenBar",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Администрация вокзала",
      type: "select",
      key: "Figa_TrainStation",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Усмирение тигра",
      type: "select",
      key: "Tiger",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Заброшенный Завод",
      type: "select",
      key: "thrownfactory",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Сочные дыни",
      type: "select",
      key: "stripMelon",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Беспредел в порту",
      type: "select",
      key: "UnrulyPort",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Ограбление Века",
      type: "select",
      key: "Robberycentury",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Особняк Фила Ричи",
      type: "select",
      key: "VillaRichie",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Засада на Причале",
      type: "select",
      key: "Mooringyachtclubagent",
      value: 3,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Мэр заказан",
      type: "select",
      key: "KillMajor",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Голубой огонек",
      type: "select",
      key: "RestPrank",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Военная контрабанда",
      type: "select",
      key: "BlackOpsSmuggle",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Захват СМИ",
      type: "select",
      key: "smi",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Автосалон Грида",
      type: "select",
      key: "avto",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Склады Седого",
      type: "select",
      key: "warehouse",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Последний полет",
      type: "select",
      key: "fly",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Сорванная башня",
      type: "select",
      key: "nebo",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Воскресный шоппинг",
      type: "select",
      key: "shopping",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Пляжная вечеринка",
      type: "select",
      key: "beach",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Смертельный форсаж",
      type: "select",
      key: "furious",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Стрелка в парке",
      type: "select",
      key: "park",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }, {
      name: "Бункер",
      type: "select",
      key: "operation_bunker",
      value: 0,
      list: ["выкл", "норм", "проф", "маст"]
    }],
    getNextScene: function () {
      if (bratki.getCombatLinks().length > 0) {
        this.timeout = 0;
        return;
      }
      if (typeof this.diff != "undefined" && lib.findLinksByUrlComponent(this.diff + "-difficultyLink").length > 0) {
        return [{
          click: lib.findLinksByUrlComponent(this.diff + "-difficultyLink")[0]
        }];
      }
      console.log("find links " + bratki.getMissionsLinks());
      if (lib.findLinksByUrlComponent("levelFilter-3").length === 0 && bratki.getMissionsLinks().length > 0) {
        var _0x5dfc50 = bratki.getMissionsLinks();
        console.log("ok");
        for (var _0x3a9cb2 in _0x5dfc50) {
          var _0x420975 = _0x5dfc50[_0x3a9cb2].href.split("/").pop();
          if (_0x420975 == "blackmarket") {
            continue;
          }
          var _0x2500e3 = lib.getCookie(_0x420975);
          if (parseInt(_0x2500e3) > 0) {
            this.diff = _0x2500e3 - 1;
            for (var _0x55cf93 in this.settings) {
              if (this.settings[_0x55cf93].key == _0x5dfc50[_0x3a9cb2].href.split("/").pop()) {
                lib.setCookie("current_mission", _0x55cf93);
              }
            }
            return [{
              click: _0x5dfc50[_0x3a9cb2]
            }];
          }
        }
        this.timeout = 15000;
        return;
      }
      if (typeof this.diff != "undefined") {
        delete this.diff;
      }
      let _0x5db51d = [{
        linkc: "/home",
        priority: 0
      }, {
        linkc: "healLink",
        priority: 4,
        exc: function () {
          return lib.getCookie("heal_link");
        }
      }, {
        linkt: "Заказухи",
        priority: 1
      }, {
        linkt: "Все",
        priority: 1
      }, {
        linkc: "enterLink",
        priority: 2
      }, {
        linkc: "partyPanel",
        priority: 3,
        exc: function () {
          return !document.body.innerHTML.includes("<span>Команда</span>");
        }
      }, {
        linkc: "leaveLink",
        priority: 4,
        exc: function () {
          return !document.body.innerHTML.includes("Группировка");
        }
      }, {
        linkc: "confirmLink",
        priority: 4
      }, {
        linkt: "Да",
        priority: 3,
        exc: function () {
          return document.body.innerHTML.includes("выйти из нее");
        }
      }, {
        linkc: "optionTwoLink",
        priority: 2
      }, {
        linkc: "startLink",
        priority: 3
      }, {
        linkt: "Газануть",
        priority: 7,
        timeout: 2850,
        exc: function () {
          if (document.querySelector("div.road-line") === null) {
            return false;
          }
          return true;
        }
      }, {
        linkc: "refreshLink",
        priority: 1,
        timeout: 500,
        exc: function () {
          if (document.querySelector("div.road-line") === null) {
            return false;
          }
          return true;
        }
      }, {
        linkt: "Нитро",
        priority: 8,
        timeout: 200,
        exc: function () {
          if (document.querySelector("div.road-line") === null) {
            return false;
          }
          return true;
        }
      }];
      var _0x89431b = engine.getSceneLink(_0x5db51d);
      console.log(_0x89431b);
      return _0x89431b;
    },
    timeout: 15000
  },
  rack: {
    name: "Сумка",
    description: "Очистка сумки от вещей, <br /><font color=\"#ff0000\">Будьте осторожны при выборе варианта сбыть</font><br /><font color=\"#ff3\">исключеня</font> - (с общагом не работает) ключевые слова исключаящие обработку вещи, через запятую, например: филки, ящик",
    type: TYPE_TIMEOUT_SCENES,
    enabled: false,
    start: 0,
    settings: [{
      name: "игнорировать прод",
      type: "checkbox",
      key: "ignore_prod",
      value: false
    }, {
      name: "личные вещи",
      type: "select",
      key: "private_items",
      value: 0,
      list: ["игнор", "в сейф", "сбыть"]
    }, {
      name: "не личные вещи",
      type: "select",
      key: "public_items",
      value: 0,
      list: ["игнор", "в общаг", "в сейф", "сбыть"]
    }, {
      name: "исключения",
      type: "text",
      key: "rack_exceptions",
      value: "филки, жетон, кредиты, пули, аптечка"
    }],
    getNextScene: function () {
      var _0x382535 = bratki.getRackItems();
      var _0xd277e8 = lib.getCookie("rack_exceptions");
      if (_0xd277e8) {
        _0xd277e8 = _0xd277e8.toLowerCase().split(",");
      }
      if (_0x382535.length > 0 && document.body.innerHTML.includes("Моя сумка")) {
        for (var _0xe1f22d in _0x382535) {
          if (_0xd277e8) {
            var _0x248f90 = false;
            for (var _0x2930cd in _0xd277e8) {
              if (_0x382535[_0xe1f22d].innerHTML.toLowerCase().includes(_0xd277e8[_0x2930cd].trim())) {
                _0x248f90 = true;
              }
            }
            if (_0x248f90) {
              continue;
            }
          }
          if (lib.getCookie("ignore_prod") == 1 && _0x382535[_0xe1f22d].innerHTML.includes("item_difficulty_20_2")) {
            continue;
          }
          if (_0x382535[_0xe1f22d].innerHTML.includes("личное")) {
            if (lib.getCookie("private_items") == 1) {
              var _0x201b5a = _0x382535[_0xe1f22d].querySelector("a[href*='chestLink']");
              if (_0x201b5a === null) {
                continue;
              }
              return [{
                click: _0x201b5a
              }];
            }
            if (lib.getCookie("private_items") == 2) {
              this.confirmReq = true;
              return [{
                click: _0x382535[_0xe1f22d].querySelector("a[href*='crackLink']")
              }];
            }
          } else {
            if (lib.getCookie("public_items") == 3) {
              this.confirmReq = true;
              return [{
                click: _0x382535[_0xe1f22d].querySelector("a[href*='crackLink']")
              }];
            }
            if (lib.getCookie("public_items") == 2) {
              var _0x201b5a = _0x382535[_0xe1f22d].querySelector("a[href*='chestLink']");
              if (_0x201b5a === null) {
                continue;
              }
              return [{
                click: _0x201b5a
              }];
            }
            if (lib.getCookie("public_items") == 1) {
              var _0x411287 = false;
              for (var _0x26259b in _0xd277e8) {
                if (_0x382535[_0xe1f22d].innerHTML.toLowerCase().includes(_0xd277e8[_0x26259b])) {
                  _0x411287 = true;
                }
              }
              if (!_0x411287) {
                this.gangDonate = true;
              }
            }
          }
        }
      }
      if (this.confirmReq) {
        delete this.confirmReq;
        if (lib.findLinksByUrlComponent("confirmLink").length > 0) {
          return [{
            click: lib.findLinksByUrlComponent("confirmLink")[0]
          }];
        }
      }
      if (this.gangDonate) {
        if (document.body.innerHTML.includes("доступных вещей не найдено")) {
          delete this.gangDonate;
          return;
        }
        if (lib.findLinksByUrlComponent("/gang/menu").length > 0) {
          lib.setCookie("public_items", 0);
          return;
        }
        var _0x2d98da = [{
          linkc: "/gang",
          priority: 0
        }, {
          linkc: "GuildStoragePage",
          priority: 1
        }, {
          linkt: "Сдать в общак",
          priority: 2
        }, {
          linkc: "GuildDonateItem",
          priority: 2
        }, {
          linkc: "showItemsLink",
          priority: 2
        }, {
          linkc: "selectLink",
          priority: 3
        }];
        return engine.getSceneLink(_0x2d98da);
      }
      if (!document.body.innerHTML.includes("Моя сумка")) {
        return [{
          click: lib.findLinksByUrlComponent("user/rack")[0]
        }];
      }
    },
    timeout: 10000
  },
  off: {
    name: "Отключение",
    description: "Автоматическое отключение скрипта",
    type: TYPE_SWITCH,
    enabled: false,
    onswitch: function (_0x4f34d3) {
      if (_0x4f34d3) {
        this.timeoutId = setTimeout(function () {
          document.querySelector("#playpause").click();
        }, (parseInt(lib.getCookie("auto_off")) + 1) * 1000 * 60 * 60);
      } else {
        clearTimeout(this.timeoutId);
      }
    },
    onconfig: function () {
      if (this.enabled) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () {
          document.querySelector("#playpause").click();
        }, (parseInt(lib.getCookie("auto_off")) + 1) * 1000 * 60 * 60);
      }
    },
    settings: [{
      name: "час до отключения",
      type: "select",
      key: "auto_off",
      value: 0,
      list: ["1", "2", "3", "4"]
    }]
  },
  sup: {
    name: "Дополнительно",
    type: TYPE_SWITCH,
    enabled: false,
    onswitch: function (_0x2c9eb5) {
      this.onconfig(_0x2c9eb5);
    },
    onconfig: function (_0x49383c = this.enabled) {
      if (_0x49383c) {
        this.onload();
      } else {
        let _0x4c5eec = document.querySelectorAll(".search-form, .b-notice, .event, .b-header, .container, .b-footmenu");
        for (let _0x456573 = 0; _0x456573 < _0x4c5eec.length; _0x456573++) {
          _0x4c5eec[_0x456573].style = "";
        }
      }
    },
    onload: function () {
      if (lib.getCookie("take-all") == 1) {
        let _0x468618 = document.querySelectorAll("table a[href*='takeLink']");
        let _0x422d6c = this;
        let _0x1db742 = false;
        for (let _0x48115f in _0x468618) {
          if (!_0x468618.hasOwnProperty(_0x48115f)) {
            continue;
          }
          let _0x1bfd7f = _0x468618[_0x48115f].parentNode.parentNode.parentNode;
          if (_0x1bfd7f.innerHTML.includes("item_difficulty") && !_0x1bfd7f.innerHTML.includes("Забрать все")) {
            let _0x46e24a = document.createElement("a");
            _0x46e24a.innerHTML = "Забрать все";
            _0x46e24a.href = "javascript:void(0)";
            _0x46e24a.onclick = function () {
              _0x422d6c.target = this.parentNode.parentNode.querySelector("a[href*='/item']").innerHTML;
              _0x422d6c.onload();
            };
            _0x1bfd7f.querySelector("span").parentNode.appendChild(_0x46e24a);
          }
          if (_0x422d6c.target && document.querySelector("a[href*='tempItemsLink']") === null) {
            if (_0x1bfd7f.innerHTML.includes(_0x422d6c.target)) {
              _0x468618[_0x48115f].click();
              _0x1db742 = true;
              break;
            }
          }
        }
        if (!_0x1db742) {
          _0x422d6c.target = false;
        }
      }
      if (lib.getCookie("give-all") == 1) {
        let _0x1b98e2 = document.querySelectorAll("table a[href*='selectItemLink']");
        let _0x5be9a9 = this;
        let _0x1c310b = false;
        for (let _0x276a4b in _0x1b98e2) {
          if (!_0x1b98e2.hasOwnProperty(_0x276a4b)) {
            continue;
          }
          let _0x849222 = _0x1b98e2[_0x276a4b].parentNode.parentNode;
          if (!_0x849222.innerHTML.includes("Выбрать")) {
            continue;
          }
          if (_0x849222.innerHTML.includes("item_difficulty") && !_0x849222.innerHTML.includes("все")) {
            let _0x891053 = document.createElement("td");
            let _0x15f0b4 = document.createElement("a");
            _0x891053.appendChild(_0x15f0b4);
            _0x15f0b4.innerHTML = "все";
            _0x15f0b4.href = "javascript:void(0)";
            _0x15f0b4.className = "btn-a narrow ml5";
            _0x15f0b4.onclick = function () {
              _0x5be9a9.target2 = this.parentNode.parentNode.querySelector("a[href*='/item']").innerHTML;
              _0x5be9a9.onload();
            };
            _0x849222.appendChild(_0x891053);
          }
          let _0x348cf7 = _0x849222.querySelector("a[href*='selectItemLink']");
          if (_0x5be9a9.target2 && !document.body.innerHTML.includes("Невозможно прикрепить вещь. Максимум 10.")) {
            if (_0x849222.innerHTML.includes(_0x5be9a9.target2)) {
              _0x348cf7.click();
              _0x1c310b = true;
              break;
            }
          }
        }
        if (!_0x1c310b) {
          _0x5be9a9.target2 = false;
        }
      }
    },
    settings: [{
      name: "\"Забрать все\" в общаге",
      type: "checkbox",
      key: "take-all",
      value: false
    }, {
      name: "\"Выбрать все\" при отправке",
      type: "checkbox",
      key: "give-all",
      value: false
    }]
  }
};
var GUI = {
  createMenu: function () {
    var _0x4f5964 = document.createElement("style");
    _0x4f5964.innerHTML = switchStyle;
    document.head.appendChild(_0x4f5964);
    var _0x39ba54 = window.innerWidth < 600;
    var _0x4a8e0e = lib.ce("div", {
      style: "\n                background: #000; \n                opacity: 0.8; \n                border-radius: 3px; \n                position: absolute; \n                color: #BA55D3; \n                transition: opacity 500ms;\n                z-index: 2147483647;\n            ",
      onmousemove: function () {
        this.style.opacity = "1";
      },
      onmouseout: function () {
        this.style.opacity = "0.7";
      }
    });
    var _0x4f5964 = document.createElement("style");
    _0x4f5964.innerHTML = "\n            @keyframes colorAnimation {\n                0% { color: #BA55D3; }\n                25% { color: #FF69B4; }\n                50% { color: #00BFFF; }\n                75% { color: #BA55D3; }\n                100% { color: #FF69B4; }\n            }\n            .color-animate {\n                animation: colorAnimation 2s infinite;\n            }\n        ";
    document.head.appendChild(_0x4f5964);
    _0x4a8e0e.classList.add("color-animate");
    if (_0x39ba54) {
      _0x4a8e0e.style.top = "0";
      _0x4a8e0e.style.right = "0";
    } else if (typeof lib.getCookie("menu_position") == "undefined") {
      _0x4a8e0e.style.top = "0px";
      _0x4a8e0e.style.left = "10px";
    } else {
      var _0x5901c3 = lib.getCookie("menu_position").split(".");
      _0x4a8e0e.style.top = _0x5901c3[1];
      _0x4a8e0e.style.left = _0x5901c3[0];
    }
    var _0x10fda1 = lib.ce("div", {
      style: "padding: 5px; cursor: pointer;",
      innerHTML: "опции"
    }, _0x4a8e0e);
    var _0x54e26b = lib.ce("div", {
      style: "overflow: hidden; position: absolute; right: 5px; top: 0; transition: 500ms;"
    });
    var _0x169f83 = lib.ce("div", {
      style: "display: inline-block; font-size: 12px; transition: 500ms;"
    }, _0x54e26b);
    var _0x4b628b = false;
    if (!_0x39ba54) {
      _0x10fda1.onmousedown = function (_0x26d79c) {
        _0x4a8e0e.style.transition = "0s";
        var _0x3ccdb4 = _0x26d79c.offsetX;
        var _0x5ed77d = _0x26d79c.offsetY;
        _0x51ce7f(_0x26d79c);
        function _0x51ce7f(_0x2d2cd1) {
          _0x4a8e0e.style.left = _0x2d2cd1.pageX - _0x3ccdb4 + "px";
          _0x4a8e0e.style.top = _0x2d2cd1.pageY - _0x5ed77d + "px";
          lib.setCookie("menu_position", _0x4a8e0e.style.left + "." + _0x4a8e0e.style.top);
        }
        document.onmousemove = function (_0x427366) {
          var _0x604e20 = Math.sqrt(Math.pow(_0x3ccdb4 - _0x427366.offsetX, 2) + Math.pow(_0x5ed77d - _0x427366.offsetY, 2));
          if (_0x604e20 > 2) {
            _0x4b628b = true;
          }
          _0x51ce7f(_0x427366);
        };
        _0x10fda1.onmouseup = function () {
          document.onmousemove = null;
          _0x4a8e0e.style.transition = "500ms";
          _0x10fda1.onmouseup = null;
        };
      };
    }
    var _0x614dac = lib.ce("div", {
      style: "transition: 250ms; overflow: hidden; max-height: 0; max-width:0; padding: 0;"
    }, _0x4a8e0e);
    var _0x1b64d3 = false;
    _0x10fda1.onclick = function () {
      if (_0x4b628b) {
        _0x4b628b = false;
        return;
      }
      _0x1b64d3 = !_0x1b64d3;
      GUI.menuOpened = _0x1b64d3;
      if (_0x1b64d3) {
        GUI.showBottom();
        _0x614dac.style.maxHeight = "1000px";
        _0x614dac.style.maxWidth = "500px";
        _0x614dac.style.padding = "5px";
        _0x614dac.style.borderTop = "1px solid #fff";
        _0x54e26b.style.opacity = "0";
        _0x54e26b.style.maxHeight = "0";
      } else {
        GUI.closeAllPopup();
        GUI.hideBottom();
        _0x614dac.style.maxHeight = "0";
        _0x614dac.style.maxWidth = "0";
        _0x614dac.style.padding = "0";
        _0x614dac.style.borderTop = "0";
        _0x54e26b.style.opacity = "1";
        _0x54e26b.style.maxHeight = "500px";
      }
    };
    var _0x2c4e06 = engine.paused;
    var _0x3edb6c;
    var _0x4e6521;
    var _0x1134be = lib.ce("img", {
      style: "cursor: pointer;"
    }, _0x54e26b);
    _0x1134be.src = _0x2c4e06 ? icPlayUrl : icPauseUrl;
    _0x1134be.onclick = function () {
      _0x2c4e06 = !_0x2c4e06;
      engine.paused = _0x2c4e06;
      _0x4e6521.innerHTML = _0x2c4e06 ? "Запустить" : "Остановить";
      this.src = _0x2c4e06 ? icPlayUrl : icPauseUrl;
      _0x3edb6c.src = this.src;
      if (!_0x2c4e06) {
        engine.waitScene(engine.handleScene);
      }
      lib.setCookie("paused", _0x2c4e06 ? 1 : 0);
    };
    _0x4a8e0e.appendChild(_0x54e26b);
    var _0x50bf79 = lib.ce("div", {
      id: "playpause",
      style: "overflow:hidden; transition: 250ms; cursor: pointer;"
    }, _0x4a8e0e);
    var _0x12858e = lib.ce("div", {
      style: "margin-top: -3px; left: 0; right: 0; height: 1px; background: #fff;"
    }, _0x50bf79);
    GUI.bottomProgress = new ProgressBar(_0x12858e, "#2196F3");
    _0x12858e.style.position = "absolute";
    _0x12858e.appendChild(GUI.bottomProgress.getElement());
    _0x3edb6c = lib.ce("img", {
      src: _0x2c4e06 ? icPlayUrl : icPauseUrl
    }, _0x50bf79);
    _0x4e6521 = lib.ce("div", {
      style: "position: relative; top: 2px; display: inline-block;",
      innerHTML: _0x2c4e06 ? "Запустить" : "Остановить"
    }, _0x50bf79);
    _0x50bf79.onclick = function () {
      _0x2c4e06 = !_0x2c4e06;
      engine.paused = _0x2c4e06;
      _0x3edb6c.src = _0x2c4e06 ? icPlayUrl : icPauseUrl;
      _0x4e6521.innerHTML = _0x2c4e06 ? "Запустить" : "Остановить";
      _0x1134be.src = _0x3edb6c.src;
      if (!_0x2c4e06) {
        engine.waitScene(engine.handleScene);
      }
      lib.setCookie("paused", _0x2c4e06 ? 1 : 0);
    };
    GUI.showBottom = function () {
      _0x50bf79.style.padding = "5px";
      _0x50bf79.style.maxHeight = "500px";
      _0x50bf79.style.opacity = "1";
    };
    GUI.hideBottom = function () {
      _0x50bf79.style.padding = "0";
      _0x50bf79.style.maxHeight = "0";
      _0x50bf79.style.opacity = "0";
    };
    GUI.hideBottom();
    var _0x71dbd7 = lib.ce("div", {
      id: "notifyblock",
      style: "border-top: 1px solid #fff; font-size: 12px; overflow:hidden; transition: 250ms;"
    }, _0x4a8e0e);
    GUI.showMsg = function (_0x24e969) {
      _0x71dbd7.style.padding = "5px";
      _0x71dbd7.style.maxHeight = "500px";
      _0x71dbd7.style.opacity = "1";
      _0x71dbd7.innerHTML = _0x24e969;
    };
    GUI.hideMsg = function () {
      _0x71dbd7.style.padding = "0";
      _0x71dbd7.style.maxHeight = "0";
      _0x71dbd7.style.opacity = "0";
    };
    GUI.menu = _0x4a8e0e;
    GUI.content = _0x614dac;
    GUI.timer = _0x169f83;
  },
  closeAllPopup: function () {
    for (var _0x239502 in modules) {
      if (modules[_0x239502].descPopup) {
        modules[_0x239502].descPopup.hide();
      }
    }
  }
};
var engine = {
  auto: false,
  paused: true,
  callback: function (_0x169afc) {
    if (!bratki.checking) {
      return;
    }
    delete bratki.checking;
    if (_0x169afc === 0) {
      if (confirm("Срок аренды скрипта закончен")) {} else {
        document.location.reload();
      }
      return;
    } else if (_0x169afc !== -1) {
      _0x169afc = _0x169afc * 1000;
      var _0x4bfe97 = Math.floor(_0x169afc / 86400000);
      var _0x4e2613 = Math.floor(_0x169afc % 86400000 / 3600000);
      var _0x9d6b3b = "Осталось " + _0x4bfe97 + " дней и " + _0x4e2613 + " часов";
      GUI.showMsg(_0x9d6b3b);
      setTimeout(function () {
        GUI.hideMsg();
      }, 10000);
      if (_0x4bfe97 === 0 && _0x4e2613 < 24) {
        setTimeout(function () {
          if (confirm("Срок аренды скрипта закончен")) {} else {
            document.location.reload();
          }
        }, _0x169afc);
      }
    } else {
      GUI.showMsg("Полная версия");
      setTimeout(function () {
        GUI.hideMsg();
      }, 5000);
    }
    engine.init();
  },
  getSceneLink: function (_0x2c8867) {
    var _0x7ddff8;
    var _0x444380 = [];
    var _0x5ecabd = -1;
    for (var _0x58023f in _0x2c8867) {
      if (_0x2c8867[_0x58023f].linkt && (_0x7ddff8 = lib.findLinksByText(_0x2c8867[_0x58023f].linkt)).length > 0 || _0x2c8867[_0x58023f].linkc && (_0x7ddff8 = lib.findLinksByUrlComponent(_0x2c8867[_0x58023f].linkc)).length > 0) {
        if (_0x2c8867[_0x58023f].exc && !_0x2c8867[_0x58023f].exc()) {
          continue;
        }
        if (_0x2c8867[_0x58023f].priority > _0x5ecabd) {
          _0x444380 = _0x7ddff8;
          if (typeof _0x2c8867[_0x58023f].timeout != "undefined") {
            _0x444380[0].setAttribute("timeout", _0x2c8867[_0x58023f].timeout);
          }
          _0x5ecabd = _0x2c8867[_0x58023f].priority;
        }
      }
    }
    if (_0x444380.length > 0) {
      return [{
        click: _0x444380[0]
      }];
    }
  },
  handleScene: function (_0x5a68b1) {
    if (engine.paused) {
      return;
    }
    if (typeof _0x5a68b1[0].click != "undefined") {
      engine.auto = true;
      _0x5a68b1[0].click.setAttribute("auto", true);
      _0x5a68b1[0].click.click();
    }
  },
  waitScene: function (_0x2750fa) {
    if (typeof engine.currentModule != "undefined") {
      if (modules[engine.currentModule].type != TYPE_TIMEOUT_SCENES || Date.now() - lib.lastAction > 3000) {
        var _0x3f68dd = modules[engine.currentModule].getNextScene();
        if (typeof _0x3f68dd != "undefined") {
          _0x2750fa(_0x3f68dd);
          return;
        } else if (modules[engine.currentModule].type == TYPE_TIMEOUT_SCENES && typeof modules[engine.currentModule].timeout != "undefined") {
          modules[engine.currentModule].start = Date.now() + modules[engine.currentModule].timeout;
        }
      }
      delete engine.currentModule;
    }
    var _0x264435 = false;
    Object.keys(modules).map(function (_0x4d9d60, _0x1431cd) {
      var _0x4b1086 = modules[_0x4d9d60];
      if (typeof engine.currentModule != "undefined") {
        return;
      }
      if (_0x4b1086.type == TYPE_SWITCH) {
        return;
      }
      if (!_0x4b1086.enabled) {
        return;
      }
      _0x264435 = _0x264435 || !!_0x4b1086.timeout;
      if (_0x4b1086.type == TYPE_TIMEOUT_SCENES && Date.now() - lib.lastAction < 1000) {
        return;
      }
      if (typeof _0x4b1086.start != "undefined" && _0x4b1086.start > Date.now()) {
        return;
      }
      var _0x490e2c = _0x4b1086.getNextScene();
      if (typeof _0x490e2c != "undefined") {
        engine.currentModule = _0x4d9d60;
        GUI.showMsg("выполнение " + modules[engine.currentModule].name);
        setTimeout(function () {
          GUI.hideMsg();
        }, 2000);
        _0x2750fa(_0x490e2c);
      }
    });
    if (typeof engine.currentModule == "undefined" && _0x264435) {
      if (typeof engine.timerId != "undefined") {
        clearInterval(engine.timerId);
      }
      var _0x2d479b = Math.floor(Math.random() * 10000) + 15000;
      var _0x4f5410 = Date.now() + _0x2d479b;
      GUI.timer.style.opacity = "0";
      engine.timerId = setInterval(function () {
        if (engine.paused || typeof engine.timeoutId == "undefined") {
          GUI.timer.style.opacity = "0";
          clearInterval(engine.timerId);
          if (typeof engine.timeoutId != "undefined") {
            clearTimeout(engine.timeoutId);
          }
          return;
        }
        var _0x1befb8 = Math.floor((_0x4f5410 - Date.now()) / 1000);
        if (GUI.timer.style.opacity == "0") {
          GUI.timer.style.opacity = "1";
        }
        GUI.timer.innerHTML = _0x1befb8;
        GUI.bottomProgress.setProgress(100 - Math.floor(_0x1befb8 / (_0x2d479b / 1000) * 100));
      }, 1000, 0);
      GUI.showMsg("ожидание");
      setTimeout(function () {
        GUI.hideMsg();
      }, 2000);
      engine.timeoutId = setTimeout(function () {
        GUI.timer.style.opacity = "0";
        clearInterval(engine.timerId);
        delete engine.timerId;
        delete engine.timeoutId;
        var _0x1e8173;
        _0x1e8173 = (_0x1e8173 = lib.findLinksByUrlComponent("home")).length > 0 && !_0x1e8173[0].href.includes("logout") ? _0x1e8173[0] : (_0x1e8173 = lib.removeLinksByUrlComponent(lib.findLinksByUrlComponent("//" + document.domain), "?")).length > 0 ? _0x1e8173[Math.floor(Math.random() * _0x1e8173.length)] : undefined;
        if (typeof _0x1e8173 != "undefined") {
          _0x2750fa([{
            click: _0x1e8173
          }]);
        } else {
          engine.waitScene(_0x2750fa);
        }
      }, _0x2d479b);
    }
  },
  init: function () {
    lib.onload = function () {
      engine.auto = false;
      lib.handlePage();
      document.body.appendChild(GUI.menu);
      engine.waitScene(engine.handleScene);
    };
    engine.paused = true;
    lib.handlePage();
    engine.initMenu();
  },
  initMenu: function () {
    var _0x280e26 = GUI.content;
    Object.keys(modules).map(function (_0x32ebe2, _0x16bb5b) {
      var _0x40d0f3 = modules[_0x32ebe2];
      var _0x433475 = document.createElement("div");
      var _0x536d28 = lib.ce("div", {
        style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;",
        innerHTML: _0x40d0f3.name
      });
      var _0x58fd3e = new ToggleButton(_0x32ebe2);
      var _0x244103 = _0x58fd3e.getCheckbox();
      _0x244103.id = _0x32ebe2;
      _0x244103.checked = typeof lib.getCookie(_0x32ebe2) == "undefined" ? _0x40d0f3.enabled : lib.getCookie(_0x32ebe2) == 1;
      _0x40d0f3.enabled = _0x244103.checked;
      if (_0x40d0f3.type == TYPE_SWITCH) {
        _0x40d0f3.onswitch(_0x244103.checked);
      }
      _0x244103.onclick = function () {
        if (_0x40d0f3.type == TYPE_SWITCH) {
          modules[this.id].onswitch(this.checked);
        }
        modules[this.id].enabled = this.checked;
        if (!this.checked && engine.currentModule == this.id) {
          delete engine.currentModule;
        }
        if (this.checked && typeof engine.currentModule == "undefined") {
          if (typeof engine.timeoutId != "undefined") {
            clearTimeout(engine.timeoutId);
            delete engine.timeoutId;
          }
          engine.waitScene(engine.handleScene);
        }
        lib.setCookie(this.id, this.checked ? 1 : 0);
      };
      var _0xc309a5 = lib.ce("div", {
        style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer",
        id: "popup_" + _0x32ebe2,
        innerHTML: "?",
        onclick: function () {
          var _0x253168 = this.id.split("_")[1];
          if (typeof modules[_0x253168].descPopup == "undefined") {
            var _0x1d8090 = new PopupWindow(this.parentNode);
            _0x1d8090.addChild(lib.ce("div", {
              style: "font-size: 12px; color: #ffffff;",
              innerHTML: modules[_0x253168].description
            }));
            GUI.closeAllPopup();
            _0x1d8090.show();
            modules[_0x253168].descPopup = _0x1d8090;
          } else if (modules[_0x253168].descPopup.isOpened()) {
            modules[_0x253168].descPopup.hide();
          } else {
            GUI.closeAllPopup();
            modules[_0x253168].descPopup.show();
          }
        }
      });
      _0x433475.appendChild(_0x58fd3e.getElement());
      _0x433475.appendChild(_0x536d28);
      _0x433475.appendChild(_0xc309a5);
      if (modules[_0x32ebe2].settings) {
        var _0xd75552 = lib.ce("img", {
          style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer",
          id: "settings_" + _0x32ebe2,
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABDUlEQVR4AcXSPUoDURRH8TtJOj9aEXEVouAqRBAtDIq4AwsDgo0IIskUQkAsBDGFrkALRdBCG+swpJIQFFdgJKNH8PK43EiYgRT+/t1jTvGGJ/+BHYJtpH/C310SNPIFzwRPg4MCj9ywxDQNvghSzphimVseiHywifrG+JM1LGCcd7K8MmrBIV6TKjUSvH0LynQxRxQQhCJ1zAcrFgiztFFN9HNNEtQLM/2/dRdVRbDFqAoyKKjlC+bpoBKKhNMSLVSbOSxgnU9MHU1KHGO6rFpwgJcQE9PC27NgjDeydBixQNjIfBplf+mIe65YYJJTUoIeJ0ywyDV3REM9b78LgvN8QYX0dz228gR+wwc/ymXie5Q1fWkAAAAASUVORK5CYII=",
          onclick: function () {
            var _0xcc881d = this.id.split("_")[1];
            if (typeof modules[_0xcc881d].setPopup == "undefined") {
              var _0x1ee72b = new PopupWindow(this.parentNode, false);
              var _0x31d825 = lib.ce("div", {
                style: "font-size: 12px; color: #ffffff;"
              });
              _0x1ee72b.addChild(_0x31d825);
              for (var _0xdfdee8 in modules[_0xcc881d].settings) {
                var _0xd5992f = document.createElement("div");
                var _0x1939af = lib.ce("div", {
                  style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;",
                  innerHTML: modules[_0xcc881d].settings[_0xdfdee8].name
                });
                if (modules[_0xcc881d].settings[_0xdfdee8].type == "checkbox") {
                  var _0x4bc61f = new ToggleButton(modules[_0xcc881d].settings[_0xdfdee8].key);
                  var _0x42183d = _0x4bc61f.getCheckbox();
                  _0x42183d.id = modules[_0xcc881d].settings[_0xdfdee8].key;
                  if (typeof lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) == "undefined") {
                    lib.setCookie(modules[_0xcc881d].settings[_0xdfdee8].key, modules[_0xcc881d].settings[_0xdfdee8].value ? 1 : 0);
                  }
                  _0x42183d.onclick = function () {
                    lib.setCookie(this.id, this.checked ? 1 : 0);
                    if (typeof modules[_0xcc881d].onconfig != "undefined") {
                      modules[_0xcc881d].onconfig();
                    }
                  };
                  _0x42183d.checked = lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) == 1;
                  _0xd5992f.appendChild(_0x4bc61f.getElement());
                }
                if (modules[_0xcc881d].settings[_0xdfdee8].type == "select") {
                  var _0x178286 = new SelectBox(modules[_0xcc881d].settings[_0xdfdee8].key, modules[_0xcc881d].settings[_0xdfdee8].list);
                  if (typeof lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) == "undefined") {
                    lib.setCookie(modules[_0xcc881d].settings[_0xdfdee8].key, modules[_0xcc881d].settings[_0xdfdee8].value);
                  }
                  _0x178286.setSelection(lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key));
                  _0x178286.onchange = function (_0x59aac3, _0x54c7ed) {
                    lib.setCookie(_0x59aac3, _0x54c7ed);
                    if (typeof modules[_0xcc881d].onconfig != "undefined") {
                      modules[_0xcc881d].onconfig();
                    }
                  };
                  modules[_0xcc881d].settings[_0xdfdee8].sb = _0x178286;
                  _0xd5992f.appendChild(_0x178286.getElement());
                }
                _0xd5992f.appendChild(_0x1939af);
                if (modules[_0xcc881d].settings[_0xdfdee8].type == "range") {
                  var _0x2475f9 = lib.ce("input", {
                    type: "range",
                    style: "display: inline-block",
                    id: modules[_0xcc881d].settings[_0xdfdee8].key,
                    max: modules[_0xcc881d].settings[_0xdfdee8].maxvalue
                  });
                  if (typeof lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) == "undefined") {
                    lib.setCookie(modules[_0xcc881d].settings[_0xdfdee8].key, modules[_0xcc881d].settings[_0xdfdee8].value);
                  }
                  _0x2475f9.id = modules[_0xcc881d].settings[_0xdfdee8].key;
                  var _0x1c3e48 = lib.ce("div", {
                    style: "display: inline-block; padding-left: 3px;",
                    innerHTML: lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) + "мс"
                  });
                  _0x1c3e48.id = "val_" + modules[_0xcc881d].settings[_0xdfdee8].key;
                  _0x2475f9.oninput = function () {
                    lib.setCookie(this.id, this.value);
                    document.querySelector("#val_" + this.id).innerHTML = this.value + "мс";
                    if (typeof modules[_0xcc881d].onconfig != "undefined") {
                      modules[_0xcc881d].onconfig();
                    }
                  };
                  _0x2475f9.value = lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key);
                  _0xd5992f.appendChild(_0x2475f9);
                  _0xd5992f.appendChild(_0x1c3e48);
                }
                if (modules[_0xcc881d].settings[_0xdfdee8].type == "text") {
                  if (typeof lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key) == "undefined") {
                    lib.setCookie(modules[_0xcc881d].settings[_0xdfdee8].key, modules[_0xcc881d].settings[_0xdfdee8].value);
                  }
                  var _0x14eefe = new EditText(modules[_0xcc881d].settings[_0xdfdee8].key, lib.getCookie(modules[_0xcc881d].settings[_0xdfdee8].key));
                  _0x14eefe.onchange = function (_0x3a7811, _0x2c7a49) {
                    lib.setCookie(_0x3a7811, _0x2c7a49);
                  };
                  _0xd5992f.appendChild(_0x14eefe.getElement());
                }
                _0x31d825.appendChild(_0xd5992f);
              }
              GUI.closeAllPopup();
              _0x1ee72b.show();
              modules[_0xcc881d].setPopup = _0x1ee72b;
            } else if (modules[_0xcc881d].setPopup.isOpened()) {
              modules[_0xcc881d].setPopup.hide();
            } else {
              GUI.closeAllPopup();
              modules[_0xcc881d].setPopup.show();
            }
          }
        }, _0x433475);
        _0xd75552.click();
        _0xd75552.click();
      }
      _0x280e26.appendChild(_0x433475);
    });
  }
};
var bratki = {
  getMissionsLinks: function () {
    var _0x3b976d = [];
    var _0x3aa3b7 = document.body.innerHTML.indexOf("Заказухи");
    var _0x55c4b3 = document.body.innerHTML.indexOf("refreshLink", document.body.innerHTML.indexOf("Все"));
    if (_0x3aa3b7 != -1) {
      var _0x1b306d = lib.findLinksByUrlComponent("mission/description");
      _0x1b306d.forEach(function (_0x405d00, _0x101663, _0x1dd4ca) {
        var _0x517feb = document.body.innerHTML.indexOf(_0x405d00.outerHTML);
        if (_0x517feb > _0x3aa3b7 && _0x517feb < _0x55c4b3 && !_0x405d00.className.includes("inactive")) {
          _0x3b976d.push(_0x405d00);
        }
      });
    }
    return _0x3b976d;
  },
  getCombatLinks: function () {
    var _0x55f6a3 = lib.findLinksByUrlComponent("combatPanel");
    var _0x2a566f = [];
    for (var _0x50285e in _0x55f6a3) {
      if (typeof _0x55f6a3[_0x50285e] != "object") {
        continue;
      }
      if (!_0x55f6a3[_0x50285e].classList || !_0x55f6a3[_0x50285e].classList.contains("btn-lock") && !_0x55f6a3[_0x50285e].classList.contains("minor")) {
        _0x2a566f.push(_0x55f6a3[_0x50285e]);
      }
    }
    return _0x2a566f;
  },
  getPackagePrice: function () {
    var _0x460a92 = document.querySelector("a[href*='messagePanel:codIncomingBlock:codActionsPanel:buyLink']").parentNode.querySelector("span").outerHTML;
    var _0xb5be1b = _0x460a92.match(/[^><]+(?=<)/g);
    var _0x2847ed;
    if (_0xb5be1b.length == 1) {
      if (_0x460a92.includes("bucks")) {
        _0x2847ed = _0xb5be1b[0] * 100;
      } else {
        _0x2847ed = parseInt(_0xb5be1b[0]);
      }
    } else {
      _0x2847ed = _0xb5be1b[0] * 100 + parseInt(_0xb5be1b[1]);
    }
    return _0x2847ed;
  },
  getPackageItems: function () {
    var _0x4c575b = document.querySelectorAll("div.content-inner>div:not([class])");
    var _0x827117 = [];
    for (var _0x3c9d7f in _0x4c575b) {
      if (typeof _0x4c575b[_0x3c9d7f] == "object") {
        var _0x12bc2f = _0x4c575b[_0x3c9d7f].querySelector("a").href;
        var _0x45a87c = _0x4c575b[_0x3c9d7f].innerText.split(" x")[0];
        var _0x159434 = _0x4c575b[_0x3c9d7f].innerHTML.includes("item_difficulty_40") ? ">>" : _0x4c575b[_0x3c9d7f].innerHTML.includes("item_difficulty_30") ? ">" : "";
        var _0xbe4b5a = _0x4c575b[_0x3c9d7f].innerText.split(" x")[1];
        _0x827117.push({
          name: _0x45a87c,
          diff: _0x159434,
          href: _0x12bc2f,
          count: parseInt(_0xbe4b5a === undefined ? 1 : _0xbe4b5a)
        });
      }
    }
    return _0x827117;
  },
  getEnemyHp: function () {
    try {
      var _0x2cf549 = document.querySelector(".enemy-hp-amount");
      if (typeof _0x2cf549 == "undefined" || _0x2cf549 === null) {
        var _0x468a84 = document.querySelector("ul.block").querySelector("li").querySelectorAll("span")[1];
        if (typeof _0x468a84 != "undefined") {
          var _0x18ca58 = _0x468a84.innerHTML;
          return _0x18ca58.substring(2, _0x18ca58.length - 3);
        }
      } else {
        return _0x2cf549.innerHTML;
      }
    } catch (_0x55ce9b) {}
  },
  getLastDamage: function () {
    try {
      if (bratki.hasNewInterface()) {
        return document.querySelector("div.b-header").querySelectorAll("span>span.warn")[0].innerHTML;
      } else {
        return document.querySelector("div.header").querySelectorAll("span")[2].innerHTML;
      }
    } catch (_0x4860f5) {}
  },
  getEnemyName: function () {
    try {
      if (bratki.hasNewInterface()) {
        return document.querySelector(".enemy-name").innerHTML;
      } else {
        var _0x203d31 = document.querySelector("ul.block").querySelector("span");
        if (_0x203d31.parentNode.innerHTML.includes("Атаковать")) {
          return _0x203d31.innerHTML;
        }
      }
    } catch (_0x1762af) {}
  },
  getMyHp: function () {
    try {
      var _0x11b8ee;
      if (bratki.hasNewInterface()) {
        _0x11b8ee = document.querySelector("div.b-header").querySelector("span");
      } else {
        _0x11b8ee = document.querySelector("div.header").querySelector("span");
      }
      if (_0x11b8ee !== null) {
        return {
          count: _0x11b8ee.innerHTML,
          type: ["major", "warn", "info"].indexOf(_0x11b8ee.className)
        };
      }
    } catch (_0xcaca80) {}
  },
  getTeamHp: function () {
    try {
      var _0x2d2326 = ["span.major", "span.warn", "span.info"];
      var _0x50a29d = 2;
      for (var _0x581aaa in _0x2d2326) {
        var _0x59017c = document.querySelectorAll("a[href*='user']:not([class])");
        for (var _0x333ef6 in _0x59017c) {
          if (_0x59017c[_0x333ef6].parentNode.querySelector(_0x2d2326[_0x581aaa]) !== null && _0x50a29d < _0x581aaa) {
            _0x50a29d = _0x581aaa;
          }
        }
      }
      return _0x581aaa;
    } catch (_0x599963) {}
  },
  hasNewInterface: function () {
    return document.querySelector("div.b-header") !== null;
  },
  getUid: function () {
    try {
      var _0x3f9637 = document.querySelector("div.content-inner>img").parentElement.querySelector("span").innerText;
      if (document.location.href.includes(_0x3f9637)) {
        return undefined;
      }
      return _0x3f9637;
    } catch (_0x2111fd) {
      return undefined;
    }
  },
  getRackItems: function () {
    var _0xae0f77 = lib.findLinksByUrlComponent("crackLink");
    var _0x249844 = [];
    for (var _0x10bd92 in _0xae0f77) {
      if (typeof _0xae0f77[_0x10bd92] != "object") {
        continue;
      }
      _0x249844.push(_0xae0f77[_0x10bd92].parentNode.parentNode);
    }
    return _0x249844;
  }
};
let lib = {
  safeMode: true,
  loadTime: 0,
  lastAction: Date.now(),
  onload: function () {},
  handlePage: function () {
    let _0x538131 = document.querySelectorAll("a");
    _0x538131.forEach(function (_0x4f43ef) {
      if (_0x4f43ef.onclick && !_0x4f43ef.href.includes("robLink")) {
        return;
      }
      _0x4f43ef.onclick = function () {
        if (typeof engine.timeoutId != "undefined") {
          clearTimeout(engine.timeoutId);
        }
        if (typeof engine.timerId != "undefined") {
          clearInterval(engine.timerId);
        }
        lib.request(this);
        return false;
      };
    });
    let _0x334d10 = document.querySelectorAll("form");
    _0x334d10.forEach(function (_0x1e33fc) {
      _0x1e33fc.onsubmit = function () {
        let _0x132313 = new XMLHttpRequest();
        _0x132313.open(this.method, this.action, false);
        _0x132313.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        let _0xee9dd3 = lib.urlData(this);
        _0x132313.send(_0xee9dd3);
        document.body.innerHTML = _0x132313.responseText;
        if (typeof engine.timeoutId != "undefined") {
          clearTimeout(engine.timeoutId);
        }
        if (typeof engine.timerId != "undefined") {
          clearInterval(engine.timerId);
        }
        lib.onload();
        return false;
      };
      _0x1e33fc.querySelectorAll("input[type='submit']").forEach(function (_0x2e5852) {
        _0x2e5852.onclick = function () {
          this.id = "clicked";
        };
      });
    });
    Object.keys(modules).map(function (_0x52900c, _0xca0a90) {
      if (modules[_0x52900c].enabled && modules[_0x52900c].onload) {
        modules[_0x52900c].onload();
      }
    });
  },
  urlData: function (_0x1e07ba) {
    let _0x2b21e2 = [];
    for (let _0x5aecdd in _0x1e07ba.elements) {
      if (_0x1e07ba.elements[_0x5aecdd].type == "submit" && _0x1e07ba.elements[_0x5aecdd].id != "clicked") {
        continue;
      }
      _0x2b21e2.push(_0x1e07ba.elements[_0x5aecdd].name + "=" + encodeURIComponent(_0x1e07ba.elements[_0x5aecdd].value));
    }
    return _0x2b21e2.join("&");
  },
  request: function (_0x315ff5, _0x16db75 = lib.onload, _0x5b781c = lib.safeMode ? Math.floor(Math.random() * 600) + 300 : 0) {
    if (_0x315ff5.hasAttribute("timeout")) {
      _0x5b781c = _0x315ff5.getAttribute("timeout");
    }
    if (!_0x315ff5.hasAttribute("auto")) {
      _0x5b781c = 0;
      lib.lastAction = Date.now();
    }
    let _0x42e66e = Date.now();
    let _0x5f4df0 = new XMLHttpRequest();
    _0x5f4df0.onreadystatechange = function () {
      if (_0x5f4df0.readyState == 4) {
        if (_0x5f4df0.status == 200) {
          lib.loadTime = Date.now() - _0x42e66e;
          document.body.innerHTML = _0x5f4df0.responseText;
          history.pushState({
            html: _0x5f4df0.responseText
          }, "Братки", _0x5f4df0.responseURL);
          if (!engine.auto) {
            scrollTo(0, 0);
          }
          _0x16db75();
        } else if (status === 0 && url.indexOf(document.domain) == -1) {
          document.location = _0x315ff5.href;
        } else {
          bratki.requestCnt--;
          lib.request(_0x315ff5, _0x16db75, _0x5b781c);
        }
      }
    };
    _0x5f4df0.open("GET", _0x315ff5.href, true);
    let _0xc2397b = new ProgressBar(_0x315ff5);
    _0x315ff5.appendChild(_0xc2397b.getElement());
    let _0x31e30b = setInterval(function () {
      if (engine.auto && engine.paused) {
        _0xc2397b.setProgress(0);
      } else {
        let _0x1e3bfe = Date.now() - _0x42e66e;
        let _0xc698c5 = Math.floor(_0x1e3bfe / _0x5b781c * 100);
        _0xc2397b.setProgress(_0xc698c5);
      }
    }, 0, 100);
    if (typeof lib.rTimeout != "undefined") {
      clearTimeout(lib.rTimeout);
    }
    lib.rTimeout = setTimeout(function () {
      delete lib.rTimeout;
      clearInterval(_0x31e30b);
      if (engine.auto && engine.paused) {
        engine.auto = false;
        return;
      }
      _0x315ff5.style.color = "#6f6";
      _0x5f4df0.send();
    }, _0x5b781c);
  },
  removeLinksByUrlComponent: function (_0x42897f, _0x3788c2) {
    let _0x5fade = [];
    for (let _0x2d7c69 in _0x42897f) {
      if (typeof _0x42897f[_0x2d7c69].href != "undefined" && !_0x42897f[_0x2d7c69].href.includes(_0x3788c2)) {
        _0x5fade.push(_0x42897f[_0x2d7c69]);
      }
    }
    return _0x5fade;
  },
  findLinksByUrlComponent: function (_0x39afed) {
    return document.querySelectorAll("a[href*='" + _0x39afed + "']");
  },
  findLinksByText: function (_0x3430ba, _0x2e0456 = true, _0x42cd6f = 0) {
    let _0x145411 = [];
    let _0x48348b = document.querySelectorAll("a");
    _0x48348b.forEach(function (_0x15892e, _0x256177, _0x1d589c) {
      if (_0x2e0456 && _0x15892e.innerHTML.includes(_0x3430ba, _0x42cd6f) || _0x15892e.innerHTML == _0x3430ba) {
        _0x145411.push(_0x15892e);
      }
    });
    return _0x145411;
  },
  ce: function (_0x1c6bef, _0x134e1b, _0x240488) {
    var _0x3a7a49 = document.createElement(_0x1c6bef);
    for (var _0x29b376 in _0x134e1b) {
      _0x3a7a49[_0x29b376] = _0x134e1b[_0x29b376];
    }
    if (typeof _0x240488 == "object") {
      _0x240488.appendChild(_0x3a7a49);
    }
    return _0x3a7a49;
  },
  getCookie: function (_0x305e8c) {
    var _0x311900 = document.cookie.match(new RegExp("(?:^|; )" + _0x305e8c.replace(/([\.$?*|{}\(\)\[\]\\/\+^])/g, "\\$1") + "=([^;]*)"));
    if (_0x311900) {
      return decodeURIComponent(_0x311900[1]);
    } else {
      return undefined;
    }
  },
  setCookie: function (_0x3ff37e, _0x356722, _0x5e0fac) {
    _0x5e0fac = _0x5e0fac || {
      path: "/",
      domain: document.domain
    };
    var _0x305b90 = _0x5e0fac.expires;
    if (typeof _0x305b90 == "number" && _0x305b90) {
      var _0x4f4314 = new Date();
      _0x4f4314.setTime(_0x4f4314.getTime() + _0x305b90 * 1000);
      _0x305b90 = _0x5e0fac.expires = _0x4f4314;
    }
    if (_0x305b90 && _0x305b90.toUTCString) {
      _0x5e0fac.expires = _0x305b90.toUTCString();
    }
    _0x356722 = encodeURIComponent(_0x356722);
    var _0x540c26 = _0x3ff37e + "=" + _0x356722;
    for (var _0x3295cd in _0x5e0fac) {
      _0x540c26 += "; " + _0x3295cd;
      var _0x33b135 = _0x5e0fac[_0x3295cd];
      if (_0x33b135 !== true) {
        _0x540c26 += "=" + _0x33b135;
      }
    }
    document.cookie = _0x540c26;
  }
};
function ProgressBar(_0x2d6478, _0x533b8e = "black") {
  var _0x1dc660 = lib.ce("div", {
    style: "width: 0%; height: 100%; position: absolute; opacity: 0.3; top: 0; left: 0"
  });
  _0x1dc660.style.background = _0x533b8e;
  _0x2d6478.style.position = "relative";
  this.setProgress = function (_0x537930) {
    _0x1dc660.style.width = "" + _0x537930 + "%";
  };
  this.getElement = function () {
    return _0x1dc660;
  };
}
function PopupWindow(_0x5b6f86, _0x3c8a45 = true) {
  var _0x35d672 = lib.ce("div", {
    style: "overflow: hidden; border-radius: 3px; z-index: 3000; right: 0; background: #000; transition: 250ms;"
  }, _0x5b6f86);
  if (_0x3c8a45) {
    _0x35d672.style.position = "absolute";
  }
  var _0x536fd3 = false;
  this.show = function () {
    _0x35d672.style.boxShadow = "0 0 1px grey";
    _0x35d672.style.opacity = "0.9";
    _0x35d672.style.maxHeight = "500px";
    _0x35d672.style.padding = "5px";
    _0x536fd3 = true;
  };
  this.hide = function () {
    _0x35d672.style.boxShadow = "0";
    _0x35d672.style.opacity = "0";
    _0x35d672.style.maxHeight = "0";
    _0x35d672.style.padding = "0";
    _0x536fd3 = false;
  };
  this.isOpened = function () {
    return _0x536fd3;
  };
  this.addChild = function (_0x335069) {
    _0x35d672.appendChild(_0x335069);
  };
  this.hide();
}
function SelectBox(_0x1e2407, _0x156380) {
  var _0xf9e4e0 = lib.ce("div", {
    style: "cursor: pointer; height: 20px; border-radius: 5px; overflow: hidden; display: inline-block;"
  });
  var _0x418746 = lib.ce("div", {
    style: "background: #000; position: relative; transition: 250ms; top: 0px;"
  }, _0xf9e4e0);
  var _0x543251 = 0;
  ctx = this;
  for (var _0x467e29 in _0x156380) {
    var _0x1f32fc = lib.ce("div", {
      style: "font-size: 12px; padding: 3px 3px; color: #2196F3;",
      innerHTML: _0x156380[_0x467e29],
      onclick: function () {
        _0x418746.style.top = (_0x543251 = (_0x543251 -= 20) <= _0x156380.length * -20 ? 0 : _0x543251) + "px";
        ctx.onchange(_0x1e2407, _0x543251 / -20);
      }
    }, _0x418746);
  }
  this.getElement = function () {
    return _0xf9e4e0;
  };
  this.setSelection = function (_0x213b0e) {
    _0x543251 = _0x213b0e * -20;
    _0x418746.style.top = _0x543251 + "px";
  };
}
function EditText(_0x2829c7, _0x4d8eae) {
  var _0x42c66e = lib.ce("div", {
    className: "edit_text",
    contentEditable: true,
    innerHTML: _0x4d8eae
  });
  var _0x130a5f = this;
  _0x42c66e.onkeyup = function () {
    if (_0x130a5f.onchange !== undefined) {
      _0x130a5f.onchange(_0x2829c7, _0x42c66e.innerText);
    }
  };
  this.getElement = function () {
    return _0x42c66e;
  };
}
function ToggleButton(_0xf0169f) {
  var _0x86fbdd = lib.ce("label", {
    className: "switch"
  });
  var _0x18c8bd = lib.ce("input", {
    type: "checkbox"
  }, _0x86fbdd);
  var _0x88f61 = lib.ce("span", {
    className: "slider round"
  }, _0x86fbdd);
  this.getElement = function () {
    return _0x86fbdd;
  };
  this.getCheckbox = function () {
    return _0x18c8bd;
  };
}
const idExpirationDates = {
  "15807522": "2125-1-19",
  "15887366": "2025-2-15",
  "8342591": "2025-3-5",
  "4845070": "2025-3-4",
  "7221536": "2124-12-28",
  "15747005": "2025-2-14",
  "15896664": "2025-3-16",
  "9758750": "2026-1-21",
  "6564016": "2025-3-3",
  "367681": "2025-3-8",
  "10777548": "2025-3-16",
  "15826562": "2125-3-16"
};
GUI.createMenu();
document.body.appendChild(GUI.menu);
GUI.showMsg("проверка лицензии");
if (typeof bratki.getUid() == "undefined" || bratki.getUid().length < 4) {
  alert("Не удалось определить id вашего персонажа, убедитесь что вы вошли в него из кабинета и повторите снова");
} else {
  bratki.uid = bratki.getUid();
  bratki.checking = true;
  function checkID(_0x491e66) {
    const _0x5f408f = idExpirationDates[_0x491e66];
    if (!_0x5f408f) {
      return -1;
    }
    const _0x4ef18a = new Date();
    const _0x1797ac = new Date(_0x5f408f);
    const _0x57ba71 = _0x1797ac - _0x4ef18a;
    return Math.floor(_0x57ba71 / 1000);
  }
  const remainingTime = checkID(bratki.uid);
  if (remainingTime > 0) {
    var s = engine.callback(remainingTime);
    document.head.appendChild(s);
  } else {
    alert("Недопустимый ID или истек срок действия");
  }
}
function kek(_0x1857e4) {
  eval(_0x1857e4.contents);
}