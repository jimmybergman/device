var device = require('../'),
    assert = require('assert');

describe('device', function() {
    describe('1.Accoona-AI-Agent 1.1.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Accoona-AI-Agent/1.1.2');
            assert.equal(type, 'bot');
        });
    });
    describe('2.Arachmo',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/4.0 (compatible; Arachmo)');
            assert.equal(type, 'bot');
        });
    });
    describe('3.B-l-i-t-z-B-O-T',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/4.0 (compatible; B-l-i-t-z-B-O-T)');
            assert.equal(type, 'bot');
        });
    });
    describe('4.Cerberian Drtrs 3.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-1)');
            assert.equal(type, 'bot');
        });
    });
    describe('5.Cerberian Drtrs 3.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-0)');
            assert.equal(type, 'bot');
        });
    });
    describe('6.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Charlotte/0.9t; http://www.searchme.com/support/)');
            assert.equal(type, 'bot');
        });
    });
    describe('7.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Charlotte/0.9t; +http://www.searchme.com/support/)');
            assert.equal(type, 'bot');
        });
    });
    describe('8.Charlotte 1.0b',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Charlotte/1.0b; http://www.searchme.com/support/)');
            assert.equal(type, 'bot');
        });
    });
    describe('9.Charlotte 1.0t',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Charlotte/1.0t; http://www.searchme.com/support/)');
            assert.equal(type, 'bot');
        });
    });
    describe('10.Charlotte 1.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Charlotte/1.1; http://www.searchme.com/support/)');
            assert.equal(type, 'bot');
        });
    });
    describe('11.Holmes 3.9',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('holmes/3.9 (someurl.co.cc)');
            assert.equal(type, 'bot');
        });
    });
    describe('12.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.5 (webmaster@online-medien.de)');
            assert.equal(type, 'bot');
        });
    });
    describe('13.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.5 (root@localhost)');
            assert.equal(type, 'bot');
        });
    });
    describe('14.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.5 (infosys@storm.rmi.org)');
            assert.equal(type, 'bot');
        });
    });
    describe('15.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.5');
            assert.equal(type, 'bot');
        });
    });
    describe('16.htdig 3.1.6',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.6 (unconfigured@htdig.searchengine.maintainer)');
            assert.equal(type, 'bot');
        });
    });
    describe('17.htdig 3.1.6',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('htdig/3.1.6 (mathieu.peltier@inrialpes.fr)');
            assert.equal(type, 'bot');
        });
    });
    describe('18.ichiro 2.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('ichiro/2.0 (ichiro@nttr.co.jp)');
            assert.equal(type, 'bot');
        });
    });
    describe('19.igdeSpyder',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('igdeSpyder (compatible; igde.ru; +http://igde.ru/doc/tech.html)');
            assert.equal(type, 'bot');
        });
    });
    describe('20.L.webis 0.87',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('L.webis/0.87 (http://webalgo.iit.cnr.it/index.php?pg=lwebis)');
            assert.equal(type, 'bot');
        });
    });
    describe('21.LinkWalker',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('LinkWalker');
            assert.equal(type, 'bot');
        });
    });
    describe('22.LinkWalker 2.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('LinkWalker/2.0');
            assert.equal(type, 'bot');
        });
    });
    describe('23.lwp-trivial 1.33',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('lwp-trivial/1.33');
            assert.equal(type, 'bot');
        });
    });
    describe('24.lwp-trivial 1.35',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('lwp-trivial/1.35');
            assert.equal(type, 'bot');
        });
    });
    describe('25.lwp-trivial 1.36',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('lwp-trivial/1.36');
            assert.equal(type, 'bot');
        });
    });
    describe('26.lwp-trivial 1.38',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('lwp-trivial/1.38');
            assert.equal(type, 'bot');
        });
    });
    describe('27.lwp-trivial 1.41',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('lwp-trivial/1.41');
            assert.equal(type, 'bot');
        });
    });
    describe('28.Mnogosearch 3.1.21',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mnogosearch-3.1.21');
            assert.equal(type, 'bot');
        });
    });
    describe('29.mogimogi 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('mogimogi/1.0');
            assert.equal(type, 'bot');
        });
    });
    describe('30.MVAClient',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('MVAClient');
            assert.equal(type, 'bot');
        });
    });
    describe('31.NetResearchServer',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('NetResearchServer(http://www.look.com)');
            assert.equal(type, 'bot');
        });
    });
    describe('32.Nymesis 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Nymesis/1.0 (http://nymesis.com)');
            assert.equal(type, 'bot');
        });
    });
    describe('33.oegp 1.3.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('oegp v. 1.3.0');
            assert.equal(type, 'bot');
        });
    });
    describe('34.Pompos 1.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Pompos/1.1 http://pompos.iliad.fr');
            assert.equal(type, 'bot');
        });
    });
    describe('35.Pompos 1.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Pompos/1.2 http://pompos.iliad.fr');
            assert.equal(type, 'bot');
        });
    });
    describe('36.Pompos 1.3',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Pompos/1.3 http://dir.com/pompos.html');
            assert.equal(type, 'bot');
        });
    });
    describe('37.PycURL',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL');
            assert.equal(type, 'bot');
        });
    });
    describe('38.PycURL 7.13.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.13.2');
            assert.equal(type, 'bot');
        });
    });
    describe('39.PycURL 7.15.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.15.5');
            assert.equal(type, 'bot');
        });
    });
    describe('40.PycURL 7.16.4',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.16.4');
            assert.equal(type, 'bot');
        });
    });
    describe('41.PycURL 7.18.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.18.0');
            assert.equal(type, 'bot');
        });
    });
    describe('42.PycURL 7.18.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.18.2');
            assert.equal(type, 'bot');
        });
    });
    describe('43.PycURL 7.19.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.19.0');
            assert.equal(type, 'bot');
        });
    });
    describe('44.PycURL 7.19.3',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.19.3');
            assert.equal(type, 'bot');
        });
    });
    describe('45.PycURL 7.19.5',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.19.5');
            assert.equal(type, 'bot');
        });
    });
    describe('46.PycURL 7.19.7',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('PycURL/7.19.7');
            assert.equal(type, 'bot');
        });
    });
    describe('47.Qseero 1.0.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Qseero v1.0.0');
            assert.equal(type, 'bot');
        });
    });
    describe('48.SBIder 0.8-dev',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('SBIder/0.8-dev (SBIder; http://www.sitesell.com/sbider.html; http://support.sitesell.com/contact-support.html)');
            assert.equal(type, 'bot');
        });
    });
    describe('49.ScoutJet',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; ScoutJet; http://www.scoutjet.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('50.Scrubby 2.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Scrubby/2.1 (http://www.scrubtheweb.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('51.Scrubby 2.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Scrubby/2.1; +http://www.scrubtheweb.com/abs/meta-check.html)');
            assert.equal(type, 'bot');
        });
    });
    describe('52.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Scrubby/2.2 (http://www.scrubtheweb.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('53.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Scrubby/2.2; +http://www.scrubtheweb.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('54.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Mozilla/5.0 (compatible; Scrubby/2.2; http://www.scrubtheweb.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('55.SearchSight 2.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('SearchSight/2.0 (http://SearchSight.com/)');
            assert.equal(type, 'bot');
        });
    });
    describe('56.semanticdiscovery 0.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('semanticdiscovery/0.1');
            assert.equal(type, 'bot');
        });
    });
    describe('57.silk 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('silk/1.0 (+http://www.slider.com/silk.htm)/3.7');
            assert.equal(type, 'bot');
        });
    });
    describe('58.silk 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Silk/1.0');
            assert.equal(type, 'bot');
        });
    });
    describe('59.Sqworm 2.9.85-BETA',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Sqworm/2.9.85-BETA (beta_release; 20011115-775; i686-pc-linux-gnu)');
            assert.equal(type, 'bot');
        });
    });
    describe('60.StackRambler 2.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('StackRambler/2.0 (MSIE incompatible)');
            assert.equal(type, 'bot');
        });
    });
    describe('61.StackRambler 2.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('StackRambler/2.0');
            assert.equal(type, 'bot');
        });
    });
    describe('62.truwoGPS 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('truwoGPS/1.0 (GNU/Linux; U; i686; en-US; +http://www.lan4lano.net/browser.html )');
            assert.equal(type, 'bot');
        });
    });
    describe('63.updated 0.1-beta',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('updated/0.1-beta (updated; http://www.updated.com; updated@updated.com)');
            assert.equal(type, 'bot');
        });
    });
    describe('64.voyager 1.0',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('voyager/1.0');
            assert.equal(type, 'bot');
        });
    });
    describe('65.VYU2',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('VYU2 (GNU; OpenRISC)');
            assert.equal(type, 'bot');
        });
    });
    describe('66.webcollage 1.114',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('webcollage/1.114');
            assert.equal(type, 'bot');
        });
    });
    describe('67.webcollage 1.117',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('webcollage/1.117');
            assert.equal(type, 'bot');
        });
    });
    describe('68.webcollage 1.125',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('webcollage/1.125');
            assert.equal(type, 'bot');
        });
    });
    describe('69.webcollage 1.129',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('webcollage/1.129');
            assert.equal(type, 'bot');
        });
    });
    describe('70.webcollage 1.93',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('webcollage/1.93');
            assert.equal(type, 'bot');
        });
    });
    describe('71.yacybot',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('yacy (i386 Linux 2.6.14-1.1653_FC4smp; java 1.5.0_04; Europe/de) yacy.net');
            assert.equal(type, 'bot');
        });
    });
    describe('72.yacybot',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('yacy (i386 Linux 2.4.20-021stab028.17.777-enterprise; java 1.4.2_08; Europe/en) yacy.net');
            assert.equal(type, 'bot');
        });
    });
    describe('73.yoogliFetchAgent 0.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('yoogliFetchAgent/0.1');
            assert.equal(type, 'bot');
        });
    });
    describe('74.Zao 0.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Zao/0.1 (http://www.kototoi.org/zao/)');
            assert.equal(type, 'bot');
        });
    });
    describe('75.Zao 0.1',function(){
        it('should get device type bot', function(){
            var type = device.useragent_is('Zao/0.1 (http://www.kototoi.org/zao/)');
            assert.equal(type, 'bot');
        });
    });
});