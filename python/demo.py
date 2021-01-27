import time
import random

def do_work(*args):
  for a in args:
    print(a)
  

def parse(input):
  # from latinwordnet import LatinWordNet
  # LWN = LatinWordNet()
  tokens = input.split(" ")
  # tokens = word_tokenize(input)
  parsedTokens = []
  # for i in range(100000):
  #   test = random.randint(1, 8) + random.randint(-4, 90)
  parsedTokens.append({
    "text": "Puer",
    "lemma": "puer",
    "pos": "noun",
    "decl": "3rd person singular nominative",
    "gloss": ["a child; chit", "a boy, lad (typically between ages 7-14 but could be younger) (older than an infans but younger than an adulescens)", "a male servant or page; slave", "a bachelor"]
  })
  parsedTokens.append({
    "text": "puellam",
    "lemma": "puella",
    "pos": "noun",
    "decl": "3rd person singular accusative",
    "gloss": ["a girl, a lass, a maiden; a female child", "a sweetheart, a mistress, a beloved maiden", "a kitten", "a young woman, a young wife", "a female slave"]
  })
  parsedTokens.append({
    "text": "vexat",
    "lemma": "vexo",
    "pos": "verb",
    "decl": "3rd person singular present active indicative",
    "gloss": ["I shake or jolt violently.", "I harass, annoy.", "I vex, trouble."]
  })
  
  # for token in tokens:
  #   if token == "":
  #     continue
  #   parsedTokens.append({
  #     "text": token,
  #     "lemma": token,
  #     "pos": "verb",
  #     "decl": "3rd person singular future tense",
  #     "gloss": ["a test definition", "a second test definition"]
  #   })
  return parsedTokens
